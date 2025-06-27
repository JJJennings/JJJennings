
import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import KeyAchievements from "@/components/KeyAchievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CareerTimeline />
      <KeyAchievements />
      <Leadership />
      <Contact />
    </div>
  );
};

export default Index;
