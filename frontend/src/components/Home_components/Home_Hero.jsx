import React from "react";
import "../../assets/css/components_css/Home_Hero.css";
import "../../assets/common_css/TextPressure.css";
import { FaRegHandshake } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";
// Icons
import {
  Excel,
  Power_BI,
  Visual_Studio_Code,
  Android_studio,
  IntelliJ_IDEA,
  Figma,
  Auto_CAD,
  Canva,
} from "../../assets/Images/Icons";
const hero = () => {
  const Platforms = [
    {
      icons: Excel,
      title: "Excel",
    },
    {
      icons: Power_BI,
      title: "PowerBI",
    },
    {
      icons: Visual_Studio_Code,
      title: "VS Code",
    },
    {
      icons: Android_studio,
      title: "Android Studio",
    },
    {
      icons: IntelliJ_IDEA,
      title: "IntelliJ IDEA",
    },
    {
      icons: Figma,
      title: "Figma",
    },
    {
      icons: Auto_CAD,
      title: "Auto CAD",
    },
    {
      icons: Canva,
      title: "Canva",
    },
  ];
  return (
    <div className="Hero_section_div">
      <div className="Hero_content_div">
        <div className="Developer_Name_div">
          <h3 className="Name_content shiny-text">Suthar Jitendra</h3>
        </div>
        <div className="Short_Discription_div">
          <p className="discription_content">
            <span className="High_Lighted_text">Hello, Everyone!</span> I'm an
            AI & ML enthusiast 🤖, debugging life one line at a time!
            <span className="High_Lighted_text">{" <code>"}</span> Full-Stack
            Dev | Data Explorer | Bug Fixer
            <span className="High_Lighted_text">{"</code>"}</span>
          </p>
        </div>
        <div className="Button_Group_div">
          <Link to="/connect">
            <button className="Connect_button">
              {" "}
              <span>
                <FaRegHandshake className="react_icons" />
              </span>
              <span>Let's Connect</span>
            </button>
          </Link>
          <Link
            to="https://res.cloudinary.com/dr2izxsrr/image/upload/v1756622283/JITENDRA_SUTHAR_uqmpzy.pdf"
            target="_blank"
          >
            <button className="Resume_button">
              <span>
                <GrDocumentPdf className="react_icons" />
              </span>
              <span>View Resume</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="Platforms">
        <div className="fade fade-left"></div> {/* Left Fade Effect */}
        <ul className="Platforms_items">
          {Platforms.map((source, index) => {
            return (
              <li key={index} className="individual_platform">
                <div className="platform_contents">
                  <img
                    className="Platforms_Icons"
                    src={source.icons}
                    alt={source.title}
                  />
                  <span className="Platform_title">{source.title}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="fade fade-right"></div> {/* Right Fade Effect */}
      </div>
    </div>
  );
};

export default hero;
