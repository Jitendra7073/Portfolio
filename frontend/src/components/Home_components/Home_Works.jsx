import React, { useState } from "react";
import "../../assets/css/components_css/Home_Projects.css";
import { Freelncing,Hackathon } from "../../assets/Images/Project_&_experience";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PopupSounds from "../../assets/sounds/open.wav";

// Project Data (Refactored to avoid duplication)
const projects = [
  {
    title: "Freelance Web Developer",
    url: "",
    technologies: "📅 [Dec, 2024 – Present]",
    description:
      "I designed and developed a responsive website for Nayan Studio, ensuring a sleek UI/UX, fast performance, and essential features like an image gallery and contact form. Built using React.js, Node.js, MongoDB, and CSS, the site helped the studio establish a strong online presence. 🚀",
    image: Freelncing,
  },
  {
    title: "Hackathon Participant – [Indus Hackathon]",
    url: "",
    technologies: "📍 [Indus University, Ahemdabad] | 📅 [Jan, 2025]",
    description:
      "I built a speech-to-text converter using React that quickly turns spoken words into text in real time. It has a simple, easy-to-use design and lets users copy the text with one click. Perfect for anyone who needs fast and accurate transcription. 🚀",
    image: Hackathon,
  },
  {
    title: "upcoming...",
    url: "",
    technologies: "processing...",
    description:
      "please wait....🚀",
    image: "https://imgs.search.brave.com/wzx3lAbkdl6CcmJVfWFL-w9qYsdxJnMkEXTmhKW8xmE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b21pbmctc29vbi1h/ZHZlcnRpc2UtYWxl/cnQtYW5ub3VuY2Vt/ZW50LWNvbmNlcHRf/NTM4NzYtMTI1NjA3/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
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
        <p>
           {project.technologies}
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
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project_discription">
          <p>{project.description}</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Home_Project;
