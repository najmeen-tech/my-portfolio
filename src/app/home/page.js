import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
function page() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default page;
