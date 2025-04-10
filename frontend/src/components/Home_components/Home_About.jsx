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
          <span className="hey_emoji">👋</span> I’m a B.Tech CSE (AI & ML)
          student in my 3rd year, 6th semester, passionate about building smart
          solutions and making technology work like magic.
        </p>
        <p>
          I play around with AI, machine learning, and full-stack development,
          coding in Python, C, C++, Java, and more—basically speaking multiple
          languages, just none that humans use. I also love data analysis,
          turning raw numbers into cool insights (because numbers do tell
          stories!).
        </p>
        <p>
          When I’m not busy debugging my life (or my code), you’ll find me
          gaming, traveling, or managing events like a pro. I believe in
          learning, creating, and pushing boundaries—so let’s connect and build
          something amazing...!
        </p>
        <h4 className="About_section_heading_right About_section_heading">
          {"< About Myself/>"}
        </h4>
      </div>
    </section>
  );
};

export default Home_About;
