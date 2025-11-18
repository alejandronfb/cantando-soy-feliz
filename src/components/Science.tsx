import { Card } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import brainMusic from "@/assets/brain-music.jpg";

export const Science = () => {
  const studies = [
    {
      title: "Neuroplasticidad y Música en Adultos Mayores",
      journal: "PubMed",
      year: "2013",
      finding: "La participación en actividades musicales mejora significativamente la memoria de trabajo y la función ejecutiva en adultos mayores sanos.",
      link: "https://pubmed.ncbi.nlm.nih.gov/24106716/"
    },
    {
      title: "Intervenciones Musicales y Función Cognitiva",
      journal: "Healthcare",
      year: "2022",
      finding: "Las intervenciones basadas en música muestran efectos positivos en la cognición general, funciones ejecutivas y memoria episódica en personas con deterioro cognitivo leve y demencia.",
      link: "https://hal.univ-lorraine.fr/hal-03744936v1/file/healthcare-10-01462.pdf"
    },
    {
      title: "Efectos del Entrenamiento Musical",
      journal: "Science Direct",
      year: "2023",
      finding: "6 meses de entrenamiento musical incrementan la materia gris cerebelar y mejoran la memoria de trabajo auditiva en adultos mayores sanos.",
      link: "https://www.sciencedirect.com/science/article/pii/S2666956023000119"
    },
    {
      title: "Música y Conexiones Neuronales",
      journal: "Experimental Gerontology",
      year: "2024",
      finding: "Las actividades musicales rítmicas fortalecen la conectividad entre redes cerebrales asociadas con funciones ejecutivas afectadas por el envejecimiento.",
      link: "https://pubmed.ncbi.nlm.nih.gov/38176601/"
    }
  ];

  return (
    <section id="ciencia" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Respaldado por la
            <span className="block bg-calm-gradient bg-clip-text text-transparent">
              Ciencia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nuestra metodología está fundamentada en décadas de investigación neurocientífica 
            que demuestra el poder transformador de la música en el cerebro de los adultos mayores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right order-2 lg:order-1">
            <img
              src={brainMusic}
              alt="Conexión entre música y cerebro"
              className="rounded-2xl shadow-soft w-full h-auto"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-bold">
              ¿Por qué funciona la música?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                La música estimula múltiples áreas del cerebro simultáneamente, incluyendo 
                regiones vinculadas a la memoria a largo plazo, el habla, el movimiento y las emociones.
              </p>
              <p className="leading-relaxed">
                En personas con Alzheimer o demencia, la música puede alcanzar partes del cerebro 
                que permanecen funcionales incluso cuando otras áreas están afectadas por la enfermedad.
              </p>
              <p className="leading-relaxed">
                Los estudios demuestran que cantar y escuchar canciones conocidas activa la 
                neuroplasticidad, fortaleciendo las conexiones neuronales y mejorando la función cognitiva.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{study.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {study.journal} • {study.year}
                  </p>
                  <p className="text-sm mb-4 leading-relaxed">{study.finding}</p>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Ver estudio completo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
