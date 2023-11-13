import React from "react";
import "../Stylesheets/Msc.scss";
import Contact_Banner from "./Contact_Banner";
// import FullImg from "../Assets/Mscdev.jpg";

export default function Msc() {
  const Techstacks = [
    {
      id: "1",
      Name: "Strategic Planning",
      Content:
        "We work closely with your organization to develop a comprehensive Azure cloud strategy tailored to your unique business requirements.",
    },
    {
      id: "2",
      Name: "Migration and Deployment",
      Content:
        "We specialize in migrating existing applications, data, and infrastructure to Azure with minimal disruption.",
    },
    {
      id: "3",
      Name: "Infrastructure Management",
      Content:
        "Our team ensures the efficient and secure management of your Azure resources, optimizing performance and cost-effectiveness.",
    },
    {
      id: "4",
      Name: "Data and Analytics",
      Content:
        "We help businesses harness the power of Azure for data analytics and machine learning to gain valuable insights.",
    },
    {
      id: "5",
      Name: "Security and Compliance",
      Content:
        "We implement robust security measures and ensure adherence to industry and regulatory compliance standards.",
    },
    {
      id: "6",
      Name: "Continuous Support",
      Content:
        "Our commitment doesn't end with deployment. We provide ongoing support and optimization to ensure Azure resources are maximally leveraged.",
    }
  ];
  return (
    <div className="Msc_Developer">
      <div className="Msc_Inner_Developer">
        <div className="Full_Cotnent">
          {/* <img src={FullImg} width={"100%"}></img> */}
          {/* <div className='Main_image'></div> */}
          <div className="Content1">
            <h4>Microsoft Azure Cloud Transformation and Computing</h4>
            At 5Y Technologies, our team of Azure-certified experts possesses a wealth of experience and knowledge in all aspects of Microsoft Azure cloud transformation and computing.
          </div>
        </div>
      </div>
      <div className="row FullSatck_Content">
        <div className="Content2">
          <h4>Why Choose Our Microsoft Azure Cloud Transformation and Computing Services:</h4>
          <p>
            Discover the reasons why partnering with 5Y Technologies for
            Microsoft Azure Cloud Transformation and Computing is a strategic move:
          </p>
        </div>
        {Techstacks.map((ele) => {
          return (
            <div className="col-xl-4 col-md-6 whatwe">
              <div className="Content">
                <b>{ele.Name}</b>
                <p>{ele.Content}</p>
              </div>
              {/* <img src={bg_img} width={"100%"}></img> */}
            </div>
          );
        })}
      </div>
      <Contact_Banner></Contact_Banner>
    </div>
  );
}
