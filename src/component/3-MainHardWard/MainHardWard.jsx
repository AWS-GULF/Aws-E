import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./MainHerd.css";
export default function MainHardWard() {
  const words = [
    "TRUST",
    "COLLABORATION",
    "INNOVATION",
    "RESPECT",
    "COMMITMENT",
    "POSITIVE",
    "DIVERSITY",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="w-full mt-[80px] px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[70%] sm:w-[438px] h-[500px] bg-[#EAF5F6] flex justify-center items-center rounded-lg shadow-lg">
            <Fade key={words[currentIndex]} duration={1000}>
              <span className="font-bold text-4xl sm:text-[64px] text-[#478B9C]">
                {words[currentIndex]}
              </span>
            </Fade>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-[#003540] dark:text-[#B3E5F1] tracking-wide">
            About AWS GULF
          </h2>
          <p className="text-[#333]  dark:text-white mt-8 text-lg font-cairo leading-8 sm:text-base tracking-wide font-light text-justify whitespace-pre-line">
  AWS is a forward-thinking IT system integrator and services provider, 
  established in 2024 with a focus on delivering cutting-edge IT hardware solutions. 
  Recognizing the ever-evolving technological landscape and rapidly changing market needs, 
  the company quickly expanded its portfolio to include software services. 

  This strategic addition was not merely an enhancement but a necessity to address the 
  dynamic requirements of modern businesses. By integrating software services, AWS GULF 
  aims to provide comprehensive solutions that empower its clients to stay ahead in a 
  competitive market. 

  With a commitment to innovation and excellence, AWS GULF is dedicated to making a 
  significant impact by meeting and exceeding customer expectations.
</p>


          {/* القسمين: Creativity & Technology */}
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            {/* قسم Creativity */}
            <div className="w-full md:w-1/2 ">
              <button className=" text-white   font-[Montserrat] text-[20px] font-medium leading-[24px] Style px-[80px] py-[24px] ">Creativity</button>
              <ul className="text-secondary text-[14px] mt-4 space-y-2 text-color-fool  dark:text-white">
                <li>Trendsetting Designs</li>
                <li>Creative Content Creation</li>
                <li>Interactive User Experience</li>
                <li>Strategic Branding & Graphics</li>
                <li>AI-Driven Solutions</li>
              
              </ul>
             
            </div>
    
            {/* قسم Technology */}
            <div className="w-full md:w-1/2">
              <button className="text-white  font-[Montserrat] text-[20px] font-medium leading-[24px] Style px-[80px] py-[24px]  dark:text-white  ">Technology</button>
              <ul className="text-secondary text-[14px] mt-4 space-y-2 text-color-fool  dark:text-white">
                <li>UX UI Design</li>
                <li>Native & Flutter Mobile Apps Coding</li>
                <li>Ecommerce Solutions</li>
                <li>Bespoke Software Development</li>
              </ul>
             
            </div>
            
            
     
          </div>
<p className="mt-8 text-[#003540] underline  text-[20px] dark:text-[#B3E5F1] ">  More About Us </p>
          
        </div>

      </div>
      
    </div>
  );
}
