import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import alejandroImg from "@/assets/alejandro.jpg";
import sebastianImg from "@/assets/sebastian.jpg";

export const AboutUs = () => {
  const team = [
    {
      name: "Sebastián Fernández",
      role: "Co-fundador",
      title: "Historiador y Cantante de Tango",
      institution: "Universidad de Buenos Aires",
      image: sebastianImg,
    },
    {
      name: "Alejandro Fernández",
      role: "Co-fundador",
      title: "Ingeniero Civil Industrial TI",
      institution: "Pontificia Universidad Católica de Chile",
      image: alejandroImg,
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Users size={16} />
            <span className="text-sm font-medium">Nuestro Equipo</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Quiénes
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Somos
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos un equipo multidisciplinario que combina tecnología, historia y música 
            para mejorar la calidad de vida de los adultos mayores.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {member.role}
                </span>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.title}</p>
                <p className="text-sm text-muted-foreground">{member.institution}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
