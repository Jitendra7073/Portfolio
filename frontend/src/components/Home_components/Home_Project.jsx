import React, { useState, useMemo } from "react";
import "../../assets/css/components_css/Home_Projects.css";
import {
  Installify,
  // SpeechToText,
  // Furniture,
  // ATM,
  // LMS,
  // PowerBI,
  // CoreMindsslution,
} from "../../assets/Images/Project_&_experience";
import {
  Freelncing,
  GDG,
  SpaceMod,
} from "../../assets/Images/Project_&_experience";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PopupSounds from "../../assets/sounds/open.wav";

// Project Data (Refactored to avoid duplication)
const projects = [
  {
    title: "SpendSync - Daily Expense Tracker",
    codeUrl: "https://github.com/Jitendra7073/SpendSync",
    technologies: "React.js, Node.js, Express.js, MongoDB",
    description:
      "A daily expense tracker application with automatic payment detection, helping users log and categorize spending without manual entry for every transaction.",
    images: [
      "/images/p1.jpeg",
      "/images/p2.jpeg",
      "/images/p3.jpeg",
      "/images/p4.jpeg",
      "/images/p5.jpeg",
    ],
  },
  {
    title: "CricOra - Cricket Scoring & Tournament Manager",
    codeUrl: "https://github.com/Jitendra7073/CricOra-Scorebook-web",
    technologies: "React.js, Node.js, Express.js, MongoDB",
    description:
      "A cricket scoring application to manage tournaments, teams, and innings, covering ball-by-ball scoring along with tournament and team management.",
  },
  {
    title: "HSM - Home Service Management",
    liveUrl: "https://homhelpers.vercel.app/auth/login",
    codeUrl: "https://github.com/Jitendra7073/HSM-backend",
    technologies: "React.js, Node.js, Express.js, MongoDB",
    description:
      "A home service management platform, similar to Urban Company, connecting customers with service providers for booking and managing home services.",
    images: ["/images/h1.png", "/images/h2.png", "/images/h3.png", "/images/h4.png"],
  },
  {
    title: "SpaceMod: Modular Furniture Website",
    liveUrl: "https://spacemod.in/",
    codeUrl: "https://github.com/Jitendra7073/Spacemod",
    technologies:
      "React.js, JavaScript, Styled-Components, Node.js, Express.js, MongoDB",
    description:
      "Developing a full-stack application for SpaceMod, a modular furniture company. The site features a front-end showcasing past and current projects, customer testimonials, and an integrated admin panel for full data management of the entire website.",
    image: SpaceMod,
  },
  {
    title: "Class Mantra - A Class Management System",
    liveUrl: "https://classmantra.netlify.app/",
    codeUrl: "https://github.com/Jitendra7073/GDG-Hack2skill-The-Genesis-Group/",
    technologies:
      "React.js, Node js, MongoDB, Firebase, Firebase Authentication (Google Sign-In), Gemini API Integration",
    description:
      "In This Project I have Integrated the Gemini API that can auto evaluate the answer of the student and give the score to the student. And also I have Integrated the Firebase Authentication (Google Sign-In) that can sign in the student with their Google Account.",
    image: GDG,
  },
  {
    title: "Studio Website Design & Development",
    liveUrl: "https://nayanstudio.co.in/",
    codeUrl: "https://github.com/Jitendra7073/nayanstudio-website",
    technologies: "React.js, Node.js, MongoDB, CSS",
    description:
      "I designed and developed a responsive website for Nayan Studio, ensuring a sleek UI/UX, fast performance, and essential features like an image gallery and contact form. Built using React.js, Node.js, MongoDB, and CSS, the site helped the studio establish a strong online presence. 🚀",
    image: Freelncing,
  },


  
  {
    title: "Installify – Installation Guide Website",
    liveUrl: "https://installify.netlify.app/",
    codeUrl: "https://github.com/Jitendra7073/Installation_guidance",
    technologies: "JavaScript, React.js, Markdown, and Docusaurus.",
    description:
      "Developed Installify, a website that provides step-by-step installation guides for various software and tools, making the process simple and efficient without switching between multiple sites. Used Docusaurus (Static Site Generator) to ensure fast performance, easy content management, and SEO optimization. 🚀",
    image: Installify,
  },
  {
    title: "Coreminds Solution Pvt. Ltd.",
    url: "https://www.coremindssolution.com/",
    technologies: "React JS, CSS, JavaScript, Node.js, Express and  Github",
    description:
      "Developed a professional and responsive website for Coreminds Solution Pvt. Ltd., an IT service company. The website showcases the company’s services, technologies, team, and mission to establish a strong online presence. Integrated a user-friendly contact system allowing potential clients to directly connect with the company. 🚀",
  },
  {
    title: "speech to text converte",
    url: "https://github.com/Jitendra7073/Speech_to_text",
    technologies: "JavaScript, React.js and CSS ( for styling ).",
    description:
      "I built a speech-to-text converter using React that quickly turns spoken words into text in real time. It has a simple, easy-to-use design and lets users copy the text with one click. Perfect for anyone who needs fast and accurate transcription. 🚀",
  },
];

