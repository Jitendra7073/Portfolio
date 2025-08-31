import React from "react";
import "../../assets/css/components_css/Home_Education.css";
import { Tenth, Twelfth, Degree, Background } from "../../assets/Images/svg";
const Home_Education = () => {
  const EducationData = [
    {
      tag: Tenth,
      location: "IPS siyana, Jalore ( Rajasthan ) [2020]",
      more: "",
      marks: "Percentage: 75%",
      state: "[ Rajasthan Board ]",
    },
    {
      tag: Twelfth,
      location: "Pink Model School bagra, Jalore [2022]",
      more: "",
      marks: "Percentage: 79%",
      state: "[ Rajasthan Board ]",
    },
    {
      tag: Degree,
      location: "Uka Tarsadia university,bardoli [Present]",
      more: "",
      marks: "CGPA: 8.99",
      state: "[surat, Gujarat]",
    },
  ];
  return (
    <section className="Education_section">
      <div className="Education_In_Details">
        <h4 className="About_section_heading_left About_section_heading">
          {"< Education >"}
        </h4>
        <div className="Education_content">
          {EducationData.map((source, index) => {
            return (
              <div className="Education_data">
                <div className="background_images">
                  <img src={Background} alt="" />
                </div>
                <div className="content_over_background">
                  <div className="Education_Image">
                    <img src={source.tag} alt="" />
                  </div>
                  <div className="Education_details">
                    <span>
                      📍{source.location} <br /> {source.more}
                    </span>
                    <span>{source.marks}</span>
                    <span>{source.state}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="About_section_heading_right About_section_heading">
          {"< Education />"}
        </h4>
      </div>
    </section>
  );
};

export default Home_Education;
