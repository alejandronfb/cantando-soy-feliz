import { Navbar } from "@/components/Navbar";
import { JoinTeam } from "@/components/JoinTeam";
import { Footer } from "@/components/Footer";

const JoinTeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <JoinTeam />
      </div>
      <Footer />
    </div>
  );
};

export default JoinTeamPage;
