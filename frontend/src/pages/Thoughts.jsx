import React from "react";
import ContactHero from "../components/Throughts_components/THrought_Hero";
import Post from "../components/Throughts_components/post";
import Footer from "../components/Common_components/Footer/footer";

const Thoughts = () => {
  return (
    <div className="entire_page_view">
      <ContactHero />
      <div className="division"></div>
      <Post />
      <div className="division"></div>
      <Footer />
    </div>
  );
};

export default Thoughts;