const Home_Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("card"); // 'card' | 'list'
  const openAudio = new Audio(PopupSounds);

  const togglePopup = (project = null) => {
    if (!isOpen && project) openAudio.play();
    setIsOpen(!isOpen);
    setSelectedProject(project);
  };

  return (
    <section className="Projects_section">
      <div className="Projects_In_Details">
        <h4 className="About_section_heading_left About_section_heading">
          {"< Projects >"}
        </h4>

        {/* View Toggle */}
        <div className="projects_view_toggle">
          <button
            className={`toggle_btn ${viewMode === "card" ? "active" : ""}`}
            onClick={() => setViewMode("card")}
          >
            Card View
          </button>
          <button
            className={`toggle_btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            List View
          </button>
        </div>

        {/* Projects Grid/List */}
        <div className="projects_cards_full_div">
          <div className={`projects_cards ${viewMode === "list" ? "list" : ""}`}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={togglePopup}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {isOpen && selectedProject && (
          <ProjectPopup project={selectedProject} togglePopup={togglePopup} />
        )}

        <h4 className="About_section_heading_right About_section_heading">
          {"< Projects/>"}
        </h4>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, onClick, viewMode }) => {
  const liveHref = project.liveUrl || (project.url && !String(project.url).includes("github") ? project.url : null);
  const codeHref = project.codeUrl || (project.url && String(project.url).includes("github") ? project.url : null);
  const isCard = viewMode === "card";

  return (
    <div className={`project_card ${isCard ? "card" : "list"}`} onClick={() => onClick(project)}>
      <div className="project_metadata">
        <div className="project_heading_and_link">
          <p>{project.title}</p>
        </div>
        {/* In both views, hide technologies inline; they show in modal */}
        {isCard ? null : (
          <div className="project_description">
            <p>{project.description}</p>
          </div>
        )}
        <div className="project_actions">
          {codeHref ? (
            <a
              className="btn btn-secondary"
              href={codeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              View Code
            </a>
          ) : (
            <TooltipButton
              className="btn btn-secondary"
              message="Code repository not available"
              onClick={(e) => e.stopPropagation()}
            >
              View Code
            </TooltipButton>
          )}
          {liveHref ? (
            <a
              className="btn btn-primary"
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          ) : (
            <TooltipButton
              className="btn btn-primary"
              message="Live demo not available"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </TooltipButton>
          )}
        </div>
      </div>
    </div>
  );
};

// Lightweight tooltip button for missing links
const TooltipButton = ({ className = "", message, children, onClick }) => {
  const [show, setShow] = useState(false);
  const timeoutId = useMemo(() => ({ id: null }), []);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    setShow(true);
    if (timeoutId.id) clearTimeout(timeoutId.id);
    timeoutId.id = setTimeout(() => setShow(false), 1600);
  };

  return (
    <span className="tooltip_wrapper">
      <button type="button" className={`${className} ghost`} onClick={handleClick} aria-disabled title={message}>
        {children}
      </button>
      {show && <span className="tooltip_bubble">{message}</span>}
    </span>
  );
};

// Minimal self-contained image slider (avoids fighting 3rd-party slider DOM/CSS)
const ImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="popup_image">
      <img src={images[index]} alt={`${title} screenshot ${index + 1}`} loading="lazy" />
      {images.length > 1 && (
        <>
          <button type="button" className="slider_nav slider_nav_prev" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <button type="button" className="slider_nav slider_nav_next" onClick={next} aria-label="Next image">
            ›
          </button>
          <div className="slider_dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`slider_dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Project Popup Component
const ProjectPopup = ({ project, togglePopup }) => (
  <div className="popup_overlay" onClick={togglePopup}>
    <motion.div
      className="popup_box"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="popup_center_content">
        <div className="project_heading_and_link popup_heading">
          <Link to={project.url} target="_blank">
            <p>{project.title}</p>
          </Link>
        </div>
        {project.images ? (
          <ImageSlider images={project.images} title={project.title} />
        ) : (
          project.image && (
            <div className="popup_image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )
        )}
        <div className="project_discription">
          <p>{project.description}</p>
        </div>
        <div className="project_technologies_in_modal">
          <p>
            <span>Languages & Technologies:</span>
            <br /> {project.technologies}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Home_Project;
