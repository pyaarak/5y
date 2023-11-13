import React from "react";
import "../Stylesheets/MobileTesting.scss";
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Flutterdev.jpg";

export default function MobileTesting() {
  const Techstacks = [
    {
      id: "1",
      Name: "Functional Testing",
      Content:
        "We engage in functional testing to verify that all features and components of the app operate as intended.",
    },
    {
      id: "2",
      Name: "Usability Testing",
      Content:
        "We evaluate the app's user interface, design, and overall user experience to pinpoint any usability issues.",
    },
    {
      id: "3",
      Name: "Performance Testing",
      Content:
        "Services scrutinize the app's performance with regard to speed, responsiveness, and resource utilization to guarantee smooth operation under varying conditions.",
    },
    {
      id: "4",
      Name: "Security Testing",
      Content:
        "We thoroughly test for vulnerabilities and security issues, safeguarding the app and user data from potential threats.",
    },
    {
      id: "5",
      Name: "Compatibility Testing",
      Content:
        "We ensure that the app operates correctly on an array of devices, operating systems, browsers, and network connections.",
    },
    {
      id: "6",
      Name: "Scalability",
      Content:
        "Dependable testing services possess the capacity to scale their efforts as the project expands, accommodating the evolving testing requirements of both small startups and large enterprises.",
    },
    {
      id: "7",
      Name: "Cost-Effective Solutions",
      Content:
        "We offer flexible pricing models that are compatible with your budget and project specifications.",
    }
  ];
  return (
    <div className="MobileTesting_Developer">
      <div className="MobileTesting_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>MOBILE APP TESTING</h4>
            These services play a vital role in ensuring the effective operation
            of mobile apps, the delivery of a positive user experience, and the
            absence of critical defects or complications before making them
            available to the public.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Opt for Our Mobile App Testing Services:</h4>
          <p>
            We provide access to a broad spectrum of mobile devices, operating
            systems, and network conditions, ensuring comprehensive testing in
            real-world situations.
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
