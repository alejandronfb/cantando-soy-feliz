import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. María Fernández",
      role: "Directora de Residencia San Rafael",
      location: "Buenos Aires",
      text: "Desde que implementamos las sesiones de Mente Activa, hemos visto una reducción notable en la agitación de nuestros residentes. Los familiares reportan que sus seres queridos están más comunicativos y sonrientes después de cada sesión.",
      metric: "40% reducción en agitación",
      rating: 5
    },
    {
      name: "Carlos Gómez",
      role: "Familia de Participante",
      location: "Capital Federal",
      text: "Mi madre tiene Alzheimer avanzado y casi no hablaba. Durante la sesión personalizada, al escuchar 'Alfonsina y el Mar', comenzó a cantar y me miró con una claridad que no veía en meses. Fue un regalo invaluable.",
      metric: "Momento inolvidable capturado",
      rating: 5
    },
    {
      name: "Lic. Roberto Martínez",
      role: "Coordinador de Actividades",
      location: "Residencia Los Álamos",
      text: "El enfoque científico de Mente Activa hace la diferencia. No es solo entretenimiento, es estimulación cognitiva real. Hemos documentado mejoras en atención y memoria de trabajo en el 65% de nuestros participantes.",
      metric: "65% mejora documentada",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Testimonios que
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Transforman Vidas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Familias e instituciones que han experimentado el poder de la música significativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm font-semibold text-primary">
                  {testimonial.metric}
                </p>
              </div>

              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">+50 residencias</span> confían en Mente Activa para el bienestar de sus residentes
          </p>
        </div>
      </div>
    </section>
  );
};
