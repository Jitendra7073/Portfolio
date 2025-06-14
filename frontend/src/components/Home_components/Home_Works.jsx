import React, { useState } from "react";
import "../../assets/css/components_css/Home_Projects.css";
import {
  Freelncing,
  Hackathon,
  GDG,
} from "../../assets/Images/Project_&_experience";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PopupSounds from "../../assets/sounds/open.wav";

// Project Data (Refactored to avoid duplication)
const projects = [
  {
    title: "Freelance Web Developer",
    url: "https://nayanstudio.co.in/",
    technologies: "[April, 2025] | [Nayan Studio]",
    description:
      "I designed and developed a responsive website for Nayan Studio, ensuring a sleek UI/UX, fast performance, and essential features like an image gallery and contact form. Built using React.js, Node.js, MongoDB, and CSS, the site helped the studio establish a strong online presence. 🚀",
    image: Freelncing,
  },
  {
    title: "Hackathon Participant – [Indus Hackathon]",
    url: "https://github.com/Jitendra7073/Subscription_management_app",
    technologies:
      "📍 [Indus University, Ahemdabad] | 📅 [Jan, 2025] | Top 10/60+ Teams",
    description:
      "Developed a Flutter subscription tracker that automatically fetches and displays all active subscriptions from connected apps, giving users centralized control over their recurring payments. Achievement: Top 10 (e.g., among 60+ teams)",
    image: Hackathon,
  },
  {
    title: "Google Developer Group (GDG) Hackathon | 📅 [Jun, 2025]",
    url: "https://classmantra.netlify.app/",
    technologies:
      "React.js, Node js, MongoDB, Firebase, Firebase Authentication (Google Sign-In), Gemini API Integration",
    description:
      "Developed a full-stack web app using React, Node.js, MongoDB, Firebase (Google Auth), and Gemini API during the GDG Hackathon. Successfully solved the given problem statement, though not selected due to others implementing extra features beyond the scope.",
    image: GDG,
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
          {"< Work & Experience  >"}
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
          {"< Work & Experience />"}
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
        <p>{project.technologies}</p>
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
        <Link to={project.url} target="_blank">
          <div className="popup_image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
        </Link>
        <div className="project_discription">
          <p>{project.description}</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Home_Project;
