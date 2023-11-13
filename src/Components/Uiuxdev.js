import React from "react";
import "../Stylesheets/Uiux.scss";
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Flutterdev.jpg";

export default function Uiuxdev() {
  const Techstacks = [
    {
      id: "1",
      Name: "User-Centered Approach",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.",
    },
    {
      id: "2",
      Name: "Aesthetic Excellence",
      Content:
        "Our designs are visually appealing, marrying aesthetics with functionality to create stunning interfaces.",
    },
    {
      id: "3",
      Name: "Prototyping and Testing",
      Content:
        "We prototype and test our designs to ensure that the final product delivers an exceptional user experience.",
    },
    {
      id: "4",
      Name: "Responsive and Adaptive Designs",
      Content:
        "Our designs are responsive and adaptive, ensuring optimal performance across various devices and screen sizes.",
    },
    {
      id: "5",
      Name: "Consistency and Branding",
      Content:
        "We maintain design consistency with your brand identity, reinforcing your brand's message and values.",
    },
    {
      id: "6",
      Name: "Accessibility",
      Content:
        "We ensure that our designs are inclusive and accessible to all users, regardless of their abilities.",
    },
    {
      id: "7",
      Name: "Continuous Improvement",
      Content:
        "We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
    },
  ];
  return (
    <div className="Uiux_Developer">
      <div className="Uiux_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>UI/UX</h4>
            At 5Y Technologies, we've assembled a team of UI/UX design
            experts who are passionate about creating engaging and user-centric
            digital experiences.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Our Expertise in UI/UX Design: </h4>
          <p>
          Here's what you can expect from our UI/UX
            design services:
          </p>
          {/* <h4>Mastery of Cross-Platform Development</h4>
          <p>
            Our seasoned developers excel at crafting apps that seamlessly
            operate on both iOS and Android, providing you with time and cost
            savings.
          </p> */}
        </div>
        {Techstacks.map((ele) => {
          return (
            <div className="col-xl-4 col-md-6 whatwe">
              <div className="Content">
                <b>{ele.Name}</b>
                <p>{ele.Content}</p>
              </div>
              {/* <img src={bg_img} width={"100%"}></img> */}
            </div>
          );
        })}
      </div>
      <Contact_Banner></Contact_Banner>
    </div>
  );
}
