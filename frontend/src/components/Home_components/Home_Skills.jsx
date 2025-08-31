import React from "react";
import "../../assets/css/components_css/Home_Skills.css";
import {
  CPlus,
  Python,
  CSS,
  JavaScript,
  Node,
  ReactJS,
  Express,
  MySQL,
  MongoDB,
  Git,
  Github,
  Figma,
} from "../../assets/Images/Icons";
const Home_Skills = () => {
  const Skills = [
    {
      icon: CPlus,
      title: "C++",
    },
    {
      icon: Python,
      title: "Python",
    },
    {
      icon: CSS,
      title: "CSS",
    },
    {
      icon: JavaScript,
      title: "JavaScript",
    },
    {
      icon: Node,
      title: "Node JS",
    },
    {
      icon: ReactJS,
      title: "React JS",
    },
    {
      icon: Express,
      title: "Express JS",
    },
    {
      icon: MySQL,
      title: "MySQL",
    },
    {
      icon: MongoDB,
      title: "MongoDB",
    },
    {
      icon: Git,
      title: "Git",
    },
    {
      icon: Github,
      title: "Github",
    },
    {
      icon: Figma,
      title: "Figma",
    },
  ];
  return (
    <section className="Skills_section">
      <div className="Skills_content">
        <h4 className="About_section_heading_left About_section_heading">
          {"< Skills >"}
        </h4>
        <div className="skills_cards">
          {Skills.map((source, index) => {
            return (
              <div className="skill_card" key={index}>
                <div className="skill_card_icon">
                  <img src={source.icon} alt="" loading="lazy" />
                </div>
                <div className="skill_card_language">
                  <span>{source.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="About_section_heading_right About_section_heading">
          {"< Skills/>"}
        </h4>
      </div>
    </section>
  );
};

export default Home_Skills;
