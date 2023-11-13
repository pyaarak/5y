import React from "react";
import "../Stylesheets/MobileAppdevelopment.scss";
// import Iosdev from '../Assets/Services/'
import androidapp from '../Assets/Services/Appdev.jpg';
import pwdimg from '../Assets/Services/teblet.jpg';
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Flutterdev.jpg";

export default function MobileAppdevelopment() {
  const Techstacks = [
    {
      id: "1",
      Name: "IOS DEVELOPMENT",
      img:"",
      Content:
        "Unlock the power of ISO app development with our expert team. Our expertise lies in crafting top-tier, user-centric applications customized to your exact requirements. Whether from initial concept to final launch, we guarantee a smooth and effective development journey. Begin your app venture today and propel your business to unprecedented success!",
    },
    {
      id: "2",
      Name: "ANDROID APP DEVELOPMENT",
      img:androidapp,
      Content:
        "We don't simply introduce your idea to the crowded market; our skilled team goes the extra mile to ensure your app stands out. Whether we're working with Kotlin or Java, we consistently maximize the use of all available resources to deliver outstanding outcomes for our clients. Leveraging our team's proficiency in SDK platforms and diverse libraries, we create user-friendly apps that perform exceptionally on every Android device they're used on. Our work leaves no room for compromise.",
    },
    {
      id: "3",
      Name: "PROGRESSIVE APP DEVELOPMENT",
      img:pwdimg,
      Content:
        "We hold the firm belief that adaptability is an essential quality for any software development company, and we are confident that adaptability is our strong suit. Crafting a personalized mobile application designed to address your unique requirements is a breeze for our team. Our dedicated team takes great pleasure in conceiving innovative and efficient solutions that seamlessly operate across all platforms and contribute to your success.",
    },
  ];
  return (
    <div className="MobileAppdevelopment_Developer">
      <div className="MobileAppdevelopment_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>MOBILE APP DEVELOPMENT</h4>
            We go beyond merely creating apps that are ready for launch; our
            focus lies in crafting apps destined for success. With hundreds of
            thousands of apps flooding the market monthly, the aim is no longer
            limited to releasing an app but ensuring it thrives amidst the vast
            app landscape.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Opt for Our Mobile App Development Services:</h4>
          <p>
            What sets our mobile app development services apart is our ability
            to deliver excellence across all platforms.
          </p>
          {/* <h4>Mastery of Cross-Platform Development</h4>
          <p>
            Our seasoned developers excel at crafting apps that seamlessly
            operate on both iOS and Android, providing you with time and cost
            savings.
          </p> */}
        </div>
        {Techstacks.map((ele, index) => {
          return (
              <div className={`col-xl-8 col-md-12 whatwe ${index == 1 && "act"} ${index == 2 && "act1"}`}>
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
