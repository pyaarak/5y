import React from 'react'
import '../Stylesheets/Technologies.scss'
import react_logo from '../Assets/Tech_Stacks/React_logo.png';
import js_logo from '../Assets/Tech_Stacks/JavaScript-logo.png';
import Python_logo from '../Assets/Tech_Stacks/python_logo.png';
import java_logo from '../Assets/Tech_Stacks/java.png';
import Mysql_logo from '../Assets/Tech_Stacks/Mysql_logo.png';
import Nodejs_logo from '../Assets/Tech_Stacks/nodejs_logo.png';
import drone_bg from '../Assets/drone_bg.png';
// import Full_Stack from '../Assets/Technologies/Full_Stack.jpg'
// import Cloud_Comp from '../Assets/Technologies/Cloud_Com.jpg'
// import AutoTesting from '../Assets/Technologies/AutoTesting1.jpg'
// import UIUX from '../Assets/Technologies/UIUX.jpg'

export default function Technologies() {
  const Technologies=[
    {
        id:"1",
        Name:"React JS",
        // Content:"In the ever-evolving digital landscape, having a powerful online presence is a fundamental aspect of success for businesses across the globe. To harness the full potential of the internet, you need more than just a website; you need a web application that's dynamic, responsive, and tailored to your unique needs.",
        img:react_logo
    },
    {
        id:"2",
        Name:"Java Script",
        // Content:"In the fiercely competitive realm of software testing, what distinguishes a company as the best in the field often hinges on a combination of factors that encapsulate expertise, methodology, innovation, and a relentless commitment to quality.",
        img:js_logo,
    },
    {
        id:"3",
        Name:"Python",
        // Content:"At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing. Azure's flexibility allows businesses to scale resources up or down based on demand, ensuring that IT resources are used efficiently.",
        img:Python_logo
    },
    {
        id:"4",
        Name:"Mysql",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img:Mysql_logo
    },
    {
        id:"5",
        Name:"Java",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img:java_logo
    },
    {
        id:"6",
        Name:"Node js",
        // Content:"We put users at the heart of our design process. Our designs are based on a deep understanding of your target audience and their needs.  We continuously monitor and optimize our designs to align with changing user expectations and technology advancements.",
        img:Nodejs_logo
    }
  ] 
  return (
    <div className='Technologies_Wrapper'>
        <div className='Technologies_Inner_Wrapper'>
            <div className='Technologies_Content'>
                <h1 className='Header'>Tech Stacks</h1>
                <div className='row'>
                    <div className='col-md-5 div_img'>
                    <img src={drone_bg} className='drone_img'></img>
                    <div className='div_content'>We offers a full-cycle development services that meet business</div>

                    </div>
                    <div className='col-md-7'>
                <div className='row Technologies_home'>
                    {Technologies.map((ele, index)=>{
                       if(index <= 2){
                        return(
                            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12' key={ele.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={ele.img} width={"100%"} height={"100%"}/>
                                    </div>
                                    <div className='card-footer'>
                                        {/* <h4>{ele.Name}</h4> */}
                                        <p className='name_content'>{ele.Name}</p>
                                        {/* <p>{ele.Content}</p> */}
                                    </div>
                                </div>
                            </div>
                           )
                       }
                       else if(index <= 4){
                        return(
                            <div className='col-lg-6 col-md-6 col-sm-4 col-xs-6 col-12' key={ele.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={ele.img} width={"100%"} height={"100%"}/>
                                    </div>
                                    <div className='card-footer'>
                                        {/* <h4>{ele.Name}</h4> */}
                                        <p className='name_content'>{ele.Name}</p>
                                        {/* <p>{ele.Content}</p> */}
                                    </div>
                                </div>
                            </div>
                           )
                       }
                       else{
                        return(
                            <div className='col-lg-12 col-md-12 col-sm-4 col-xs-6 col-12' key={ele.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img src={ele.img} width={"100%"} height={"100%"}/>
                                    </div>
                                    <div className='card-footer'>
                                        {/* <h4>{ele.Name}</h4> */}
                                        <p className='name_content'>{ele.Name}</p>
                                        {/* <p>{ele.Content}</p> */}
                                    </div>
                                </div>
                            </div>
                           )
                       }
                    })
                    }
                </div>
                    </div>
                </div>
                <button className='Explore_button' onClick={e=>{window.location.href="/services"}}>Load More</button>
            </div>
        </div>
    </div>
  )
}
