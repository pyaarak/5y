import React from "react";
import "../Stylesheets/Careers.scss";
import img from "../Assets/Contus.jpg";
import Clients from "./Clients";
import ClientRate from "./ClientRate";
import Webapptested from "./Webapptested";
import MobileApptest from "./MobileApptest";

export default function Careers() {
  return (
    <div className="Careers_Wrapper">
      {/* <img src={img} width={"100%"}></img> */}
      <div className="Contact_bg"></div>
      <div className="margintopcontent">
        <h1 className="Header">Let’s Start Your Career With 5Y</h1>
        {/* <p>Name</p> */}
        <p className="Label">
          Seeking to launch your career on a promising path or elevate it to new
          heights? Come 5Y Technologies our vessel for a future full of
          promise."
        </p>
      </div>
      <div className="Careers_Inner_Wrapper">
        <div className="Contact_Banner_Content">
          <div className="row Contact_Banner_home">
            <div className="col-md-7 contact_card">
              <div className="Form">
                <h1 className="Header">CONTACT US</h1>
                <p>Ready to take your career to new heights with innovative software
          solutions? Get in touch with us today!</p>
                <input type="text" placeholder="Enter Your Name..."></input>
                <input type="text" placeholder="Enter Your Email..."></input>
                <input
                  type="text"
                  placeholder="Enter Your Mobile No..."
                ></input>
                {/* <input type="text" placeholder="Enter Your Address..."></input> */}
                <textarea placeholder="Enter Your Message"></textarea>
                <div className="but">
                  <button className="Submit_button">Submit</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 img_card">
              {/* <img src={img} width={"100%"}></img> */}
              <h1 style={{ textAlign: "left" }}>Global Impact</h1>
              <div className="div_card">
                {/* <p className="count">200+</p> */}
                <Clients></Clients>
                <p className="countName">Clients</p>
              </div>
              <div className="div_card">
                {/* <p className="count">90%</p> */}
                <ClientRate></ClientRate>
                <p className="countName">Client Rate us</p>
              </div>
              <div className="div_card">
                {/* <p className="count">100+</p> */}
                <Webapptested></Webapptested>
                <p className="countName">Web Apps Tested</p>
              </div>
              <div className="div_card">
                {/* <p className="count">50+</p> */}
                <MobileApptest></MobileApptest>
                <p className="countName">Mobile App Tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
