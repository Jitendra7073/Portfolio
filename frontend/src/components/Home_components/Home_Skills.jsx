import React from "react";
import "../../assets/css/components_css/Home_Skills.css";
import {
  C,
  CPlus,
  CCharp,
  Java,
  Python,
  PHP,
  Swift,
  Html,
  CSS,
  Bootstrap,
  Tailwind,
  Material,
  JavaScript,
  Node,
  ReactJS,
  Express,
  Xml,
  MySQL,
  MongoDB,
  Oracle,
  Numpy,
  Pandas,
  Matplotlib,
  Seaborn,
  ScikitLearn,
  XCode,
  Flutter,
  Dotnet,
  Git,
  Github,
  Postman,
  Netlify,
  Ardiuno_UNO,
  Excel,
  Power_BI,
  Visual_Studio_Code,
  Android_studio,
  IntelliJ_IDEA,
  Figma,
  Auto_CAD,
  Canva,
} from "../../assets/Images/Icons";
const Home_Skills = () => {
  const Skills = [
    {
      icon: C,
      title: "C",
    },
    {
      icon: CPlus,
      title: "C++",
    },
    {
      icon: CCharp,
      title: "C#",
    },
    {
      icon: Java,
      title: "Java",
    },
    {
      icon: Python,
      title: "Python",
    },
    {
      icon: PHP,
      title: "PHP",
    },
    {
      icon: Swift,
      title: "Swift",
    },
    {
      icon: Html,
      title: "HTML",
    },
    {
      icon: CSS,
      title: "CSS",
    },
    {
      icon: Bootstrap,
      title: "Bootstrap",
    },
    {
      icon: Tailwind,
      title: "Tailwind",
    },
    {
      icon: Material,
      title: "Material UI",
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
      icon: Xml,
      title: "XML",
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
      icon: Oracle,
      title: "Oracle",
    },
    {
      icon: Numpy,
      title: "Numpy",
    },
    {
      icon: Pandas,
      title: "Pandas",
    },
    {
      icon: Matplotlib,
      title: "Matplotlib",
    },
    {
      icon: Seaborn,
      title: "Seaborn",
    },
    {
      icon: ScikitLearn,
      title: "SkLearn",
    },
    {
      icon: Power_BI,
      title: "PowerBI",
    },
    {
      icon: Excel,
      title: "Excel",
    },
    {
      icon: Android_studio,
      title: "Android Studio",
    },
    {
      icon: XCode,
      title: "XCode",
    },
    {
      icon: Flutter,
      title: "Flutter",
    },
    {
      icon: Dotnet,
      title: "DotNet",
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
      icon: Visual_Studio_Code,
      title: "VS Code",
    },
    {
      icon: Postman,
      title: "Postman",
    },
    {
      icon: IntelliJ_IDEA,
      title: "IntelliJ IDEA",
    },
    {
      icon: Netlify,
      title: "Netlify",
    },
    {
      icon: Figma,
      title: "Figma",
    },
    {
      icon: Canva,
      title: "Canva",
    },
    {
      icon: Ardiuno_UNO,
      title: "Ardiuno",
    },
    {
      icon: Auto_CAD,
      title: "Auto CAD",
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
                  <img src={source.icon} alt="" />
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
