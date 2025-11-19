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
              <span className="text-sm font-medium">Neurociencia Musical Aplicada</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Talleres Musicales de Estimulación Cognitiva
              <span className="block bg-warm-gradient bg-clip-text text-transparent">
                para Residencias de Adultos Mayores
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mejoramos memoria, bienestar y conexión mediante música significativa. 
              Respaldado por neurociencia. Diseñado para instituciones y familias.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
                className="bg-warm-gradient hover:opacity-90 shadow-warm text-lg px-8"
              >
                Para Instituciones
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("servicios")}
                className="bg-calm-gradient hover:opacity-90 shadow-warm text-lg px-8"
              >
                Para Familias
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("metodologia")}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Ver Metodología
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 transition-all hover:scale-110 hover:bg-primary/20">
                  <Brain className="text-primary" size={32} />
                </div>
                <p className="text-sm font-semibold text-foreground">Estimulación Cognitiva</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3 transition-all hover:scale-110 hover:bg-secondary/20">
                  <Heart className="text-secondary" size={32} />
                </div>
                <p className="text-sm font-semibold text-foreground">Bienestar Emocional</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-3 transition-all hover:scale-110 hover:bg-accent/30">
                  <Music className="text-accent-foreground" size={32} />
                </div>
                <p className="text-sm font-semibold text-foreground">Conexión Social</p>
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
