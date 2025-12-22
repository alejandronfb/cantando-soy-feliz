import { Card } from "@/components/ui/card";
import { Music, Brain, Sparkles, CheckCircle2 } from "lucide-react";

export const Methodology = () => {
  const steps = [
    {
      number: "01",
      icon: Music,
      title: "Evaluación inicial",
      subtitle: "Conociendo la banda sonora de su vida",
      description: "Cada persona tiene canciones que marcaron momentos especiales. Iniciamos con una breve entrevista para comprender la historia musical del participante o del grupo. Las preferencias de cada década, los géneros favoritos y los recuerdos asociados nos permiten seleccionar música altamente significativa.",
      highlight: "La música familiar es una de las formas más poderosas de acceso a recuerdos que parecían perdidos."
    },
    {
      number: "02",
      icon: Brain,
      title: "Activación cognitiva a través de la música",
      subtitle: "Cantar, mover, recordar y decidir",
      description: "Nuestras sesiones combinan ejercicios musicales que estimulan memoria, lenguaje, atención y funciones ejecutivas. La evidencia indica que la participación activa potencia de forma más intensa la neuroplasticidad.",
      highlight: "Durante la sesión utilizamos técnicas como completar frases de canciones, marcar el ritmo con movimientos simples y responder a señales que activan planificación y flexibilidad cognitiva."
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Ritmo y funciones ejecutivas",
      subtitle: "Juegos rítmicos que fortalecen la mente",
      description: "Las investigaciones más recientes muestran que las actividades rítmicas con cambios de reglas fortalecen la conectividad entre regiones cerebrales claves para la toma de decisiones y la atención.",
      highlight: "Incorporamos dinámicas rítmicas divertidas y accesibles que estimulan el cerebro de manera profunda y respetuosa."
    }
  ];

  const benefits = [
    "Mejoran memoria de trabajo y memoria autobiográfica",
    "Fortalecen funciones ejecutivas esenciales como planificación y atención",
    "Aumentan la neuroplasticidad incluso en edades avanzadas",
    "Reducen ansiedad, agitación y síntomas asociados a demencia",
    "Refuerzan la identidad y la conexión social",
    "Incrementan la calidad de vida general"
  ];

  return (
    <section id="metodologia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Brain size={16} />
            <span className="text-sm font-medium">El Protocolo Cantando Soy Feliz</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestra
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Metodología
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            La ciencia de la estimulación cognitiva, hecha cercana, humana y profundamente efectiva
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Cantando Soy Feliz combinamos música significativa y ejercicios cognitivos activos. 
            Nuestro enfoque está diseñado para generar momentos de conexión real, mejorar la cognición y promover 
            bienestar emocional en adultos mayores.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Cómo funciona
            <span className="block text-lg font-normal text-muted-foreground mt-2">
              Una sesión diseñada para activar la mente, despertar recuerdos y mejorar la calidad de vida
            </span>
          </h3>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-warm transition-all duration-300 border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                        <step.icon className="text-primary" size={32} />
                      </div>
                      <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2 -z-10">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-primary font-medium mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                      <p className="text-sm leading-relaxed font-medium">
                        {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why it works */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-scale-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Por qué funciona</h3>
              <p className="text-xl text-muted-foreground">
                Respaldo científico claro y verificable
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-6 border-t border-border/50">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-foreground">
                  Un enfoque único, humano y profesional
                </span>
                <span className="block mt-2 text-muted-foreground">
                  Cantando Soy Feliz es más que música. Es neurociencia aplicada con corazón.
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
