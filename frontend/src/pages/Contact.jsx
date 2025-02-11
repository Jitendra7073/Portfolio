import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Pages_css/connect.css";
import Footer from "../components/Common_components/Footer/footer";
const Contact = () => {
  return (
    <main className="main_connect">
      <section className="connect_section">
        <div className="connect_center_division">
          <div className="Heading_connect">
            <h3 className="shiny-text">Open to work</h3>
          </div>
          <div className="connect_description">
            <p>
              Looking for a skilled developer to bring your ideas to life?
              Whether you need a freelancer for a project or an intern eager to
              contribute, I’m open to exciting opportunities!
            </p>
          </div>
          <div className="connect_state">
            <span className="green_highlight">Why Work With Me?</span>
            <p>
              ✅ Freelance Expertise – I craft scalable, high-quality solutions
              tailored to your needs.
            </p>
            <p>
              ✅ Internship Ready – Passionate about learning, contributing, and
              growing with dynamic teams.
            </p>
          </div>
          <div className="connect_link">
            <p>
              💼 Let’s Build Something Amazing! If you’re looking for a
              dedicated professional, let’s connect!
            </p>
            <p className="reach_out_me">
               📩 Reach out via my [
              <Link to="/" target="_self">
                Porfolio
              </Link>
              ] / [
              <Link to="mailto:jeetsuthar151@gmail.com" target="_blank">
                Email
              </Link>
              ] / [
              <Link
                to="https://wa.me/919558877073?text=Hello%20there!"
                target="_blank"
              >
                Whatsapp
              </Link>
              ] / [
              <Link
                to="https://www.linkedin.com/in/jitendra-suthar-1039502a8/"
                target="_blank"
              >
                Linkedin
              </Link>
              ] / [
              <Link to="https://www.instagram.com/jits2004/" target="_blank">
                Instagram
              </Link>
              ].
            </p>
          </div>
        </div>
      </section>

      <div className="division"></div>
      <Footer />
    </main>
  );
};

export default Contact;
