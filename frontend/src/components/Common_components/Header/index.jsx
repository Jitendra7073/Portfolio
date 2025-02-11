import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TbMenuOrder } from "react-icons/tb";
// CSS
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const NavLinks = [
    { title: "Home", Page: "/", target: "_self" },
    { title: "Connect", Page: "/connect", target: "_self" },
    { title: "Thoughts", Page: "/Programmer_throughts", target: "_self" },
    {
      title: "Github",
      Page: "https://github.com/Jitendra7073",
      target: "_blank",
    },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className={`Web_Header `}>
      <nav className="Navigation_Menu shiny-text" ref={menuRef}>
        <div
          className="Navigation_Menu_Icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <TbMenuOrder className="MenuIcons" />
        </div>
        <ul className={`Navigation_Menu_List ${menuOpen ? "show" : ""}`}>
          {NavLinks.map((link, index) => (
            <Link
              to={link.Page}
              key={index}
              target={link.target}
              onClick={handleLinkClick}
              className="Navigation_Menu_List_Item"
            >
              <li>
                <span className="Individual_List_Item">{link.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
