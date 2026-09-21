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
          <span className="hey_emoji">👋</span> I'm a Full Stack Developer
          with 1+ year of production experience, currently working at
          EnactOn Technology while finishing my B.Tech (CSE) at Uka Tarsadia
          University.
        </p>
        <p>
          I design and ship full-stack features end-to-end—from system
          design through deployment—and independently own a production
          automation system serving millions of users. My day-to-day stack is
          React.js, Node.js, and PostgreSQL, with a growing focus on AI
          agents and agentic workflows.
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
