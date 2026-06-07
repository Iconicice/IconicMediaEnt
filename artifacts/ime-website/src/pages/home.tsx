import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Beats } from "@/components/Beats";
import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { AudioGuide } from "@/components/AudioGuide";
import { ImeAssistant } from "@/components/ImeAssistant";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Beats />
        <About />
        <Connect />
      </main>
      <Footer />
      <AudioGuide />
      <ImeAssistant />
    </div>
  );
}
