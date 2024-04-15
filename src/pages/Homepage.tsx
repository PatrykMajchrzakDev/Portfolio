// ============= Import Modules =============

// ============= Import Components =============
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";
import AboutMe from "../components/aboutme/AboutMe";

const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Homepage;
