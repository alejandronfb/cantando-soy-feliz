import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Check } from "lucide-react";
import groupSession from "@/assets/group-session.jpg";
import musicTherapy from "@/assets/music-therapy.jpg";

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            Ofrecemos dos modalidades diseñadas para adaptarse a las necesidades de instituciones 
            geriátricas y familias que desean lo mejor para sus seres queridos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Servicio Institucional */}
          <Card className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50">
            <div className="h-64 overflow-hidden">
              <img
                src={groupSession}
                alt="Sesión grupal en geriátrico"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Plan Institucional</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Talleres semanales diseñados para geriátricos e instituciones que desean ofrecer 
                un servicio diferencial de estimulación cognitiva a sus residentes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Sesiones grupales semanales de 60 minutos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Músico profesional con experiencia en adultos mayores</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Repertorio adaptado a la generación de los participantes</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Material de apoyo y letras de canciones</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Informes periódicos de progreso</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold text-primary mb-1">$200 USD/mes</p>
                <p className="text-sm text-muted-foreground">4 sesiones mensuales</p>
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full bg-warm-gradient hover:opacity-90"
              >
                Solicitar para mi Institución
              </Button>
            </div>
          </Card>

          {/* Servicio Personalizado */}
          <Card className="overflow-hidden hover:shadow-warm transition-all duration-300 animate-fade-in-up border-primary/20 border-2" style={{ animationDelay: "100ms" }}>
            <div className="bg-warm-gradient text-white py-2 px-4 text-center font-medium text-sm">
              Experiencia Personalizada
            </div>
            <div className="h-64 overflow-hidden">
              <img
                src={musicTherapy}
                alt="Sesión personalizada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Home className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Sesiones Personalizadas</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Shows musicales individuales diseñados específicamente para su ser querido, 
                basados en su historia personal y gustos musicales.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Entrevista inicial con familiares para conocer historia musical</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Repertorio 100% personalizado según época y gustos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Sesión individual de 45-60 minutos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Posibilidad de incluir familiares en la sesión</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Registro fotográfico y de video del momento especial</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">Metodología basada en reminiscencia y estimulación cognitiva</span>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-xl p-4 mb-6">
                <p className="text-2xl font-bold text-secondary mb-1">$85 USD/sesión</p>
                <p className="text-sm text-muted-foreground">El regalo perfecto para su ser querido</p>
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full bg-calm-gradient hover:opacity-90"
              >
                Regalar una Sesión
              </Button>
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nuestra Metodología
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  1
                </div>
                <h4 className="font-semibold mb-2">Evaluación Inicial</h4>
                <p className="text-sm text-muted-foreground">
                  Conocemos los gustos musicales, historia de vida y necesidades específicas de cada participante.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  2
                </div>
                <h4 className="font-semibold mb-2">Sesiones Interactivas</h4>
                <p className="text-sm text-muted-foreground">
                  Combinamos canto, reminiscencia musical, movimiento y ejercicios cognitivos adaptados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  3
                </div>
                <h4 className="font-semibold mb-2">Seguimiento Continuo</h4>
                <p className="text-sm text-muted-foreground">
                  Monitoreamos el progreso y adaptamos las sesiones según la respuesta y evolución de cada persona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
