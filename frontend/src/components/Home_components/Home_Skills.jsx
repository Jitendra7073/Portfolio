import React, { useState } from "react";
import "../../assets/css/components_css/Home_Skills.css";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiJest,
  SiLinux,
  SiN8N,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbSql, TbApi } from "react-icons/tb";
import {
  FaGaugeHigh,
  FaInfinity,
  FaFlask,
  FaRobot,
  FaBrain,
  FaSitemap,
  FaWandMagicSparkles,
  FaCircleNodes,
  FaCubes,
  FaUserShield,
  FaServer,
  FaArrowsRotate,
  FaShapes,
} from "react-icons/fa6";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { icon: SiJavascript, title: "JavaScript" },
      { icon: SiTypescript, title: "TypeScript" },
      { icon: SiPython, title: "Python" },
      { icon: TbSql, title: "SQL" },
      { icon: SiCplusplus, title: "C++" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { icon: SiReact, title: "React.js" },
      { icon: SiNextdotjs, title: "Next.js" },
      { icon: SiNodedotjs, title: "Node.js" },
      { icon: SiExpress, title: "Express.js" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { icon: SiPostgresql, title: "PostgreSQL" },
      { icon: SiFirebase, title: "Firebase" },
      { icon: SiRedis, title: "Redis" },
      { icon: FaGaugeHigh, title: "Query Optimization" },
    ],
  },
  {
    category: "DevOps & API Tools",
    skills: [
      { icon: SiGit, title: "Git" },
      { icon: SiGithub, title: "GitHub" },
      { icon: SiDocker, title: "Docker" },
      { icon: TbApi, title: "REST API Design" },
      { icon: SiPostman, title: "Postman" },
      { icon: FaInfinity, title: "CI/CD" },
      { icon: SiVercel, title: "Vercel" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { icon: FaFlask, title: "Playwright" },
      { icon: SiJest, title: "Jest (Unit Testing)" },
      { icon: SiLinux, title: "Linux" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { icon: FaRobot, title: "LLM APIs" },
      { icon: FaBrain, title: "AI Agents" },
      { icon: FaSitemap, title: "Agentic Workflows" },
      { icon: FaWandMagicSparkles, title: "Prompt Engineering" },
      { icon: FaCircleNodes, title: "MCP" },
      { icon: SiN8N, title: "n8n" },
    ],
  },
  {
    category: "Others",
    skills: [
      { icon: FaCubes, title: "OOP" },
      { icon: SiJsonwebtokens, title: "Authentication (JWT)" },
      { icon: FaUserShield, title: "RBAC" },
      { icon: FaServer, title: "Microservices" },
      { icon: FaArrowsRotate, title: "Agile" },
      { icon: FaShapes, title: "Design Patterns" },
    ],
  },
];

const Home_Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCategory = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="Skills_section">
      <div className="Skills_content">
        <h4 className="About_section_heading_left About_section_heading">
          {"< Skills >"}
        </h4>

        <div className="skills_accordion">
          {skillCategories.map((group, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`accordion_item ${isOpen ? "open" : ""}`}
                key={group.category}
              >
                <button
                  type="button"
                  className="accordion_header"
                  onClick={() => toggleCategory(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion_title">{group.category}</span>
                  <span className="accordion_meta">
                    <span className="accordion_count">{group.skills.length}</span>
                    <IoChevronDown className="accordion_chevron" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="accordion_body_wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="accordion_body">
                        {group.skills.map((skill) => {
                          const Icon = skill.icon;
                          return (
                            <div className="skill_chip" key={skill.title}>
                              <Icon className="skill_chip_icon" />
                              <span>{skill.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
