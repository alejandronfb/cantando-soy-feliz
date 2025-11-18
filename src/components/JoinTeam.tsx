import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Music2, Heart, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ApplicationForm = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
};

export const JoinTeam = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ApplicationForm>();

  const onSubmit = (data: ApplicationForm) => {
    console.log("Application submitted:", data);
    toast.success("¡Aplicación enviada con éxito! Nos pondremos en contacto pronto.");
    reset();
  };

  return (
    <section id="unirse" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Únete a
              <span className="block bg-warm-gradient bg-clip-text text-transparent">
                Nuestro Equipo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              ¿Eres músico profesional con vocación de servicio? Únete a nuestra misión de 
              mejorar la vida de adultos mayores a través de la música y la neurociencia aplicada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music2 className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Profesionalismo Musical</h3>
              <p className="text-sm text-muted-foreground">
                Buscamos músicos con formación profesional y experiencia en presentaciones en vivo.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Vocación de Servicio</h3>
              <p className="text-sm text-muted-foreground">
                Sensibilidad y empatía para trabajar con adultos mayores y sus familias.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Compromiso</h3>
              <p className="text-sm text-muted-foreground">
                Dedicación para aprender nuestra metodología y generar impacto real.
              </p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-center">Postula Ahora</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Tu nombre"
                    className={errors.name ? "border-destructive" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="tu@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  {...register("phone", { required: true })}
                  placeholder="+54 9 11 1234-5678"
                  className={errors.phone ? "border-destructive" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experiencia Musical *</Label>
                <Textarea
                  id="experience"
                  {...register("experience", { required: true })}
                  placeholder="Cuéntanos sobre tu formación musical, instrumentos que tocas, experiencia en presentaciones, etc."
                  className={`min-h-32 ${errors.experience ? "border-destructive" : ""}`}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿Por qué quieres unirte a Mente Activa? *</Label>
                <Textarea
                  id="message"
                  {...register("message", { required: true })}
                  placeholder="Comparte tu motivación para trabajar con adultos mayores y ser parte de nuestra misión..."
                  className={`min-h-32 ${errors.message ? "border-destructive" : ""}`}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-warm-gradient hover:opacity-90 text-lg py-6"
              >
                Enviar Postulación
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Al enviar tu postulación, recibirás información sobre nuestro proceso de selección 
              y capacitación en la metodología Mente Activa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
