import React from "react";
import Logo from "../../assets/images/OFffF.svg";
import  "../1-HeroHardWard/Hero.css" 
import { useNavigate } from "react-router-dom";



import Modell from "../16-Modell/Modell";



export default function HeroHardWard() {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/layout");
  };
  return (

    <div className="container mx-auto px-4 sm:px-12 flex flex-col md:flex-row md:justify-between md:items-center">
    <div className="md:w-1/2 w-full text-center md:text-left">
      <div className="mb-10 md:mb-16">
        <h1 className="bg-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest font-mons mb-6 dark:text-white">
          Your Lighthouse <br className="hidden md:block" /> To Future
        </h1>
        <p className="colorP bg-p font-mons text-base sm:text-lg md:text-xl text-secondary tracking-[1.7px] font-light leading-relaxed dark:text-white">
          Marketing consultancy, UX UI web design,{" "}
          <br className="hidden md:block" /> mobile apps & software coding,
          sponsored ads, <br className="hidden md:block" /> content creation,
          graphic design, AI & video <br /> production.
        </p>
      </div>
  
      <div className="flex gap-3 sm:gap-5 justify-center md:justify-start items-center">
        <button className="backGroundButton py-1 px-4 sm:px-6 font-bold rounded-2xl transition dark:text-white">
          <Modell />
        </button>
  
        <button
          onClick={handleClick}
          className="px-8  py-6  rounded-2xl bg-text font-bold backgroundbutton2 dark:text-white"
        >
          Marketing Services
        </button>
      </div>
  
      <ul className="mt-6 sm:mt-8 flex justify-center md:justify-start items-center gap-3 sm:gap-7 bg-text mb-12 md:mb-[72px] text-lg sm:text-2xl">
        <i className="fa-brands fa-behance bg-icon transition icon-button"></i>
        <i className="fa-brands fa-instagram bg-icon transition icon-button"></i>
        <i className="fa-brands fa-linkedin bg-icon transition icon-button"></i>
        <i className="fa-brands fa-youtube bg-icon transition icon-button"></i>
        <i className="fa-brands fa-snapchat bg-icon transition icon-button"></i>
        <i className="fa-brands fa-x-twitter bg-icon transition icon-button"></i>
      </ul>
    </div>
  
    <div className="w-full md:w-[50%] mb-28    flex justify-center lg:mr-20 lg:mt-10">
      <img
        src={Logo}
        alt="Marketing Strategy Illustration"
        className="max-w-full h-auto w-[250px] ml-9 sm:w-[300px] md:w-[346px] object-contain"
      />
    </div>
  </div>
  
     
        
  );
}

{/* <section className="relative px-4 md:px-8 lg:px-16">
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
    
    <div className="w-full md:w-[50%] mt-16 lg:ml-6 flex flex-col items-center md:items-start">
      <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#19738C] dark:text-white">
        <span className="block py-[6px]">Drive Results with</span>
        <span className="block py-[6px]">Data-Driven</span>
        <span className="block py-[6px]">Marketing</span>
      </h1>

      <p className="md:text-lg lg:text-[20px] text-xl font-light leading-6 md:leading-[30px] text-gray-700 dark:text-white max-w-lg mt-6">
        Comprehensive Marketing Consultancy, UX/UI Web <br />
        Design, Mobile Apps & Software Development, <br />
        Sponsored Ads, Content Creation, Graphic Design, AI Solutions & Video Production.
      </p>

    
      <div className="flex flex-nowrap gap-5 mt-8">
        <button className="bg-[#5BA89C] rounded-3xl py-6 px-8 text-white font-bold hover:bg-[#6cbdb1] transition-all">
          Contact Us Now
        </button>
        <button className="bg-white text-[#5BA89C] border border-[#5BA89C] rounded-3xl py-6 px-8 font-bold hover:bg-gray-100 transition">
          Software Solutions
        </button>
      </div>


      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-[#5BA89C]">
        <a href="#" className="text-2xl transition"><i className="fab fa-behance"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-youtube"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-2xl transition"><i className="fab fa-x-twitter"></i></a>
      </div>
    </div>

    
    <div className="w-full md:w-[50%] lg:mr-20 lg:mt-10 flex justify-center">
      <img
        src={GHeager}
        alt="Marketing Strategy Illustration"
        className="max-w-full h-auto w-[664px] md:h-[500px] object-contain"
      />
    </div>

  </div>
</section> */}