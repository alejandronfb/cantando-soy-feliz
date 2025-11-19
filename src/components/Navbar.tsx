import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mente-activa-logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logo} alt="Mente Activa Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold bg-warm-gradient bg-clip-text text-transparent">
              Mente Activa
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("metodologia")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-warm-gradient hover:opacity-90"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("metodologia")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-warm-gradient hover:opacity-90 w-full"
            >
              Contactar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
