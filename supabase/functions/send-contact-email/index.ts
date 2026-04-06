const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'
const NOTIFICATION_EMAIL = 'sfernandezeducacion@gmail.com'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, service, message, submissionId } = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured')
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY_1')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY_1 is not configured')
    }

    const serviceLabel = service === 'institucional' ? 'Plan Institucional' 
      : service === 'personalizado' ? 'Sesión Personalizada' 
      : service === 'informacion' ? 'Solo información' 
      : service || 'No especificado'

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #E8734A; margin-bottom: 20px;">🎵 Nueva consulta desde Cantando Soy Feliz</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 140px;">Nombre:</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Teléfono:</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
          <tr><td style="padding: 10px 8px; font-weight: bold; border-bottom: 1px solid #eee;">Servicio:</td><td style="padding: 10px 8px; border-bottom: 1px solid #eee;">${serviceLabel}</td></tr>
          <tr><td style="padding: 10px 8px; font-weight: bold; vertical-align: top;">Mensaje:</td><td style="padding: 10px 8px;">${message}</td></tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Este mensaje fue enviado desde el formulario de contacto de cantandosoyfeliz.com</p>
      </div>
    `

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Cantando Soy Feliz <onboarding@resend.dev>',
        to: [NOTIFICATION_EMAIL],
        subject: `Nueva consulta de ${name} - Cantando Soy Feliz`,
        html: emailHtml,
      }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error(`Resend API error [${response.status}]:`, JSON.stringify(data))
      throw new Error(`Email send failed [${response.status}]: ${JSON.stringify(data)}`)
    }

    console.log('Email sent successfully to', NOTIFICATION_EMAIL, 'submission:', submissionId)

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
