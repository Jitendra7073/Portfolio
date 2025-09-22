import React from "react";
import Hero from "../components/Home_components/Home_Hero";
import About from "../components/Home_components/Home_About";
import Skills from "../components/Home_components/Home_Skills";
import Education from "../components/Home_components/Home_Education";
import Projects from "../components/Home_components/Home_Project";
// import Works from "../components/Home_components/Home_Works";
import Footer from "../components/Common_components/Footer/footer";
import "../assets/common_css/style.css";
const Home = () => {
  return (
    <div className="entire_page_view">
      <Hero />
      <div className="division"></div>
      <Projects />
      <div className="division"></div>
      {/* <Works />
      <div className="division"></div> */}
      <Skills />
      <div className="division"></div>
      <About />
      <div className="division"></div>
      <Education />
      <div className="division"></div>
      <Footer />
    </div>
  );
};

export default Home;
