import React from "react";
import "../Stylesheets/AutoTesting.scss";
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Flutterdev.jpg";

export default function Autotesting() {
  const Techstacks = [
    {
      id: "1",
      Name: "Unparalleled Expertise",
      Content:
        "Our team of dedicated professionals is well-versed in the latest trends, tools, and techniques in automation testing. Their depth of knowledge spans across diverse domains, ensuring that your testing needs are met with industry-leading competence.",
    },
    {
      id: "2",
      Name: "Customized Testing Strategies",
      Content:
        "We recognize that one size does not fit all in automation testing. Our approach is tailored to your project's unique requirements and objectives, enabling us to create a customized strategy that maximizes test coverage and efficiency.",
    },
    {
      id: "3",
      Name: "Cutting-Edge Tools and Frameworks",
      Content:
        "We leverage the most advanced automation testing tools and frameworks available. Our choice of tools is based on your project's technical stack, ensuring seamless integration and effective testing.",
    },
    {
      id: "4",
      Name: "Rigorous Test Script Development",
      Content:
        "The heart of any automation testing process lies in the creation of robust and efficient test scripts. Our team excels in developing detailed scripts that cover both functional and non-functional aspects of testing.",
    },
    {
      id: "5",
      Name: "Delivery (CI/CD) Integration",
      Content:
        "In the era of agile development, our automation testing seamlessly integrates with your CI/CD pipelines. This means that every code commit is subjected to rigorous testing, ensuring that your software maintains the highest standards of reliability.",
    },
    {
      id: "6",
      Name: "Scalable and Maintainable Solutions",
      Content:
        "Our automation testing solutions are designed with scalability and maintainability in mind. We recognize that software projects evolve, and our solutions evolve with them, ensuring that your testing remains comprehensive and up-to-date.",
    },
    {
      id: "7",
      Name: "Accuracy and Precision",
      Content:
        "Automation testing is synonymous with accuracy and precision. Automated tests execute with unwavering consistency, eliminating the potential for human error and providing confidence in the results.",
    },
    {
      id: "8",
      Name: "Efficiency and Speed",
      Content:
        "Automation dramatically accelerates the testing process, leading to more comprehensive test coverage and faster release cycles. This efficiency is crucial for staying ahead in today's fast-paced software development landscape.",
    },
    {
      id: "9",
      Name: "End-to-End Testing Services",
      Content:
        "Our expertise extends beyond functional testing to cover various types of testing, including performance testing, security testing, and regression testing, ensuring that your application is thoroughly scrutinized.",
    },
  ];
  return (
    <div className="AutoTesting_Developer">
      <div className="AutoTesting_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>AUTOMATION TESTING</h4>
            In the fiercely competitive realm of software testing, what
            distinguishes a company as the best in the field often hinges on a
            combination of factors that encapsulate expertise, methodology,
            innovation, and a relentless commitment to quality. Here's a closer
            look at what sets us apart as a leading automation testing company:
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Opt for Our Automation Testing Services:</h4>
          <p>
            At 5Y Technologies, we have firmly established ourselves as
            trailblazers in the field of Automation Testing. Here's why
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
