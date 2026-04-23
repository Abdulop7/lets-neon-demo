import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisibilitySection from "@/components/VisibilitySection";
import ConsistencySection from "@/components/ConsistencySection";
import CreateYoursSection from "@/components/CreateYoursSection";
import HeadquartersSection from "@/components/HeadquartersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <VisibilitySection />
      <ConsistencySection />
      <CreateYoursSection />
      <HeadquartersSection />
      <Footer />
    </main>
  );
}
