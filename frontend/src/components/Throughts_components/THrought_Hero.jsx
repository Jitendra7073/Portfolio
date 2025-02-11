import React from "react";
import "../../assets/css/Pages_css/connect.css";
const THrought_Hero = () => {
  return (
    <div className="connect_section">
      <div className="connect_center_division">
        <div className="Heading_connect">
          <h3 className="shiny-text">Programmer Thoughts </h3>
        </div>
        <div className="connect_description">
          <p className=" throught_discription">
            <span className="High_Lighted_text">Hello, World!</span> Welcome to
            Programmer Thoughts – a place where programmers share ideas,
            insights, and tech musings!{" "}
          </p>
          <p className=" throught_discription">
            💡 Got something on your mind? Drop your thoughts here! Whether it's
            a cool coding tip, a funny bug story, or just a random tech rant—
            <span className="High_Lighted_text discription_content throught_discription">
              this is your space to share. 📝
            </span>
          </p>
          <span className="High_Lighted_text">
            👥 Let’s build a community of ideas—one thought at a time! 🚀
          </span>
        </div>
      </div>
    </div>
  );
};

export default THrought_Hero;
