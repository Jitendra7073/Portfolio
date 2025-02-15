import "../../assets/css/components_css/Question_Answer.css"; // Custom CSS file
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why I Added a Thought Page to My Portfolio?",
      answer:
        "The Thought Page is a space for visitors to share their ideas, suggestions, and feedback. It’s not just a portfolio—it's a place for interaction, where users can engage with my work and contribute their thoughts to help shape future projects. 🚀",
    },
    {
      question: "Why I Value User Suggestions & Ideas?",
      answer:
        "I believe the best way to grow is by listening to real users. Feedback helps me understand what people expect, improve my skills, and create more user-friendly solutions. It also encourages collaboration and innovation, making my portfolio more interactive and community-driven. 🚀",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Insights & Clarifications</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                <IoIosArrowUp />
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer-container"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
