import { Play, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const VideoShowcase = () => {
  return (
    <section id="experiencia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Play size={16} />
            <span className="text-sm font-medium">Vive la Experiencia</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Mira cómo
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Disfrutan los Abuelitos
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Distintos estilos de canto adaptados para cada grupo. 
            Presiona play y descubre la alegría en cada sesión.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Card className="overflow-hidden shadow-warm">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-contain"
                poster="/videos/evento-en-vivo.mp4#t=0.1"
              >
                <source src="/videos/estilos-canto.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Volume2 size={20} className="text-primary" />
                <p className="text-sm">
                  <span className="font-medium text-foreground">Activa el sonido</span> para escuchar las canciones y las risas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
