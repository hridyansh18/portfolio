import { useEffect } from "react";
import Nav from "../components/portfolio/Nav";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

const Portfolio = () => {
  // Reveal-on-scroll: observe every .reveal element and add .is-visible
  // once it enters the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
