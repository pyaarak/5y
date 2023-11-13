import React from "react";
import react_logo from "../Assets/Tech_Stacks/React_logo.png";
import js_logo from "../Assets/Tech_Stacks/JavaScript-logo.png";
import Python_logo from "../Assets/Tech_Stacks/python_logo.png";
import java_logo from "../Assets/Tech_Stacks/java.png";
import Mysql_logo from "../Assets/Tech_Stacks/Mysql_logo.png";
import Nodejs_logo from "../Assets/Tech_Stacks/nodejs_logo.png";
import Flutter from '../Assets/Tech_Stacks/flutter.png';
import HTMLimg from '../Assets/Tech_Stacks/html_logo.png';
import cssimg from '../Assets/Tech_Stacks/Css_logo.png'
import Angular_logo from '../Assets/Tech_Stacks/Angular_logo.png';
import Docker_logo from '../Assets/Tech_Stacks/Docker_logo.png';
import Jenkins_logo from '../Assets/Tech_Stacks/Jenkins.png';
import arduino_logo from '../Assets/Tech_Stacks/arduino_logo.png';
import linux_logo from '../Assets/Tech_Stacks/linux_logo.png';
import aws_logo from '../Assets/Tech_Stacks/aws_logo.png';
import cloud_logo from '../Assets/Tech_Stacks/cloud_logo.png';
import php_logo from '../Assets/Tech_Stacks/PHP-logo.png';
import typescript_logo from '../Assets/Tech_Stacks/typescript_logo.png';
import Rasbian from '../Assets/Tech_Stacks/Rasbian_logo.png';
import Postgres_logo from '../Assets/Tech_Stacks/Postgresql_elephant.svg.png';
import MongoDb from '../Assets/Tech_Stacks/MongoDB-Emblem.jpg';
import Azure_logo from '../Assets/Tech_Stacks/Microsoft_Azure.svg.png';
import Wordpress from '../Assets/Tech_Stacks/WordPress_logo.png';
import Swagger_logo from '../Assets/Tech_Stacks/swagger_logo.png';
import Redis_logo from '../Assets/Tech_Stacks/Redis_logo.png';
import cash_logo from '../Assets/Tech_Stacks/cash_logo.png';
// import drone_bg from '../Assets/drone_bg.png';
import '../Stylesheets/TechStacks.scss'

export default function TechStacks() {
  const Technologies = [
    {
      id: "1",
      Name: "React JS",
      // Content:"In the ever-evolving digital landscape, having a powerful online presence is a fundamental aspect of success for businesses across the globe. To harness the full potential of the internet, you need more than just a website; you need a web application that's dynamic, responsive, and tailored to your unique needs.",
      img: react_logo,
    },
    {
      id: "2",
      Name: "Java Script",
      // Content:"In the fiercely competitive realm of software testing, what distinguishes a company as the best in the field often hinges on a combination of factors that encapsulate expertise, methodology, innovation, and a relentless commitment to quality.",
      img: js_logo,
    },
    {
      id: "3",
      Name: "Python",
      // Content:"At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing. Azure's flexibility allows businesses to scale resources up or down based on demand, ensuring that IT resources are used efficiently.",
      img: Python_logo,
    },
    {
      id: "4",
      Name: "Mysql",
      // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: Mysql_logo,
    },
    {
      id: "5",
      Name: "Java",
      // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: java_logo,
    },
    {
      id: "6",
      Name: "Node js",
      // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: Nodejs_logo,
    },
    {
        id: "7",
        Name: "Flutter",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Flutter,
      },
      {
        id: "8",
        Name: "html",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: HTMLimg,
      },
      {
        id: "9",
        Name: "CSS",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: cssimg,
      },
      {
        id: "10",
        Name: "Angular",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Angular_logo,
      },
      {
        id: "11",
        Name: "Docker",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Docker_logo,
      },
      {
        id: "12",
        Name: "Jenkins",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Jenkins_logo,
      },
      {
        id: "13",
        Name: "Arduino",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: arduino_logo,
      },
      {
        id: "14",
        Name: "linux",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: linux_logo,
      },
      {
        id: "15",
        Name: "aws",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: aws_logo,
      },
      {
        id: "16",
        Name: "Cloud",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: cloud_logo,
      },
      {
        id: "17",
        Name: "PHP",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: php_logo,
      },
      {
        id: "18",
        Name: "Typescript",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: typescript_logo,
      },
      {
        id: "19",
        Name: "Rasbian",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Rasbian,
      },
      {
        id: "20",
        Name: "Postgres",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Postgres_logo,
      },
      {
        id: "21",
        Name: "MongoDB",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: MongoDb,
      },
      {
        id: "22",
        Name: "Azure",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Azure_logo,
      },
      {
        id: "23",
        Name: "WordPress",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Wordpress,
      },
      {
        id: "24",
        Name: "Swagger",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Swagger_logo,
      },
      {
        id: "25",
        Name: "Redis",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: Redis_logo,
      },
      {
        id: "26",
        Name: "C#",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img: cash_logo,
      },
  ];
  return (
    <div className="TechStacks_Wrapper">
      <div className="TechStacks_Inner_Wrapper">
        <div className="Header">Tech Stacks</div>
        <div className="row Tech_Content">
          {Technologies.map((ele, index) => {
            return (
              <div
                className="col-lg-2 col-md-3 col-sm-6 col-xs-6 col-12"
                key={ele.id}
              >
                <div className="card">
                  <div className="card-body">
                    <img src={ele.img} width={"100%"} height={"100%"} />
                  </div>
                  <div className="card-footer">
                    {/* <h4>{ele.Name}</h4> */}
                    <p className="name_content">{ele.Name}</p>
                    {/* <p>{ele.Content}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
