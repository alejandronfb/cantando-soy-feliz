import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Science } from "@/components/Science";
import { Benefits } from "@/components/Benefits";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Methodology />
      <Science />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
