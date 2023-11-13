import React from "react";
import "../Stylesheets/Second_Banner.scss";
import ab from "../Assets/ab2.jpg";
import ab1 from "../Assets/about_us_img.jpg";

export default function Second_Banner() {
  return (
    <div className="Second_Banner_Wrapper">
      <div className="Second_Inner_Wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="About_us">
              <img src={ab} width={"100%"} className="first_img"></img>

              {/* <img src={ab1} width={"100%"} className="second_img"></img> */}
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="Header">About us</h1>
            <p>
              5Y Technologies is a reputable software company with a strong
              presence in Madurai, home to a talented team of 28 young and
              experienced developers and testers. Our diverse team is
              well-versed in a wide range of domains, bringing a wealth of
              expertise to the table. We are committed to delivering innovative
              solutions and top-notch software services that cater to the unique
              needs of our clients. Our comprehensive domain knowledge ensures
              that we can tackle projects across various industries with the
              precision and creativity they demand. With a focus on cutting-edge
              technologies and a dedication to excellence, 5Y Technologies
              stands as a reliable partner for businesses seeking software
              solutions that are both reliable and forward-thinking. Our mission
              is to leverage the power of technology to drive growth and
              transformation for our clients, and our dynamic team is always up
              for the challenge. We believe in the potential of technology to
              shape the future, and we are here to turn that potential into
              reality.
            </p>
            <button onClick={e=>{window.location.href="/aboutus"}}>Explore More</button>
          </div>
        </div>
        <div className="row second_part">
          <div className="col-md-6">
            <div className="About_us">
              {/* <img src={ab} width={"100%"} className="first_img"></img> */}

              <img src={ab1} width={"100%"} className="second_img"></img>
            </div>
          </div>
          <div className="col-md-6 content">
            <h1 className="Header">What Sets the Best Apart</h1>
            <p>
              We prioritize understanding their clients' goals and challenges
              and work collaboratively to craft solutions that align with
              business objectives.
            </p>
            <p>
              A commitment to quality is non-negotiable. We have rigorous
              quality assurance processes in place, conducting thorough testing
              and validation before delivering a project.
            </p>
            <p>
              We do not merely deliver projects; We enable digital
              transformation and empower businesses to reach wider audiences,
              optimize operations, and achieve strategic objectives. 5Y
              Technologies is agile, client-focused, and committed to
              excellence.
            </p>
            <button onClick={e=>{window.location.href="/aboutus"}}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
