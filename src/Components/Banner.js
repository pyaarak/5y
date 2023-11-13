import React, { useEffect, useState } from 'react'
import '../Stylesheets/Banner.scss'
import bg from '../Assets/bg.png'
import bg1 from '../Assets/bg2.png'
import bg2 from '../Assets/iot1.png'
import bg3 from '../Assets/re.png'
import Navbar from './Navbar'
import $ from 'jquery'
import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TweenLite } from "gsap";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import liteimg from '../Assets/banner-one-shape-1.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Banner_2 from '../Assets/banner-one-shape-2.png';

export default function Banner() {
  const [activestate, setactivestate] = useState(1);
  useEffect(()=>{
     const div=document.getElementsByClassName("particlehead")
     console.log(div[0])
     const img=document.getElementsByClassName("Banner_img")
     if(img[0]){
       img[0].appendChild(div[0])
     }
  },[])
  return (
    <div className='Banner_Wrapper'>
         <div className='Banner_Inner_Wrapper'>
            <div className='image_Wrapper'>
                <div className='Banner_content'>
                    {activestate == 2 &&
                        <h2 className='header'>Navigating the Digital Frontier, We Craft Your Digital Destiny: <span>Where Innovation Meets Imagination.</span></h2>
                    }
                    {activestate == 1 &&
                          <h2 className='header'>Your digital journey begins here, where pixels meet purpose and code turns dreams into reality.</h2>
                    }
                    {activestate == 3 &&
                          <h2 className='header'>In a world of infinite possibilities, we're the bridge between your vision and your online reality.</h2>
                    }
                    <p>We specialize in providing tailor-made solutions that cater to your unique business needs. Whether you are a small startup or a large enterprise, we are here to help you leverage the potential of software to stay ahead in today's competitive landscape.</p>
                </div>
                <div className={`Banner_img`} style={{overflowY:"hidden"}}>
                    <div className='back'></div>
                    <img src={liteimg} className='img_auto'></img>
                    <div className='round_rotate'>
                    </div>
                    <img src={Banner_2} className='round_rotate1'></img>
                      <div className='play_icon'><PlayArrowIcon></PlayArrowIcon></div>
                </div>
            </div>
            <div className='Submenu'><span className={`${activestate == 1 && "active"}`} onClick={e=>{setactivestate(1)}}>Software Development</span><span className={`${activestate == 2 && "active"}`} onClick={e=>{setactivestate(2)}}>IOT Integration</span><span className={`${activestate == 3 && "active"}`} onClick={e=>{setactivestate(3)}}>Research and Development</span></div>
         </div>
    </div>
  )
}
