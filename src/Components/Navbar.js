import React, { useEffect, useState } from "react";
import "../Stylesheets/Navbar.scss";
import Logo from "../Assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [Active, setActive] = useState(false);
  const [MobileActive, setMobile] = useState(false);
  const [Mobileshow, setMobileshow] = useState(false);
  const handleChange = (e) => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
    if (window.innerWidth < 992) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(()=>{
    handleChange()
  },[])
  window.addEventListener("scroll", handleChange);
  window.addEventListener("resize", handleChange);
  return (
    <div className={`Nav_Wrapper`}>
      <div className={`Nav_Inner_Wrapper ${Active && "active"}`}>
        <div className="Logo_img">
          <img src={Logo} width={200} onClick={e=>{window.location.href="/"}}></img>
        </div>
        {!MobileActive && (
          <div className="Menu">
            <span onClick={e=>{window.location.href="/aboutus"}}>About us</span>
            <span onClick={e=>{window.location.href="/services"}}>Services</span>
            <span>Case Study</span>
            <span onClick={e=>{window.location.href="/contactus"}}>Contact</span>
            <span onClick={e=>{window.location.href="/contactus/careers"}}>Careers</span>
          </div>
        )}
        {MobileActive && !Mobileshow && <div className="Menu" onClick={e=>{setMobileshow(true)}}><MenuIcon></MenuIcon></div>}
         {MobileActive && Mobileshow && (
          <div className="MobileActive" onClick={e=>{setMobileshow(false)}}>
            <div className="Menu active">
            <p onClick={e=>{setMobileshow(false)}}><CloseIcon></CloseIcon></p>
            <p onClick={e=>{window.location.href="/aboutus";e.stopPropagation()}}>About us</p>
            <p onClick={e=>{window.location.href="/services";e.stopPropagation()}}>Services</p>
            <p>Case Study</p>
            <p onClick={e=>{window.location.href="/contactus";e.stopPropagation()}}>Contact</p>
            <p onClick={e=>{window.location.href="/contactus/careers";e.stopPropagation()}}>Careers</p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
