import React from "react";
import "../../assets/css/components_css/Home_About.css";

const Home_About = () => {
  return (
    <section className="About_section">
      <div className="About_In_Details">
        <h4 className="About_section_heading_left About_section_heading">
          {"< About Myself >"}
        </h4>

        <p>
          <span className="hey_emoji">👋</span> I'm a final-year B.Tech (CSE)
          student at Uka Tarsadia University. I’m passionate about building
          smart solutions and making technology work like magic.
        </p>
        <p>
          I explore AI, machine learning, and full-stack development—coding in
          Python, C++, and more. You could say I speak multiple languages.
        </p>
        <p>
          When I’m not debugging my life (or my code), you’ll probably find me
          gaming, traveling, or managing events. I believe in learning,
          creating, and pushing boundaries—so let’s connect and build something
          amazing!
        </p>

        <h4 className="About_section_heading_right About_section_heading">
          {"< About Myself/>"}
        </h4>
      </div>
    </section>
  );
};

export default Home_About;
