import React from "react";
import "./footer.css";
import { FaRegCopyright } from "react-icons/fa6";
// Icons
import {
  Whatsapp,
  Email,
  Linkdein,
  Github,
  Instagram,
  Credly,
} from "../../../assets/Images/Icons";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const toolsList = [
    {
      icons: Whatsapp,
      title: "Whatsapp",
      url: "https://wa.me/919558877073?text=Hello%20there!",
    },
    {
      icons: Email,
      title: "Email",
      url: "mailto:jeetsuthar151@gmail.com",
    },
    {
      icons: Linkdein,
      title: "Linkdein",
      url: "https://www.linkedin.com/in/jitendra-suthar-1039502a8/",
    },
    { icons: Github, title: "Github", url: "https://github.com/Jitendra7073" },
    {
      icons: Instagram,
      title: "Instagram",
      url: "https://www.instagram.com/jits2004/",
    },
    {
      icons: Credly,
      title: "credly",
      url: "https://www.credly.com/users/jitendra-suthar.091d8047",
    },
  ];

  return (
    <footer>
      <div className="footer-container">
        <ul className="tools-list">
          {toolsList.map((item, index) => (
            <li key={index} className="tool-item">
              <Link to={item.url} target="_blank">
                <div className="tool-content">
                  <img
                    className="tool-icon"
                    src={item.icons}
                    alt={item.title}
                  />
                  <span className="tool-title">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* Right Fade Effect */}
      </div>
      <div className="copy_rights">
        {" "}
        <p>
          <FaRegCopyright />
          <span> 2025 jeet | Code, Design, Repeat. Built with 💻 & ❤️. </span>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
