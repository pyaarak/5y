import React, { useEffect } from "react";
import "../Stylesheets/Services.scss";
import Full_Stack from "../Assets/Services/Full_Stack.jpg";
import Cloud_Comp from "../Assets/Services/Cloud_Com.jpg";
import AutoTesting from "../Assets/Services/AutoTesting1.jpg";
import UIUX from "../Assets/Services/UIUX.jpg";
import GroupIcon from "@mui/icons-material/Group";
import GradeIcon from "@mui/icons-material/Grade";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import LaptopIcon from "@mui/icons-material/Laptop";
import { useCountUp } from "react-countup";
import { useInViewport } from 'react-in-viewport';
import ClientRate from "./ClientRate";
import Clients from "./Clients";
import Webapptested from "./Webapptested";
import MobileApptest from "./MobileApptest";
// import Count1 from "./ClientRate";

export default function Home_Services() {
  // const countUpRef = React.useRef(null);
  // const countUpRef1 = React.useRef(null);
  // const countUpRef2 = React.useRef(null);
  // const countUpRef3 = React.useRef(null);
  // const {
  //   inViewport,
  //   enterCount,
  //   leaveCount,
  // } = useInViewport(countUpRef);

  // const { start, pauseResume, reset, update } = useCountUp({
  //   ref: countUpRef,
  //   start: 0,
  //   end: 100,
  //   // delay: 1000,
  //   duration: 4,
  //   suffix: "+",
  //   onReset: () => console.log("Resetted!"),
  //   onUpdate: () => console.log("Updated!"),
  //   onPauseResume: () => console.log("Paused or resumed!"),
  //   onStart: ({ pauseResume }) => console.log(pauseResume),
  //   onEnd: ({ pauseResume }) => console.log(pauseResume),
  // });

  // useEffect(()=>{
  //   if(enterCount == 1){
  //      document.getElementById("click").click()
  //   } 
  // },[enterCount])
  const Services = [
    {
      id: "1",
      Name: "Full Stack Development",
      Content:
        "In the ever-evolving digital landscape, having a powerful online presence is a fundamental aspect of success for businesses across the globe. To harness the full potential of the internet, you need more than just a website; you need a web application that's dynamic, responsive, and tailored to your unique needs.",
      img: Full_Stack,
      path: "/services/fullstack",
    },
    {
      id: "2",
      Name: "Automation Testing",
      Content:
        "In the fiercely competitive realm of software testing, what distinguishes a company as the best in the field often hinges on a combination of factors that encapsulate expertise, methodology, innovation, and a relentless commitment to quality.",
      img: AutoTesting,
      path: "/services/autotesting",
    },
    {
      id: "3",
      Name: "Cloud Computing",
      Content:
        "At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing. Azure's flexibility allows businesses to scale resources up or down based on demand, ensuring that IT resources are used efficiently.",
      img: Cloud_Comp,
      path: "/services/mscloud",
    },
    {
      id: "4",
      Name: "UI & UX Designers",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: UIUX,
      path: "/services/uiux",
    },
  ];
  return (
    <>
      <div className="Services_Wrapper">
        <div className="Services_Inner_Wrapper">
          <div className="Services_Content">
            <h1 className="Header">Services</h1>
            <div className="row Services_home">
              {Services.map((ele) => {
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={ele.id}>
                    <div
                      className="card"
                      onClick={(e) => {
                        window.location.href = ele.path;
                      }}
                    >
                      <div className="card-body">
                        <img src={ele.img} width={"100%"} height={"100%"} />
                      </div>
                      <div className="card-footer">
                        <h4>{ele.Name}</h4>
                        <p>{ele.Content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="Explore_button"
              onClick={(e) => {
                window.location.href = "/services";
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
      <div className="Third_Wrapper">
        <div className="row img_card">
          <h1 className="Header">GLOBAL IMPACT</h1>
          {/* <img src={img} width={"100%"}></img> */}
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
            <div className="div_card_inner">
              <div className="round">
                {" "}
                <GroupIcon></GroupIcon>
              </div>
              {/* <p className="count" ref={countUpRef}></p> */}
              <Clients></Clients>
              {/* <CountUp start={0} duration={5} end={100} useEasing={true} onStart={({ pauseResume }) => console.log(pauseResume)} onReset={() => console.log('Resetted!')}></CountUp>+</p> */}
              <p className="countName">Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
            <div className="div_card_inner">
              <div className="round">
                <GradeIcon></GradeIcon>
              </div>
              {/* <p className="count" ref={countUpRef1}></p> */}
              <ClientRate></ClientRate>
              {/* <CountUp start={0} duration={5} end={90}></CountUp>%</p> */}
              <p className="countName">Client Rate us</p>
              {/* <p onClick={e=>{reset();pauseResume()}}  id="click" style={{display:"none"}}></p> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
            <div className="div_card_inner">
              <div className="round">
                <LaptopIcon></LaptopIcon>
              </div>
              {/* <p className="count" ref={countUpRef2}></p> */}
              <Webapptested></Webapptested>
              {/* <CountUp start={0} duration={5} end={100}></CountUp>+</p> */}
              <p className="countName">Web Apps Tested</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
            <div className="div_card_inner">
              <div className="round">
                {" "}
                <AppShortcutIcon></AppShortcutIcon>
              </div>
              {/* <p className="count" ref={countUpRef3}></p> */}
              <MobileApptest></MobileApptest>
              {/* <CountUp start={0} duration={5} end={50}></CountUp>+</p> */}
              <p className="countName">Mobile App Tested</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
