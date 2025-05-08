import React from "react";
import Error404 from "../assets/Images/svg/error404.svg";
import "../assets/css/Pages_css/error404.css";

const Error = () => {
  return (
    <div className="Error404-container">
      <img src={Error404} alt="404 Error" />
    </div>
  );
};

export default Error;
