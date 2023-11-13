import React from 'react'
import '../Stylesheets/Service.scss'
import Full_Stack from '../Assets/Services/Full_Stack.jpg'
import Cloud_Comp from '../Assets/Services/Cloud_Com.jpg'
import AutoTesting from '../Assets/Services/AutoTesting1.jpg'
import UIUX from '../Assets/Services/UIUX.jpg'
import MobileTest from '../Assets/Services/Mobiletes.jpg'
import MobileAppdev from '../Assets/Services/Appdev.jpg'
import Flutter from '../Assets/Services/Mobiledev.jpg'
import Webapp from '../Assets/Services/webapp.jpg'
import iot from '../Assets/Services/iot.jpg'
import cloud from '../Assets/contact_us.jpg'
import TechStacks from './TechStacks'
import Contact_Banner from '../Components/Contact_Banner';

export default function Services() {
    const Servicesc=[
        {
            id:"1",
            Name:"Full Stack Development",
            Content:"To harness the full potential of the internet, you need more than just a website.",
            img:Full_Stack,
            path:"/services/fullstack"
        },
        {
            id:"2",
            Name:"Automation Testing",
            Content:"Our team of dedicated professionals is well-versed in the latest trends, tools, and techniques.",
            img:AutoTesting,
            path:"/services/autotesting"
        },
        {
            id:"4",
            Name:"UI & UX Designers",
            Content:"Our designs are visually appealing aesthetics with functionality to create stunning interfaces.",
            img:UIUX,
            path:"/services/uiux"
        },
        {
            id:"5",
            Name:"Mobile App Testing",
            Content:"At 5Y Technologies, we specialize in providing comprehensive mobile app testing.",
            img:MobileTest,
            path:"/services/mobiletesting"
        },
        {
            id:"6",
            Name:"Mobile APP Development",
            Content:"We go beyond merely creating apps that are ready for launch; our focus lies in crafting apps destined for success.",
            img:MobileAppdev,
            path:"/services/MobileAppdevelopment"
        },
        {
            id:"7",
            Name:"Flutter App Development",
            Content:"At 5Y Technologies, we have firmly established ourselves as trailblazers in the field of Flutter app development.",
            img:Flutter,
            path:"/services/flutter"
        },
        {
            id:"9",
            Name:"IOT Integration",
            Content:"In today's rapidly evolving technological landscape, the Internet of Things (IoT) stands as a revolutionary force.",
            img:iot,
            path:"/services/iotintegration"
        },
        {
            id:"10",
            Name:"Microsoft Azure Cloud Transformation and Computing",
            Content:"At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge.",
            img:cloud,
            path:"/services/mscloud"
        }
      ] 
  return (
    <div className='Service_Wrapper'>
       <div className='Service_Inner_Wrapper'>
       <div className='Services_Content'>
                <h1 className='Header'>Services</h1>
                <div className='row Services_home'>
                    {Servicesc.map((ele)=>{
                       return(
                        <div className='col-lg-3 col-md-6 col-12' key={ele.id} onClick={e=>{window.location.href=ele.path}}>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={ele.img} width={"100%"} height={"100%"}/>
                                </div>
                                <div className='card-footer'>
                                    <h4>{ele.Name}</h4>
                                    <p>{ele.Content}</p>
                                </div>
                            </div>
                        </div>
                       )
                    })
                    }
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
  )
}
