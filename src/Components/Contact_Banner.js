import React, { useState } from "react";
import "../Stylesheets/Contact_Banner.scss";
import react_logo from "../Assets/Tech_Stacks/React_logo.png";
import js_logo from "../Assets/Tech_Stacks/JavaScript-logo.png";
import Python_logo from "../Assets/Tech_Stacks/python_logo.png";
import java_logo from "../Assets/Tech_Stacks/java.png";
import Mysql_logo from "../Assets/Tech_Stacks/Mysql_logo.png";
import Nodejs_logo from "../Assets/Tech_Stacks/nodejs_logo.png";
import contact_bg from "../Assets/robo2.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Full_Stack from '../Assets/Contact_Banner/Full_Stack.jpg'
// import Cloud_Comp from '../Assets/Contact_Banner/Cloud_Com.jpg'
// import AutoTesting from '../Assets/Contact_Banner/AutoTesting1.jpg'
// import UIUX from '../Assets/Contact_Banner/UIUX.jpg'

export default function Contact_Banner() {
  const [Nameerror, setNameError] = useState(false);
  const [Emailerror, setEmailError] = useState(false);
  const [MobileError, setMobileError] = useState(false);
  const [MessageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Message, setMessage] = useState("");
  const HandleSubmit = (e) => {
    if (name == "") {
      setNameError(true);
    } else if (Email == "") {
      setEmailError(true);
    } else if (Mobile == "") {
      setMobileError(true);
    } else if (Message == "") {
      setMessageError(true);
    } else {
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
  const Contact_Banner = [
    {
      id: "1",
      Name: "React JS",
      Content:
        "In the ever-evolving digital landscape, having a powerful online presence is a fundamental aspect of success for businesses across the globe. To harness the full potential of the internet, you need more than just a website; you need a web application that's dynamic, responsive, and tailored to your unique needs.",
      img: react_logo,
    },
    {
      id: "2",
      Name: "Java Script",
      Content:
        "In the fiercely competitive realm of software testing, what distinguishes a company as the best in the field often hinges on a combination of factors that encapsulate expertise, methodology, innovation, and a relentless commitment to quality.",
      img: js_logo,
    },
    {
      id: "3",
      Name: "Python",
      Content:
        "At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing. Azure's flexibility allows businesses to scale resources up or down based on demand, ensuring that IT resources are used efficiently.",
      img: Python_logo,
    },
    {
      id: "4",
      Name: "Mysql",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: Mysql_logo,
    },
    {
      id: "5",
      Name: "Java",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: java_logo,
    },
    {
      id: "6",
      Name: "Node js",
      Content:
        "We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
      img: Nodejs_logo,
    },
  ];
  return (
    <div className="Contact_Banner_Wrapper">
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
      <div className="Contact_Banner_Inner_Wrapper">
        <div className="Contact_Banner_Content">
          {/* <img src={drone_bg} className='drone_img'></img> */}
          {/* <div className="Header">CONTACT US</div> */}
          <div className="row Contact_Banner_home">
            <div className="col-md-6">
              <div className="Form">
                <h1 className="Header">Let’s Build Your Success With 5Y</h1>
                {/* <p>Name</p> */}
                <p className="Label">
                  Ready to take your business to new heights with innovative
                  software solutions? Get in touch with us today! We are excited
                  to discuss your project, understand your requirements, and
                  provide you with a customized solution that propels your
                  business forward.
                </p>
                <div className="Contact_us_Second_Card">
                  <ul>
                    {/* <li>Deliver Perfect Solution</li> */}
                    {/* <li><img></img>Data Protection</li> */}
                    {/* <li><img></img>Optimize IT System</li> */}
                  </ul>
                  {/* <img src={contact_bg} width={"100%"}></img> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 contact_card">
              <div className="Form" style={{ marginTop: "60px" }}>
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
                    onClick={(e) => HandleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <button className='Explore_button'>Load More</button> */}
        </div>
      </div>
    </div>
  );
}
