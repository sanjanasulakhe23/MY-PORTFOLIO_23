import { Navbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// Alternative Hero Layouts - Import ONE of these instead of the default Hero:
import { Hero } from "./components/HeroAlternatives";
// import { HeroSideBySideReverse as Hero } from "./components/HeroAlternatives";
// import { HeroCardStyle as Hero } from "./components/HeroAlternatives";
// import { HeroSquareStyle as Hero } from "./components/HeroAlternatives";

import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}