import React from "react";
import "../Stylesheets/Contactus.scss";
import img from "../Assets/Contus.jpg";

export default function ContactUs() {
  return (
    <div className="Contactus_Wrapper">
      {/* <img src={img} width={"100%"}></img> */}
      <div className="Contact_bg">
      </div>
      <div className="margintopcontent">
        <h1 className="Header">Let’s Build Your Success With 5Y</h1>
        {/* <p>Name</p> */}
        <p className="Label">
          Ready to take your business to new heights with innovative software
          solutions? Get in touch with us today! We are excited to discuss your
          project, understand your requirements, and provide you with a
          customized solution that propels your business forward.
        </p>
      </div>
      <div className="Contactus_Inner_Wrapper">
        <div className="Contact_Banner_Content">
          <div className="row Contact_Banner_home">
            <div className="col-md-7 contact_card">
              <div className="Form">
              <h1 className="Header">CONTACT US</h1>
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
                <h1 style={{textAlign:"left"}}>Global Impact</h1>
                <div className="div_card">
                    <p className="count">200+</p>
                    <p className="countName">Clients</p>
                </div>
                <div className="div_card">
                    <p className="count">90%</p>
                    <p className="countName">Client Rate us</p>
                </div>
                <div className="div_card">
                    <p className="count">100+</p>
                    <p className="countName">Web Apps Tested</p>
                </div>
                <div className="div_card">
                    <p className="count">50+</p>
                    <p className="countName">Mobile App Tested</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
