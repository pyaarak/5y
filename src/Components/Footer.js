import React from 'react'
import Logo from '../Assets/Logo.png'
import '../Stylesheets/Footer.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='Footer_Wrapper'>
        <div className='Footer_Inner_Wrapper'>
            <div className='row'>
                <div className='col-md-4 Footer_Address'>
                    <img src={Logo}></img>
                    <p>Your digital journey begins here, where pixels meet purpose and code turns dreams into reality.</p>
                    <p><LocalPhoneIcon></LocalPhoneIcon>+91 123456770</p>
                    <p><EmailIcon></EmailIcon>example@gmail.com</p>
                </div>
                <div className='col-md-4 Footer_Address card2'>
                    <p className='Header'>Our Navigation</p>
                    <p><a onClick={e=>{window.location.href="/aboutus"}}>About us</a></p>
                    <p><a onClick={e=>{window.location.href="/services"}}>Services</a></p>
                    <p><a onClick={e=>{window.location.href="/contactus/careers"}}>Careers</a></p>
                    <p><a>Case Study</a></p>
                </div>
                <div className='col-md-4 Footer_Address card2'>
                    <p className='Header'>Social Media</p>
                    <p><a><FacebookIcon></FacebookIcon></a></p>
                    <p><a><InstagramIcon></InstagramIcon></a></p>
                    <p><a><LinkedInIcon></LinkedInIcon></a></p>
                    {/* <p><a>Case Study</a></p> */}
                </div>
            </div>
            <p className='Footer_Policy'>
                <p>Copyright © 2023 5Y Technologies All Rights Reserved</p>
            </p>
        </div>
    </div>
  )
}
