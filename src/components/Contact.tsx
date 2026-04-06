import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí se integraría con un backend o servicio de email
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comencemos a
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Crear Momentos Especiales
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a llevar la alegría 
            de la música a tu institución o ser querido.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-2">Escríbenos cualquier consulta</p>
            <a
              href="https://wa.me/5491124050466"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm"
            >
              +54 9 11 2405-0466
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50" style={{ animationDelay: "100ms" }}>
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-secondary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-muted-foreground text-sm mb-2">Llámanos de lunes a viernes</p>
            <a
              href="tel:+5491124050466"
              className="text-secondary hover:text-secondary/80 transition-colors text-sm"
            >
              +54 9 11 2405-0466
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50" style={{ animationDelay: "200ms" }}>
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-accent-foreground" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Ubicación</h3>
            <p className="text-muted-foreground text-sm mb-2">Servicios en toda la región</p>
            <p className="text-sm">
              Buenos Aires, Argentina
            </p>
            <p className="text-sm">
              Santiago, Chile
            </p>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8 animate-scale-in border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre completo</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 11 2405-0466"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Servicio de interés</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="institucional">Plan Institucional</option>
                  <option value="personalizado">Sesión Personalizada</option>
                  <option value="informacion">Solo información</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos sobre tu institución o ser querido..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-warm-gradient hover:opacity-90 shadow-warm"
            >
              Enviar Mensaje
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
