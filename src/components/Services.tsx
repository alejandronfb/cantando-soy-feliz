import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Home, Users, Lightbulb, Check, Music2, Brain, Heart } from "lucide-react";
import groupSession from "@/assets/group-session.jpg";
import musicTherapy from "@/assets/music-therapy.jpg";

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "institucional",
      icon: Building2,
      title: "Plan Institucional",
      description: "Programa integral para residencias y centros de día",
      image: groupSession,
      features: [
        "Sesiones grupales semanales de 60 minutos",
        "Músico profesional con experiencia en adultos mayores",
        "Repertorio adaptado a la generación de los participantes",
        "Material de apoyo y letras de canciones",
        "Informes periódicos de progreso",
        "Coordinación con el equipo de la institución"
      ],
      price: "$200.000",
      period: "mes",
      subtitle: "4 sesiones mensuales",
      color: "primary",
      highlights: [
        "Mejora la calidad de vida de los residentes",
        "Reduce la agitación y la ansiedad",
        "Crea momentos de conexión genuina",
        "Servicio diferencial respaldado por ciencia"
      ]
    },
    {
      id: "personalizadas",
      icon: Home,
      title: "Sesiones Personalizadas",
      description: "Experiencia única diseñada para su ser querido",
      image: musicTherapy,
      features: [
        "Entrevista inicial con familiares: historia musical y preferencias",
        "Repertorio 100% personalizado según época y gustos",
        "Sesión individual de 45-60 minutos en domicilio o institución",
        "Posibilidad de incluir familiares en la sesión",
        "Registro fotográfico y de video del momento especial",
        "Metodología basada en estimulación cognitiva musical"
      ],
      price: "$85.000",
      period: "sesión",
      subtitle: "El regalo perfecto para su ser querido",
      color: "secondary",
      highlights: [
        "Revive recuerdos significativos",
        "Estimula la mente de forma personalizada",
        "Genera momentos inolvidables",
        "Conexión emocional profunda"
      ]
    },
    {
      id: "talleres",
      icon: Users,
      title: "Talleres Grupales",
      description: "Actividades musicales estructuradas para grupos pequeños",
      image: groupSession,
      features: [
        "Grupos reducidos de 6-12 participantes",
        "Sesiones de 45-60 minutos, 1-2 veces por semana",
        "Enfoque en estimulación cognitiva activa: cantar, ritmo, memoria",
        "Actividades con reglas y desafíos graduales",
        "Componente social y de conexión grupal",
        "Adaptación según nivel cognitivo del grupo"
      ],
      price: "Consultar",
      period: "",
      subtitle: "Según cantidad de sesiones y participantes",
      color: "accent",
      highlights: [
        "Fortalece memoria y funciones ejecutivas",
        "Fomenta la interacción social",
        "Ejercita atención y flexibilidad cognitiva",
        "Ambiente de aprendizaje y disfrute"
      ]
    },
    {
      id: "asesoria",
      icon: Lightbulb,
      title: "Asesoría Musical",
      description: "Guía profesional para implementar música terapéutica",
      image: musicTherapy,
      features: [
        "Construcción de perfiles musicales por residente",
        "Creación de playlists personalizadas según historia de vida",
        "Protocolo de selección musical basado en evidencia",
        "Capacitación al personal sobre uso terapéutico de la música",
        "Guía de actividades musicales para el día a día",
        "Seguimiento y ajustes según resultados"
      ],
      price: "Consultar",
      period: "",
      subtitle: "Planes adaptados a las necesidades de la institución",
      color: "primary",
      highlights: [
        "Empodera al equipo de la institución",
        "Metodología replicable y sostenible",
        "Basado en neurociencia aplicada",
        "Herramientas prácticas y concretas"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Soluciones integrales diseñadas para instituciones y familias que buscan mejorar 
            la calidad de vida de adultos mayores a través de la música y la neurociencia aplicada.
          </p>
        </div>

        <Tabs defaultValue="institucional" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2 bg-background/50">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary/10"
              >
                <service.icon size={24} />
                <span className="text-sm font-medium text-center">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="animate-fade-in">
              <Card className="overflow-hidden border-border/50 hover:shadow-warm transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <service.icon className="text-primary" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Brain size={20} className="text-primary" />
                        Beneficios Clave
                      </h4>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Music2 size={20} className="text-primary" />
                        Qué Incluye
                      </h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="bg-primary/5 rounded-xl p-6 mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <p className="text-3xl font-bold text-primary">{service.price}</p>
                          {service.period && <span className="text-muted-foreground">/ {service.period}</span>}
                        </div>
                        <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                      </div>

                      <Button
                        onClick={scrollToContact}
                        className="w-full bg-warm-gradient hover:opacity-90 text-lg py-6"
                      >
                        Solicitar Información
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nuestra Metodología
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                  <Music2 className="text-primary" size={28} />
                </div>
                <h4 className="font-bold mb-2">Personalización Musical</h4>
                <p className="text-sm text-muted-foreground">
                  Seleccionamos música de la época de juventud (15-30 años) basada en entrevistas 
                  sobre historia musical y momentos significativos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                  <Brain className="text-secondary" size={28} />
                </div>
                <h4 className="font-bold mb-2">Intervención Activa</h4>
                <p className="text-sm text-muted-foreground">
                  No solo escuchar: cantar, marcar ritmos, completar letras, ejercicios con reglas. 
                  La participación activa maximiza el impacto cognitivo.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                  <Heart className="text-accent-foreground" size={28} />
                </div>
                <h4 className="font-bold mb-2">Principio ISO</h4>
                <p className="text-sm text-muted-foreground">
                  Partimos del estado emocional actual y avanzamos gradualmente: de calma a 
                  activación, o de agitación a calma, según el objetivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
