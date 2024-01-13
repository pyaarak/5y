import React, { useState } from "react";
import "../Stylesheets/Contactus.scss";
import img from "../Assets/Contus.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clients from "./Clients";
import ClientRate from "./ClientRate";
import Webapptested from "./Webapptested";
import MobileApptest from "./MobileApptest";

export default function ContactUs() {
  const [Nameerror, setNameError] = useState(false);
  const [Emailerror, setEmailError] = useState(false);
  const [MobileError, setMobileError] = useState(false);
  const [MessageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    toast.loading("Pending...")
    if (name == "") {
      setNameError(true);
    } else if (Email == "") {
      setEmailError(true);
    } else if (Mobile == "") {
      setMobileError(true);
    } else if (Message == "") {
      setMessageError(true);
    }else {
      const id = toast.loading("Please Wait...");
      setNameError(false);
      setEmailError(false);
      setMobileError(false);
      setMessageError(false);
      emailjs
        .send(
          "service_rr1wrvm",
          "template_y78kbgh",
          {
            from_name: name,
            Phone: Mobile,
            Message: Message,
            reply_to: Email,
            to_email: Email,
          },
          "FfC0Jnq6samCzaxdy"
        )
        .then((response) => {
          debugger;
          toast.update(id, {
            render: "Email Sent Successfully",
            type: "success",
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            isLoading: false,
            theme: "light",
            draggable: true,
            closeOnClick: true,
          });
          // toast.success("Email Sent Successfully", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          toast.update(id, {
            render: "Something Went Wrong Please Try again!",
            type: "error",
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            isLoading: false,
            theme: "light",
            draggable: true,
            closeOnClick: true,
          });
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
        });
    }
  };
  return (
    <div className="Contactus_Wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <img src={img} width={"100%"}></img> */}
      <div className="Contact_bg"></div>
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
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                ></input>
                {Nameerror && (
                  <p
                    style={{
                      color: "red",
                      margin: "0",
                      marginLeft: "12px",
                      marginTop: "-15px",
                    }}
                  >
                    Enter your Name*
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Enter Your Email..."
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                ></input>
                {Emailerror && (
                  <p
                    style={{
                      color: "red",
                      margin: "0",
                      marginLeft: "12px",
                      marginTop: "-15px",
                    }}
                  >
                    Enter your Email*
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Enter Your Mobile No..."
                  value={Mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setMobileError(false);
                  }}
                ></input>
                {MobileError && (
                  <p
                    style={{
                      color: "red",
                      margin: "0",
                      marginLeft: "12px",
                      marginTop: "-15px",
                    }}
                  >
                    Enter your Mobile Number*
                  </p>
                )}
                {/* <input type="text" placeholder="Enter Your Address..."></input> */}
                <textarea
                  placeholder="Enter Your Message"
                  value={Message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageError(false);
                  }}
                ></textarea>
                {MessageError && (
                  <p
                    style={{
                      color: "red",
                      margin: "0",
                      marginLeft: "12px",
                      marginTop: "-8px",
                    }}
                  >
                    Enter Message*
                  </p>
                )}
                <div className="but">
                  <button
                    className="Submit_button"
                    onClick={(e) => {
                      HandleSubmit(e);
                    }}
                  >
                    Submit
                  </button>
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
