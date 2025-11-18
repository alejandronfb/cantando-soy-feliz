import { Button } from "@/components/ui/button";
import { Music, Heart, Brain } from "lucide-react";
import heroImage from "@/assets/hero-singing.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Music size={16} />
              <span className="text-sm font-medium">Terapia Musical Cognitiva</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vuelva a ver el brillo en sus ojos con
              <span className="block bg-warm-gradient bg-clip-text text-transparent">
                las canciones que marcaron su vida
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Estimulación cognitiva a través de la música para adultos mayores. 
              Neurociencia aplicada con corazón. Resultados que transforman vidas.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="bg-warm-gradient hover:opacity-90 shadow-warm"
              >
                Solicitar Información
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("metodologia")}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Conocer Nuestra Metodología
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Brain className="text-primary" size={24} />
                </div>
                <p className="text-sm font-medium">Estimulación Cognitiva</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="text-secondary" size={24} />
                </div>
                <p className="text-sm font-medium">Bienestar Emocional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Music className="text-accent-foreground" size={24} />
                </div>
                <p className="text-sm font-medium">Conexión Social</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-warm-gradient opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Adultos mayores cantando juntos en un taller musical"
              className="relative rounded-2xl shadow-warm w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
