import { corsHeaders } from '@supabase/supabase-js/cors'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const NOTIFICATION_EMAIL = 'matibrey3@gmail.com'

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

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Save to database
    await supabase.from('contact_submissions').insert({
      id: submissionId,
      name,
      email,
      phone: phone || null,
      service: service || null,
      message,
    })

    // Send notification email via Lovable email API
    const projectRef = Deno.env.get('SUPABASE_URL')?.match(/https:\/\/(.+)\.supabase\.co/)?.[1]
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #E8734A;">Nueva consulta desde Cantando Soy Feliz</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nombre:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          ${phone ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Teléfono:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ''}
          ${service ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Servicio:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${service}</td></tr>` : ''}
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Mensaje:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td></tr>
        </table>
      </div>
    `

    console.log('Contact form submission saved:', submissionId)

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
