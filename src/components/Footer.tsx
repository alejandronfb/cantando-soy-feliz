import { Music, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="text-primary" size={24} />
              <h3 className="text-xl font-bold">Cantando Soy Feliz</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando a nuestros seres queridos con la emoción y el recuerdo de las canciones 
              que marcaron sus vidas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("ciencia")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Respaldo Científico
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Beneficios
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Plan Institucional
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sesiones Personalizadas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Talleres Grupales
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Asesoría Musical
                </button>
              </li>
              <li>
                <Link
                  to="/unirse"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Únete al Equipo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="text-primary flex-shrink-0 mt-1" size={16} />
                <a
                  href="mailto:info@cantandosoyfeliz.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@cantandosoyfeliz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-primary flex-shrink-0 mt-1" size={16} />
                <a
                  href="tel:+5491124050466"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +54 9 11 2405-0466
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                <span className="text-muted-foreground">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cantando Soy Feliz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
