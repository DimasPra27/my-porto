import "./App.css";
import { useRef } from "react";

import Header from "./sections/Header/Header";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";

function App() {
  //Use ref dipakai untuk menyimpan refrensi ke element DOM tertentu.
  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  // const handleNavClick = (section) => {
  //   const sectionRefs = {
  //     hero: heroRef,
  //     experiences: experienceRef,
  //     projects: projectRef,
  //     skills: skillRef,
  //     contact: contactRef,
  //   };
  //   sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Header
        refs={{
          heroRef,
          projectRef,
          experienceRef,
          skillRef,
          contactRef,
        }}
        // refs={handleNavClick}
      />
      <Hero ref={heroRef} />
      <Projects ref={projectRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
