import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQ = () => {
  const faqs = [
    {
      question: "¿Es necesario que los participantes sepan cantar o tocar instrumentos?",
      answer: "No es necesario. Nuestras sesiones están diseñadas para todos los niveles. La participación puede ser cantando, moviendo el cuerpo al ritmo, o simplemente escuchando. Lo importante es la conexión emocional con la música, no la habilidad técnica."
    },
    {
      question: "¿Qué resultados puedo esperar y en cuánto tiempo?",
      answer: "Los resultados varían según cada persona, pero típicamente observamos mejoras en el estado de ánimo y la participación desde la primera sesión. Cambios más profundos en memoria, comunicación y reducción de agitación suelen verse después de 4-8 semanas de sesiones regulares. Documentamos el progreso mediante informes periódicos."
    },
    {
      question: "¿Se necesita equipo especial o un espacio específico?",
      answer: "No. Solo necesitamos un espacio donde los participantes puedan sentarse cómodamente en círculo o semicírculo. Nosotros llevamos el instrumento musical (generalmente guitarra), letras de canciones impresas y todo el material necesario para la sesión."
    },
    {
      question: "¿Cuál es la frecuencia ideal de las sesiones?",
      answer: "Recomendamos sesiones semanales para obtener mejores resultados. La regularidad ayuda a crear anticipación, rutina y permite que los beneficios cognitivos y emocionales se acumulen. Sin embargo, también ofrecemos sesiones quincenales según las necesidades de la institución o familia."
    },
    {
      question: "¿Funciona con personas con demencia avanzada o Alzheimer?",
      answer: "Sí. La investigación muestra que la memoria musical se preserva incluso en etapas avanzadas de demencia. Muchas personas que ya no reconocen a sus familiares aún pueden cantar canciones de su juventud. Estas sesiones ofrecen momentos de lucidez y conexión emocional profunda."
    },
    {
      question: "¿Cuántas personas pueden participar en una sesión grupal?",
      answer: "El tamaño ideal es de 8-15 participantes para mantener la calidad de interacción. Podemos trabajar con grupos más pequeños (mínimo 5) o adaptar la metodología para grupos de hasta 20 personas, aunque esto puede ajustar la dinámica."
    },
    {
      question: "¿Qué diferencia a Mente Activa de otras actividades musicales?",
      answer: "Nuestra metodología combina música significativa con ejercicios cognitivos específicos basados en neurociencia. No es solo entretenimiento, sino estimulación cognitiva estructurada que activa memoria, funciones ejecutivas, lenguaje y bienestar emocional. Cada sesión está diseñada terapéuticamente con objetivos claros."
    },
    {
      question: "¿Ofrecen una sesión de prueba o demostración?",
      answer: "Sí. Para instituciones interesadas, ofrecemos una primera sesión demostrativa sin compromiso para que puedan ver el impacto directo en sus residentes. Contáctenos para coordinar una visita."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Preguntas
            <span className="block bg-warm-gradient bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros talleres
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};
