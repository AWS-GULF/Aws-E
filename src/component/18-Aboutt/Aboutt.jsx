import React from 'react';
import { useEffect, useState } from "react";
import QualityAssurance1 from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/sr-gray.svg";
import team from "../../assets/images/Work1.svg";
import pers1 from "../../assets/images/Workout2svg.svg";
import pers2 from "../../assets/images/WorkOut3.svg";
import pers3 from "../../assets/images/WorkOut4.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import ExploreOurServices1 from "../../assets/images/ExploreOurServices1.svg";
import ExploreOurServices2 from "../../assets/images/erer.svg";
import ExploreOurServices3 from "../../assets/images/wwwww.svg";
import ExploreOurService4 from "../../assets/images/qqqq 1.svg";
import ExploreOurService5 from "../../assets/images/ppp.svg";
import ExploreOurServices6 from "../../assets/images/Frame 210.svg";
import ExploreOurServices34 from "../../assets/images/asas 1.png";
import ExploreOurServices10 from "../../assets/images/rog.svg";
import ExploreOurServices13 from "../../assets/images/axis.svg";
import Modell from '../16-Modell/Modell';
import QualityAssurance from "../../assets/images/sr-gray.svg";

export default function Aboutt() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const listItems = [
    "Software Consultant",
    "UI/ UX development",
    "E-commerce Develpment",
    "Mobile Application Development",
    "Real-State Smart Solution",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 sm:px-0">
      <div className="sm:ms-12 sm:me-12">
        <div className="mt-4 sm:mt-16 mb-8 sm:mb-14 flex justify-center items-center text-xl ">
          <img src={QualityAssurance1} alt="QualityAssurance" />
          <p className="ps-2 font-montserrat  text-hover font-bold text-[16px] tracking-[1.6px]  text-base text-[#003540] dark:text-[#B3E5F1]">
            About US
          </p>
        </div>

        <div className="flex justify-center items-center text-center">
          <h2 className="sm:text-5xl text-[20px] font-montserrat  font-bold mb-[80px] text-center sm:tracking-[4.8px] sm:leading-[75px] text-[#003540] dark:text-[#B3E5F1]">
            AMS GULF Illuminating Your Path to the Future
          </h2>
        </div>

        <div className="mb-12">
          <h2 className="text-[#003540]  font-montserrat  text-[16px] sm:text-[28px] font-bold tracking-[.64px] pb-8  dark:text-[#B3E5F1]">
            WHO WE ARE?
          </h2>
          <p className=" dark:text-white  text-aboutCont  text-[14px] text-justify sm:text-[16px] mb-8 sm:mb-0 tracking-[1.4px]  leading-[35px]">
            At AMS GULF, we are more than just a marketing and software agency – we are your trusted lighthouse guiding your business toward a brighter, more innovative future. Established to bridge the gap between cutting-edge technology and impactful marketing strategies, we specialize in delivering tailored solutions that empower businesses to thrive in today’s fast-paced digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-between sm:flex-nowrap sm:gap-4 mb-[100px]">
          <div className="flex-col ps-5 justify-evenly items-end sm:justify-center sm:items-center w-[45%] sm:w-1/3 mb-4">
            <h3 className="sm:px-[80px] text-center  bg-[#295F70] dark:text-white  py-6 bg-primary rounded-[10px] text-[#fff] font-montserrat  text-[16px] sm:text-[20px]  ">
              OUR VISION
            </h3>
            <p className="  mt-[30px] text-aboutCont dark:text-white  font-montserrat  text-[14px]  text-balance sm:text-[16px] tracking-[1.12px]  leading-[16px] sm:leading-[35px]">
              We work closely with our clients from marketing consultancy and strategy development to design, video production, and technology implementation. Whether creating digital projects, social media content, or custom websites and apps, our goal is to exceed expectations. Our integrated approach aligns each project with client objectives, leveraging our expertise in SEO, UX/UI, and innovative technologies, ensuring our team addresses specific needs for successful outcomes.
            </p>
          </div>
          <div className="flex-col ps-5 justify-evenly items-end sm:justify-center sm:items-center w-[45%] sm:w-1/3 mb-4">
            <h3 className="sm:px-[80px] text-center  bg-[#295F70] dark:text-white  py-6 bg-primary rounded-[10px] text-[#fff] font-montserrat  text-[16px] sm:text-[20px]  ">
              OUR MESSAGE
            </h3>
            <p className=" mt-[30px] text-aboutCont dark:text-white  font-montserrat  text-[14px]  text-balance sm:text-[16px] tracking-[1.12px]  leading-[16px] sm:leading-[35px]">
              We provide tailored solutions that align perfectly with your business needs. We are dedicated to sharing our expertise with our clients, and we take pride in collaborating across various industries to develop strategies that deliver impactful results. Our focus is on equipping our clients with the right resources to complement their technology, ensuring their success and growth.
            </p>
          </div>
          <div className="flex-col ps-5 justify-evenly items-end sm:justify-center sm:items-center w-[40%] sm:w-1/3 mt-4 sm:mt-0">
            <p className="sm:px-[80px] text-center  bg-[#295F70] dark:text-white  py-6 bg-primary rounded-[10px] text-[#fff] font-montserrat  text-[16px] sm:text-[20px]  ">
              OUR MISSION
            </p>
            <p className=" mt-[30px] text-aboutCont  dark:text-white  font-montserrat  text-[14px]  text-balance sm:text-[16px] tracking-[1.12px]  leading-[16px] sm:leading-[35px]">
              With a strong foundation in understanding how businesses grow online through various platforms such as websites, social media, mobile applications, and more, we offer a marketing methodology that brings an interactive communication experience across different channels. By staying at the forefront of technological advancements, especially in AI, we ensure a cutting-edge approach that maximizes return on investment for our business clients.
            </p>
          </div>
        </div>

        <div className="flex mb-[100px] gap-2">
          <div className="sm:w-[80%] w-[70%] flex-col justify-start sm:items-start items-center">
            <p className="text-aboutCont s text-[18px] dark:text-white  sm:text-[32px] sm:tracking-[6.4px] font-bold leading-[24px] sm:leading-[60px] pb-[30px]">
              A suite of services designed to help businesses thrive in the digital future with AMS GULF.
            </p>
            <div className="inline-block">
              <Modell />
            </div>
     
          </div>

          <div className="sm:w-1/2 w-[55%]  items-start">
            <ul className="flex-col items-start justify-start dark:text-white  space-y-2 sm:space-y-4">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={hoveredIndex === index ? QualityAssurance1 : QualityAssurance2}
                    alt="QualityAssurance"
                  />
                  <p
                    className={`font-bold text-[10px] sm:text-[20px] font-montserrat  sm:ps-4 ${
                      hoveredIndex === index ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:flex-row sm:flex flex-col sm:gap-4 sm:mb-[60px]">
          <div className="sm:w-1/2 w-full mb-4">
            <p className="text-aboutCont  dark:text-white    text-[19px] sm:text-[18px] tracking-[1.4px] leading-[16px] sm:leading-[35px]">
              <span className="text-primary  dark:text-[#B3E5F1] font-bold   text-[16px] sm:text-[26px] tracking-[1.68px] leading-[16px] sm:leading-[35px]">
                Our team
              </span>{" "}
              of passionate experts combines creativity, technical expertise, and a deep understanding of market dynamics to craft experiences that resonate with your audience and drive measurable results. Whether it’s developing bespoke software, designing user-centric interfaces, or executing data-driven marketing campaigns, we are dedicated to turning your vision into reality. With AMS GULF, you don’t just stay ahead of the curve – you set the pace for the future.
            </p>
          </div>
          <div className="sm:w-1/2 w-full mb-5 sm:mb-0 ">
            <img src={team} alt="team-image" className="w-full h-full" />
          </div>
        </div>

        <p className="font-montserrat  text-[28px] font-bold tracking-[.64px] dark:text-[#B3E5F1]  mb-8">
          Meet the Visionaries Behind AMS GULF
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-[100px] rounded-xl">
          <div className="card bg-base-100 w-full p-4 border border-[#E0E0E0] flex flex-col rounded-lg">
            <figure className="rounded-[10px] w-full">
              <img src={pers1} alt="person" className="rounded-[10px] w-full h-full object-cover" />
            </figure>
            <div className="text-center mt-4">
              <h2 className="dark:text-white  font-montserrat   font-[600] tracking-[1.6]">Mostafa Karam</h2>
              <p className='dark:text-white '>CMO</p>
            </div>
          </div>

          <div className="card bg-base-100 w-full p-4 border border-[#E0E0E0] flex flex-col rounded-xl">
            <figure className="rounded-[10px] w-full">
              <img src={pers2} alt="person" className="rounded-[10px] w-full h-full object-cover" />
            </figure>
            <div className="text-center mt-4">
              <h2 className="tdark:text-white dark:text-white  font-montserrat  font-[600] tracking-[1.6]">Mahmoud Mohamed</h2>
              <p className='dark:text-white '>CTO</p>
            </div>
          </div>

          <div className="card bg-base-100 w-full p-4 border border-[#E0E0E0] flex flex-col rounded-xl">
            <figure className="rounded-[10px] w-full">
              <img src={pers3} alt="person" className="rounded-[10px] w-full h-full object-cover" />
            </figure>
            <div className="text-center mt-4">
              <h2 className="tdark:text-white dark:text-white  font-montserrat  font-[600] tracking-[1.6]">Ahmed Mohamed</h2>
              <p className='dark:text-white '>CEO</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <h3 className="font-montserrat  dark:text-[#B3E5F1]  text-[16px] sm:text-[32px] font-bold tracking-[5.12px]">
            Our Leading Brands Partnerships
          </h3>
        </div>

        <div className="flex my-9 m-auto flex-col mt-[60px]">
  {[ 
    [ExploreOurServices1, ExploreOurServices2, QualityAssurance5, ExploreOurServices13, ExploreOurServices3],
    [ExploreOurService4, ExploreOurService5, ExploreOurServices6, ExploreOurServices10, ExploreOurServices34]
  ].map((row, index) => (
    <div key={index} className="grid grid-cols-3 sm:grid-cols-5 gap-4  justify-between items-center overflow-auto scrollbar mt-8">
      {row.map((image, imgIndex) => (
        <img key={imgIndex} src={image} className="h-[50px] sm:h-[70px] w-[120px] sm:w-[190px]" alt="" />
      ))}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}