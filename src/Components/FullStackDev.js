import React from "react";
import "../Stylesheets/FullStack.scss";
import FullImg from "../Assets/FullStackdev.jpg";
import Contact_Banner from "./Contact_Banner";

export default function FullStackDev() {
  const Techstacks = [
    {
      id: "1",
      Name: "Comprehensive Expertise",
      Content:
        "Our full-stack developers are well-versed in both front-end and back-end technologies, providing a one-stop solution for all your web development needs.",
    },
    {
      id: "2",
      Name: "Customized Solutions",
      Content:
        "We don't believe in one-size-fits-all. Our solutions are crafted to align perfectly with your business goals, brand identity, and target audience.",
    },
    {
      id: "3",
      Name: "Cross-Platform Compatibility",
      Content:
        "We ensure your web application functions seamlessly across various platforms and devices, offering a broad reach.",
    },
    {
      id: "4",
      Name: "User-Centric Design",
      Content:
        "User experience is at the core of our designs. Our web applications are intuitive, engaging, and optimized for conversions.",
    },
    {
      id: "5",
      Name: "Scalability and Performance",
      Content:
        "We develop web applications with scalability in mind, guaranteeing top-notch performance as your business grows.",
    },
    {
      id: "6",
      Name: "Robust Security",
      Content:
        "Security is a top priority. We employ state-of-the-art security measures to protect your web application and user data.",
    },
    {
      id: "7",
      Name: "Ongoing Support",
      Content:
        "Our commitment doesn't end with deployment. We offer continuous support and updates to keep your web application at its peak.",
    },
    {
      id: "8",
      Name: "SEO Integration",
      Content:
        "We incorporate search engine optimization (SEO) best practices into the core of your web application, enhancing your online visibility and reach.",
    },
  ];
  return (
    <div className="FullStack_Developer">
      <div className="FullStack_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>FULL STACK DEVELOPMENT</h4>
            In the ever-evolving digital landscape, having a powerful online
            presence is a fundamental aspect of success for businesses across
            the globe. To harness the full potential of the internet, you need
            more than just a website; you need a web application that's dynamic,
            responsive, and tailored to your unique needs. This is where our
            full-stack web development services at 5Y Technologies come into
            play.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Choose Our Full-Stack Web Development Services:</h4>
          <p>
            Discover the reasons why partnering with 5Y Technologies for
            full-stack web development is a strategic move:
          </p>
          <p>
            We excel in crafting aesthetically pleasing designs enhanced by
            highly efficient animations and effects, resulting in an outstanding
            user experience.
          </p>
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
