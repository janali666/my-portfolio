import { Navbar } from "../portfolio/Navbar";
import { Hero } from "../portfolio/Hero";
import { About } from "../portfolio/About";

import { Experience } from "../portfolio/Experience";
import { Projects } from "../portfolio/Projects";
import { Services } from "../portfolio/Services";
import { Contact } from "../portfolio/Contact";
import { Footer } from "../portfolio/Footer";
import { useEffect } from "react";
import { Skills } from "../portfolio/Skills";

export const Index = () => {
  useEffect(() => {
    document.title = "Jan Ali Naqvi — Software Engineer & AI Enthusiast";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio of Jan Ali Naqvi — Software Engineer, Front-End Developer and AI Enthusiast. Projects, skills and contact."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};
