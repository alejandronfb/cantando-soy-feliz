import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Science } from "@/components/Science";
import { Benefits } from "@/components/Benefits";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { JoinTeam } from "@/components/JoinTeam";
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
      <JoinTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
