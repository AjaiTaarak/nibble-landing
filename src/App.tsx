import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DemoCard from "./components/DemoCard";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PlatformStrip from "./components/PlatformStrip";
import Disclaimer from "./components/Disclaimer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-nibble-cream text-nibble-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <DemoCard />
        <PlatformStrip />
        <Features />
        <HowItWorks />
        <Disclaimer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
