import { Card } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles, MessageCircle, TrendingUp } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mejora de la Memoria",
      description: "Estimula la memoria a largo plazo y ayuda a recordar eventos, personas y experiencias significativas.",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Habilidades de Comunicación",
      description: "Facilita la expresión verbal y la comunicación, especialmente en personas con dificultades del habla.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Bienestar Emocional",
      description: "Reduce la ansiedad, depresión y agitación. Aumenta sentimientos de felicidad y satisfacción.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Conexión Social",
      description: "Fomenta la interacción social y crea vínculos emocionales entre participantes y con sus familias.",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Función Ejecutiva",
      description: "Mejora la capacidad de planificación, toma de decisiones y resolución de problemas.",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "Calidad de Vida",
      description: "Incrementa el sentido de identidad, propósito y disfrute en el día a día.",
      color: "secondary"
    }
  ];

  return (
    <section id="beneficios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Beneficios
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Comprobados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            La terapia musical ofrece beneficios integrales que mejoran la vida de los adultos mayores 
            en múltiples dimensiones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  benefit.color === "primary"
                    ? "bg-primary/10"
                    : "bg-secondary/10"
                }`}
              >
                <benefit.icon
                  className={benefit.color === "primary" ? "text-primary" : "text-secondary"}
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 animate-scale-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              La música llega donde las palabras no pueden
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En personas con Alzheimer avanzado, las canciones familiares pueden evocar recuerdos 
              que parecían perdidos, permitiendo momentos de conexión profunda con sus seres queridos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
