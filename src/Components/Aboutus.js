import React from "react";
import "../Stylesheets/Aboutus.scss";
import bg_img from "../Assets/feature_shape_1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Contact_Banner from "./Contact_Banner";
import GroupIcon from '@mui/icons-material/Group';
import GradeIcon from '@mui/icons-material/Grade';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function Aboutus() {
  return (
    <div className="Aboutus_Wrapper">
      <div className="Aboutus_Inner_Wrapper">
        <div className="Aboutus_Banner">
          <div className="Aboutus_Inner_Banner">
            <div className="Aboutus_banner_cont">
              <div className="Header">ABOUT US</div>
              <p>
                5Y Technologies is a reputable software company with a strong
                presence in Madurai, home to a talented team of 28 young and
                experienced developers and testers. Our diverse team is
                well-versed in a wide range of domains, bringing a wealth of
                expertise to the table. We are committed to delivering
                innovative solutions and top-notch software services that cater
                to the unique needs of our clients. Our comprehensive domain
                knowledge ensures that we can tackle projects across various
                industries with the precision and creativity they demand. With a
                focus on cutting-edge technologies and a dedication to
                excellence, 5Y Technologies stands as a reliable partner for
                businesses seeking software solutions that are both reliable and
                forward-thinking. Our mission is to leverage the power of
                technology to drive growth and transformation for our clients,
                and our dynamic team is always up for the challenge. We believe
                in the potential of technology to shape the future, and we are
                here to turn that potential into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row Aboutus_second_Banner">
        <div className="Header">What Sets the Best Apart</div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Client-Centered Approach</b>
            <p>
              We prioritize understanding their clients' goals and challenges.
              They work collaboratively to craft solutions that align with
              business objectives.
            </p>
          </div>
          {/* <img src={bg_img} width={"100%"}></img> */}
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Customization</b>
            <p>
              A one-size-fits-all approach doesn't cut it. Our tailor
              development to the unique needs of each client, ensuring that the
              end product stands out in the digital landscape.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Agile Methodologies</b>
            <p>
              We employ agile development methodologies, facilitating
              flexibility and adaptability throughout the project lifecycle.
              This enables quick responses to changes or feedback.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Quality Assurance</b>
            <p>
              A commitment to quality is non-negotiable. We have rigorous
              quality assurance processes in place, conducting thorough testing
              and validation before delivering a project.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Innovation and Continuous Learning</b>
            <p>
              We embrace innovation and invest in continuous learning to stay
              ahead in the ever-evolving tech ecosystem. They explore emerging
              technologies, such as AI and blockchain, to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>Post-Launch Support</b>
            <p>
              Beyond project completion, We offer comprehensive post-launch
              support, addressing issues, implementing updates, and ensuring
              that the software remains in optimal condition.
            </p>
          </div>
        </div>
      </div>
      <div className="row Aboutus_third_Banner">
        <div className="Header">Our Team</div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>
              <AccountCircleIcon></AccountCircleIcon><span className="ret"><span>Ramkumar</span>CEO</span>
            </b>
            {/* <p>A one-size-fits-all approach doesn't cut it. Our tailor</p> */}
          </div>
          {/* <img src={bg_img} width={"100%"}></img> */}
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>
              <AccountCircleIcon></AccountCircleIcon><span className="ret"><span>Ramkumar</span>COO</span>
            </b>
            {/* <p>A one-size-fits-all approach doesn't cut it. Our tailor</p> */}
          </div>
        </div>
        <div className="col-xl-4 col-md-6 whatwe">
          <div className="Content">
            <b>
              <AccountCircleIcon></AccountCircleIcon><span className="ret"><span>Ramkumar</span>Director</span>
            </b>
            {/* <p>A one-size-fits-all approach doesn't cut it. Our tailor</p> */}
          </div>
        </div>
      </div>
      <div className="Third_Wrapper">
        <div className="row img_card">
            <h1 className="Header">GLOBAL IMPACT</h1>
          {/* <img src={img} width={"100%"}></img> */}
          <div className="col-md-3 div_card">
           <div className="div_card_inner">
           <div className="round"> <GroupIcon></GroupIcon></div>
           <p className="count">100+</p>
            <p className="countName">Clients</p>
           </div>
          </div>
          <div className="col-md-3 div_card">
           <div className="div_card_inner">
            <div className="round"><GradeIcon></GradeIcon></div>
           <p className="count">90%</p>
            <p className="countName">Client Rate us</p>
           </div>
          </div>
          <div className="col-md-3 div_card">
           <div className="div_card_inner">
           <div className="round"><LaptopIcon></LaptopIcon></div>
           <p className="count">100+</p>
            <p className="countName">Web Apps Tested</p>
           </div>
          </div>
          <div className="col-md-3 div_card">
            <div className="div_card_inner">
               <div className="round"> <AppShortcutIcon></AppShortcutIcon></div>
            <p className="count">50+</p>
            <p className="countName">Mobile App Tested</p>
            </div>
          </div>
        </div>
      </div>
      <Contact_Banner></Contact_Banner>
    </div>
  );
}
