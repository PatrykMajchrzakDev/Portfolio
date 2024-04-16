// ============= Import Modules =============

// ============= Import Components =============
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import AboutMe from "../components/aboutme/AboutMe";
import Projects from "../components/projects/Projects";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;
