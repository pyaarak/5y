import React, { useEffect } from "react";
import "../Stylesheets/Aboutus.scss";
import bg_img from "../Assets/feature_shape_1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Contact_Banner from "./Contact_Banner";
import GroupIcon from "@mui/icons-material/Group";
import GradeIcon from "@mui/icons-material/Grade";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import LaptopIcon from "@mui/icons-material/Laptop";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClientRate from "./ClientRate";
import Clients from "./Clients";
import Webapptested from "./Webapptested";
import MobileApptest from "./MobileApptest";

export default function Aboutus() {
  const render = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  // const render1 = new THREE.WebGLRenderer({ alpha:true,antialias: true });
  // render.shadowMapEnabled = true
  function init() {
    const scene = new THREE.Scene();
    const l1 = document.getElementById("Imgs");
    l1.innerHTML = "";
    const camera = new THREE.PerspectiveCamera(
      75,
      l1.clientWidth / l1.clientHeight,
      0.1,
      1000
    );
    render.setSize(l1.clientWidth, l1.clientHeight);
    l1.appendChild(render.domElement);
    const geometry = new THREE.TorusKnotGeometry(
      10,
      1.72,
      231,
      8,
      20,
      10
      // 6.28,
      // 4.5,
      // 1.18,
      // 0.87
    );
    // render.shadowMapEnabled = true;
    // render.setSize(l1.clientWidth, l1.clientHeight);
    // l1.appendChild(render.domElement);
    const geometry1 = new THREE.SphereGeometry(
      25,
      32,
      16
      // 100
      // 6.28,
      // 4.5,
      // 1.18,
      // 0.87
    );
    // var texture = new THREE.TextureLoader().load(Mapass);
    // const material = new THREE.MeshBasicMaterial({map : texture, overdraw: 0.9});
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.castShadow = true;
    const tour = new THREE.Mesh(geometry1, material);
    // scene.add(sphere);
    scene.add(tour);
    // scene.fog=new THREE.Fog(0x00000,400,2000);
    // scene.add(sphere)
    camera.position.z = 50;
    // camera1.position.z = 50;

    const controls = new OrbitControls(camera, render.domElement);
    const loader = new GLTFLoader();
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      tour.rotation.x += 0.01;
      tour.rotation.y += 0.01;
      render.render(scene, camera);
      // render.render(scene1,camera)
    }

    animate();
  }
  // window.addEventListener('resize',init)
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div className="Banner_Wrapper">
        <div className="Banner_Inner_Wrapper active">
          <div className="image_Wrapper">
            <div className="Banner_content active">
            <div className="Header">ABOUT US</div>
                <p>
                  5Y Technologies is a reputable software company with a strong
                  presence in Madurai, home to a talented team of 28 young and
                  experienced developers and testers. Our diverse team is
                  well-versed in a wide range of domains, bringing a wealth of
                  expertise to the table. We are committed to delivering
                  innovative solutions and top-notch software services that
                  cater to the unique needs of our clients. Our comprehensive
                  domain knowledge ensures that we can tackle projects across
                  various industries with the precision and creativity they
                  demand. With a focus on cutting-edge technologies and a
                  dedication to excellence, 5Y Technologies stands as a reliable
                  partner for businesses seeking software solutions that are
                  both reliable and forward-thinking. Our mission is to leverage
                  the power of technology to drive growth and transformation for
                  our clients, and our dynamic team is always up for the
                  challenge. We believe in the potential of technology to shape
                  the future, and we are here to turn that potential into
                  reality.
                </p>
            </div>
            <div className={`Banner_img`}>
              <div className="right_side_Image" id="Imgs"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Aboutus_Wrapper">
        <div className="Aboutus_Inner_Wrapper">
          {/* <div className="Aboutus_Banner">
            <div className="Aboutus_Inner_Banner">
              <div className="Aboutus_banner_cont">
                <div className="Header">ABOUT US</div>
                <p>
                  5Y Technologies is a reputable software company with a strong
                  presence in Madurai, home to a talented team of 28 young and
                  experienced developers and testers. Our diverse team is
                  well-versed in a wide range of domains, bringing a wealth of
                  expertise to the table. We are committed to delivering
                  innovative solutions and top-notch software services that
                  cater to the unique needs of our clients. Our comprehensive
                  domain knowledge ensures that we can tackle projects across
                  various industries with the precision and creativity they
                  demand. With a focus on cutting-edge technologies and a
                  dedication to excellence, 5Y Technologies stands as a reliable
                  partner for businesses seeking software solutions that are
                  both reliable and forward-thinking. Our mission is to leverage
                  the power of technology to drive growth and transformation for
                  our clients, and our dynamic team is always up for the
                  challenge. We believe in the potential of technology to shape
                  the future, and we are here to turn that potential into
                  reality.
                </p>
              </div>
            </div>
          </div> */}
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
                development to the unique needs of each client, ensuring that
                the end product stands out in the digital landscape.
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
                quality assurance processes in place, conducting thorough
                testing and validation before delivering a project.
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
                <AccountCircleIcon></AccountCircleIcon>
                <span className="ret">
                  <span>Thangamuthu</span>Founder
                </span>
              </b>
              {/* <p>A one-size-fits-all approach doesn't cut it. Our tailor</p> */}
            </div>
            {/* <img src={bg_img} width={"100%"}></img> */}
          </div>
          <div className="col-xl-4 col-md-6 whatwe">
            <div className="Content">
              <b>
                <AccountCircleIcon></AccountCircleIcon>
                <span className="ret">
                  <span>Aahash</span>Project Leader
                </span>
              </b>
              {/* <p>A one-size-fits-all approach doesn't cut it. Our tailor</p> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6 whatwe">
            <div className="Content">
              <b>
                <AccountCircleIcon></AccountCircleIcon>
                <span className="ret">
                  <span>Aarthy</span>Project Leader
                </span>
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
                <div className="round">
                  {" "}
                  <GroupIcon></GroupIcon>
                </div>
                {/* <p className="count">100+</p> */}
                <Clients></Clients>
                <p className="countName">Clients</p>
              </div>
            </div>
            <div className="col-md-3 div_card">
              <div className="div_card_inner">
                <div className="round">
                  <GradeIcon></GradeIcon>
                </div>
                {/* <p className="count">90%</p> */}
                <ClientRate></ClientRate>
                <p className="countName">Client Rate us</p>
              </div>
            </div>
            <div className="col-md-3 div_card">
              <div className="div_card_inner">
                <div className="round">
                  <LaptopIcon></LaptopIcon>
                </div>
                {/* <p className="count">100+</p> */}
                <Webapptested></Webapptested>
                <p className="countName">Web Apps Tested</p>
              </div>
            </div>
            <div className="col-md-3 div_card">
              <div className="div_card_inner">
                <div className="round">
                  {" "}
                  <AppShortcutIcon></AppShortcutIcon>
                </div>
                {/* <p className="count">50+</p> */}
                <MobileApptest></MobileApptest>
                <p className="countName">Mobile App Tested</p>
              </div>
            </div>
          </div>
        </div>
        <Contact_Banner></Contact_Banner>
      </div>
    </>
  );
}
