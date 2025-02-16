import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/2222.svg";
import Logo1 from "../../assets/images/22222.svg";
import "../1-HeroHardWard/Hero.css";
import { Link, useNavigate } from "react-router-dom";
import Modell from "../16-Modell/Modell";

export default function HeroHardWard() {
  const navigate = useNavigate();
  const [currentLogo, setCurrentLogo] = useState(Logo);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentLogo(isDark ? Logo1 : Logo);
    };

    
    checkDarkMode();

    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    navigate("/markting");
  };

  return (
    <div className="container mx-auto px-4 sm:px-12 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <div className=" md:mb-16">
          <h1 className="bg-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest font-mons mb-6 dark:text-white">
            Your Lighthouse <br className="hidden md:block" /> To Future
          </h1>
          <p className="colorP bg-p font-mons text-base font-montserrat sm:text-lg md:text-xl text-secondary tracking-[1.7px] font-light leading-relaxed dark:text-white">
            Marketing consultancy, UX UI web design,{" "}
            <br className="hidden md:block" /> mobile apps & software coding,
            sponsored ads, <br className="hidden md:block" /> content creation,
            graphic design, AI & video <br /> production.
          </p>
        </div>

        <div className="flex gap-3 sm:gap-5 justify-center md:justify-start  items-center">
          <button className=" backGroundButton py-1 px-1 sm:px-6 font-bold rounded-2xl transition  dark:text-[#333]   dark:bg-[#B3E5F1]">
            <Modell />
          </button>

          <button
            onClick={handleClick}
            className="px-6 py-6  sm:py-7 sm:px-9 rounded-2xl bg-text font-bold backgroundbutton2 dark:text-white dark:hover:text-black"
          >
            Marketing Services
          </button>
        </div>

        <ul className="mt-6 sm:mt-8 flex justify-center md:justify-start items-center gap-7 sm:gap-9 bg-text mb-12 md:mb-[72px]">
  <Link to="https://www.facebook.com/profile.php?id=61569400731269 "><i  className="fa-brands fa-facebook bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.instagram.com/awsgulf/ "> <i className="fa-brands fa-instagram bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.linkedin.com/company/aws-gulf/?viewAsMember=true"> <i className="fa-brands fa-linkedin bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.tiktok.com/@awsgulf?lang=en "> <i className="fa-brands fa-tiktok bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  {/* <Link to=""> <i className="fa-brands fa-snapchat bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link> */}
  <Link to="https://x.com/AwsGulf">  <i className="fa-brands fa-x-twitter bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
</ul>

      </div>

      <div className="  md:w-[50%]   mb-3 lg:mb-32  flex justify-center md:mb-52 md:ml-24  lg:mr-20 lg:mt-10">
        <img
          src={currentLogo}
          alt="Marketing Strategy Illustration"
          className="w-[250px] sm:w-[300px] md:w-[346px] h-auto object-contain  "
        />
      </div>
    </div>
  );
}
