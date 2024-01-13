import React, { useEffect } from "react";
import "../Stylesheets/Service.scss";
import Full_Stack from "../Assets/Services/Full_Stack.jpg";
import Cloud_Comp from "../Assets/Services/Cloud_Com.jpg";
import AutoTesting from "../Assets/Services/AutoTesting1.jpg";
import UIUX from "../Assets/Services/UIUX.jpg";
import MobileTest from "../Assets/Services/Mobiletes.jpg";
import MobileAppdev from "../Assets/Services/Appdev.jpg";
import Flutter from "../Assets/Services/Mobiledev.jpg";
import Webapp from "../Assets/Services/webapp.jpg";
import iot from "../Assets/Services/iot.jpg";
import cloud from "../Assets/contact_us.jpg";
import TechStacks from "./TechStacks";
import Contact_Banner from "../Components/Contact_Banner";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Services() {
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
    const geometry1 = new THREE.CapsuleGeometry(
        20, 20, 20, 20
      // 100
      // 6.28,
      // 4.5,
      // 1.18,
      // 0.87
    );
    // var texture = new THREE.TextureLoader().load(Mapass);
    // const material = new THREE.MeshBasicMaterial({map : texture, overdraw: 0.9});
    const material = new THREE.MeshNormalMaterial({
      wireframe: true,
    //   color: 0xffffff,
    });
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.castShadow = true;
    const tour = new THREE.Mesh(geometry1, material);
    scene.add(sphere);
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
  const Servicesc = [
    {
      id: "1",
      Name: "Full Stack Development",
      Content:
        "To harness the full potential of the internet, you need more than just a website.",
      img: Full_Stack,
      path: "/services/fullstack",
    },
    {
      id: "2",
      Name: "Automation Testing",
      Content:
        "Our team of dedicated professionals is well-versed in the latest trends, tools, and techniques.",
      img: AutoTesting,
      path: "/services/autotesting",
    },
    {
      id: "4",
      Name: "UI & UX Designers",
      Content:
        "Our designs are visually appealing aesthetics with functionality to create stunning interfaces.",
      img: UIUX,
      path: "/services/uiux",
    },
    {
      id: "5",
      Name: "Mobile App Testing",
      Content:
        "At 5Y Technologies, we specialize in providing comprehensive mobile app testing.",
      img: MobileTest,
      path: "/services/mobiletesting",
    },
    {
      id: "6",
      Name: "Mobile APP Development",
      Content:
        "We go beyond merely creating apps that are ready for launch; our focus lies in crafting apps destined for success.",
      img: MobileAppdev,
      path: "/services/MobileAppdevelopment",
    },
    {
      id: "7",
      Name: "Flutter App Development",
      Content:
        "At 5Y Technologies, we have firmly established ourselves as trailblazers in the field of Flutter app development.",
      img: Flutter,
      path: "/services/flutter",
    },
    {
      id: "9",
      Name: "IOT Integration",
      Content:
        "In today's rapidly evolving technological landscape, the Internet of Things (IoT) stands as a revolutionary force.",
      img: iot,
      path: "/services/iotintegration",
    },
    {
      id: "10",
      Name: "Microsoft Azure Cloud Transformation and Computing",
      Content:
        "At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge.",
      img: cloud,
      path: "/services/mscloud",
    },
  ];
  return (
    <>
      <div className="Banner_Wrapper">
        <div className="Banner_Inner_Wrapper active2">
          <div className="image_Wrapper">
            <div className="Banner_content active">
              <div className="Header">SERVICES</div>
              <p>
                At 5Y Technologies, we specialize in providing comprehensive
                mobile app testing services tailored to streamline the seamless
                launch of your mobile applications. From the initial
                conceptualization stage to the finalization of your project, we
                remain committed to offering unwavering support at every
                juncture. At 5Y Tenchnologies, we possess the expertise and
                resources to elevate your application above the ordinary
                throughout its entire lifecycle. Crucially, we bring your vision
                to life authentically, striving to make it the absolute best
                version possible.
              </p>
            </div>
            <div className={`Banner_img`}>
              <div className="right_side_Image" id="Imgs"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Wrapper">
        <div className="Service_Inner_Wrapper">
          <div className="Services_Content">
            <h1 className="Header">Services</h1>
            <div className="row Services_home">
              {Servicesc.map((ele) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-12"
                    key={ele.id}
                    onClick={(e) => {
                      window.location.href = ele.path;
                    }}
                  >
                    <div className="card">
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
            {/* <button className='Explore_button'>Explore More</button> */}
          </div>
        </div>
        <div>
          <TechStacks></TechStacks>
        </div>
        <div>
          <Contact_Banner></Contact_Banner>
        </div>
      </div>
    </>
  );
}
