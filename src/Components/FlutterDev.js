import React from "react";
import "../Stylesheets/Flutter.scss";
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Flutterdev.jpg";

export default function FlutterDev() {
  const Techstacks = [
    {
      id: "1",
      Name: "Native-Like Performance",
      Content:
        "We unlock the full potential of Flutter's architecture to deliver apps with performance on par with native applications, ensuring an exceptional user experience.",
    },
    {
      id: "2",
      Name: "Tailored User Interfaces",
      Content:
        "Our forte lies in creating visually captivating, entirely customized user interfaces that perfectly align with your brand identity and user expectations.",
    },
    {
      id: "3",
      Name: "Swift Prototyping and Iteration",
      Content:
        "Recognizing the importance of swift project turnarounds, we utilize Flutter to rapidly prototype and iterate on your app's design and functionality.",
    },
    {
      id: "4",
      Name: "Versatile Web and Desktop Solutions",
      Content:
        "Going beyond mobile apps, we harness Flutter for web and desktop applications, establishing a consistent brand presence across diverse platforms.",
    },
    {
      id: "5",
      Name: "Economical Development",
      Content:
        "Our cross-platform approach translates into cost savings for your enterprise, eliminating the need for separate codebases for iOS and Android.",
    },
    {
      id: "6",
      Name: "Diverse Application Portfolio",
      Content:
        "Whether you require a web app, mobile app, or desktop application, our Flutter development services are all-encompassing.",
    },
    {
      id: "7",
      Name: "Rigorous Quality Assurance",
      Content:
        "We place a paramount emphasis on your app's quality and performance, subjecting it to stringent testing and quality assurance measures to ensure flawless functionality.",
    }
  ];
  return (
    <div className="Flutter_Developer">
      <div className="Flutter_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>FLUTTER APP DEVELOPMENT</h4>
            In a constantly evolving technological landscape, the realm of
            mobile application development continues to expand. Within this
            dynamic environment, Flutter has emerged as a revolutionary force,
            offering an ideal framework for businesses in search of
            cost-efficient, highly effective, and visually captivating
            cross-platform mobile app solutions.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Opt for Our Flutter App Development Services:</h4>
          <p>
            At 5Y Technologies, we have firmly established ourselves as
            trailblazers in the field of Flutter app development. Here's why
            selecting us is the right choice:
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
