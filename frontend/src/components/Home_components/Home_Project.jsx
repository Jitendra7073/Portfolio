import React, { useState } from "react";
import "../../assets/css/components_css/Home_Projects.css";
import {
  Installify,
  SpeechToText,
  Furniture,
  ATM,
  LMS,
  PowerBI,
  CoreMindsslution,
} from "../../assets/Images/Project_&_experience";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PopupSounds from "../../assets/sounds/open.wav";

// Project Data (Refactored to avoid duplication)
const projects = [
  {
    title: "Coreminds Solution Pvt. Ltd.",
    url: "https://www.coremindssolution.com/",
    technologies: "React JS, CSS, JavaScript, Node.js, Express and  Github",
    description:
      "Developed a professional and responsive website for Coreminds Solution Pvt. Ltd., an IT service company. The website showcases the company’s services, technologies, team, and mission to establish a strong online presence. Integrated a user-friendly contact system allowing potential clients to directly connect with the company. 🚀",
    image: CoreMindsslution,
  },
  {
    title: "Installify – Installation Guide Website",
    url: "https://github.com/Jitendra7073/Installation_guidance",
    technologies: "JavaScript, React.js, Markdown, and Docusaurus.",
    description:
      "Developed Installify, a website that provides step-by-step installation guides for various software and tools, making the process simple and efficient without switching between multiple sites. Used Docusaurus (Static Site Generator) to ensure fast performance, easy content management, and SEO optimization. 🚀",
    image: Installify,
  },
  {
    title: "flipmart sales dashboard",
    url: "",
    technologies: "Excel and Power BI",
    description:
      "I created a Power BI dashboard for Flipmart Sales using Excel, focusing on data preprocessing, cleaning, managing data, and fetching target rows. It helps visualize sales insights effectively. 🚀",
    image: PowerBI,
  },
  {
    title: "Modular Furniture Website",
    url: "https://github.com/Jitendra7073/Furniture_website",
    technologies: "Javascript, HTML, CSS, PHP and Bootstrap.",
    description:
      "I created a modular furniture website where users can explore various furniture designs, order custom pieces, and search for new designs. It features different kitchen and room setups with real-life examples, making it easy to find and customize furniture. 🚀",
    image: Furniture,
  },
  {
    title: "speech to text converte",
    url: "https://github.com/Jitendra7073/Speech_to_text",
    technologies: "JavaScript, React.js and CSS ( for styling ).",
    description:
      "I built a speech-to-text converter using React that quickly turns spoken words into text in real time. It has a simple, easy-to-use design and lets users copy the text with one click. Perfect for anyone who needs fast and accurate transcription. 🚀",
    image: SpeechToText,
  },
  {
    title: "Automated Teller Machine (ATM)",
    url: "https://github.com/Jitendra7073/ATM-System-Python",
    technologies: "Python",
    description:
      "I created a fully functional ATM program in Python using loops, functions, file handling, and validation. It includes real ATM features like deposits, withdrawals, balance checks and PIN change making it secure and efficient. 🚀",
    image: ATM,
  },
  {
    title: "Library Management System ",
    url: "https://github.com/Jitendra7073/Library-Management-Python",
    technologies: "Python",
    description:
      "I created a Library Management System in Python using loops, validation, OOP concepts, and file handling. It allows users to view available books, add new books, and check the total number of books efficiently. 🚀",
    image: LMS,
  },
];

const Home_Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

        {/* Projects Grid */}
        <div className="projects_cards_full_div">
          <div className="projects_cards">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={togglePopup}
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
const ProjectCard = ({ project, onClick }) => (
  <div className="project_card" onClick={() => onClick(project)}>
    <div className="project_metadata">
      <div className="project_heading_and_link">
        <p>{project.title}</p>
      </div>
      <div className="project_technologies">
        <p>
          <span>Languages & Technologies:</span>
          <br /> {project.technologies}
        </p>
      </div>
    </div>
  </div>
);

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
        <div className="popup_image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="project_discription">
          <p>{project.description}</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Home_Project;
