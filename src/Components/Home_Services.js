import React from "react";
import "../Stylesheets/Services.scss";
import Full_Stack from "../Assets/Services/Full_Stack.jpg";
import Cloud_Comp from "../Assets/Services/Cloud_Com.jpg";
import AutoTesting from "../Assets/Services/AutoTesting1.jpg";
import UIUX from "../Assets/Services/UIUX.jpg";
import GroupIcon from '@mui/icons-material/Group';
import GradeIcon from '@mui/icons-material/Grade';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function Home_Services() {
  const Services = [
    {
      id: "1",
      Name: "Full Stack Development",
      Content:
        "In the ever-evolving digital landscape, having a powerful online presence is a fundamental aspect of success for businesses across the globe. To harness the full potential of the internet, you need more than just a website; you need a web application that's dynamic, responsive, and tailored to your unique needs.",
      img: Full_Stack,
      path:"/services/fullstack"
    },
    {
      id: "2",
      Name: "Automation Testing",
      Content:
        "In the fiercely competitive realm of software testing, what distinguishes a company as the best in the field often hinges on a combination of factors that encapsulate expertise, methodology, innovation, and a relentless commitment to quality.",
      img: AutoTesting,
      path:"/services/autotesting"
    },
    {
      id: "3",
      Name: "Cloud Computing",
      Content:
        "At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing. Azure's flexibility allows businesses to scale resources up or down based on demand, ensuring that IT resources are used efficiently.",
      img: Cloud_Comp,
      path:"/services/mscloud"
    },
    {
      id: "4",
      Name: "UI & UX Designers",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: UIUX,
      path:"/services/uiux"
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
                    <div className="card" onClick={e=>{window.location.href=ele.path}}>
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
            <button className="Explore_button" onClick={e=>{window.location.href="/services"}}>Explore More</button>
          </div>
        </div>
      </div>
      <div className="Third_Wrapper">
        <div className="row img_card">
            <h1 className="Header">GLOBAL IMPACT</h1>
          {/* <img src={img} width={"100%"}></img> */}
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
           <div className="div_card_inner">
           <div className="round"> <GroupIcon></GroupIcon></div>
           <p className="count">100+</p>
            <p className="countName">Clients</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
           <div className="div_card_inner">
            <div className="round"><GradeIcon></GradeIcon></div>
           <p className="count">90%</p>
            <p className="countName">Client Rate us</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
           <div className="div_card_inner">
           <div className="round"><LaptopIcon></LaptopIcon></div>
           <p className="count">100+</p>
            <p className="countName">Web Apps Tested</p>
           </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 div_card">
            <div className="div_card_inner">
               <div className="round"> <AppShortcutIcon></AppShortcutIcon></div>
            <p className="count">50+</p>
            <p className="countName">Mobile App Tested</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
