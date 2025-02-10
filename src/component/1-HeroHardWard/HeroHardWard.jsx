import React from "react";
import Logo from "../../assets/images/logoSoft.svg";
import  "../1-HeroHardWard/Hero.css" 
import { useNavigate } from "react-router-dom";
import Symboll from "../../assets/images/Symboll.svg";
import instg from "../../assets/images/instg.svg";
import Linkedin from "../../assets/images/linke.svg";
import youtube from "../../assets/images/Symbol.svg";
import twitter from "../../assets/images/coda.svg";
import xx from "../../assets/images/x_logo.png";
import Modell from "../16-Modell/Modell";



export default function HeroHardWard() {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/layout");
  };
  return (

    <div className="container mx-auto px-4 sm:px-12 flex flex-col sm:flex-row sm:justify-between sm:items-center ">
      <div className="sm:w-1/2 w-full text-center sm:text-left">
        <div className="mb-10 sm:mb-16">
          <h1 className="bg-text font-bold text-3xl backGroundText sm:text-5xl tracking-widest font-mons mb-6 dark:text-white">
            Your Lighthouse <br className="hidden sm:block" /> To Future
          </h1>
          <p className= " colorP bg-p tracking-wide font-mons text-lg sm:text-xl text-secondary font-light leading-relaxed dark:text-white">
            Marketing consultancy, UX UI web design,{" "}
            <br className="hidden sm:block" /> mobile apps & software coding,
            sponsored ads, <br className="hidden sm:block" /> content creation,
            graphic design, AI & video production.
          </p>
       
        </div>

        <div className="flex gap-5 justify-center sm:justify-start items-center ">
          <button className=" backGroundButton  py-1 px-6  font-bold  rounded-2xl   transition dark:text-white">
          <Modell/>
          </button>
       
          <button onClick={handleClick}  className="px-9 py-6  rounded-2xl bg-text font-bold  backgroundbutton2  dark:text-white  " >
            
          Marketing Services
          </button>
        </div>

        <ul className="mt-8 flex justify-center sm:justify-start items-center gap-4 sm:gap-7 bg-text mb-[72px] text-2xl ">
          <img src={Symboll} className=" w-6 h-6 fa-behance bg-icon transition icon-button  "></img>
          <img src={instg} className="  w-6 h-6 fa-instagram bg-icon  transition icon-button"></img >
          <img src={Linkedin} className="  w-6 h-6 fa-linkedin bg-icon transition icon-button"></img>
         
          <img src={youtube} className="  w-6 h-6 fa-facebook bg-icon transition icon-button"></img >
          <img src={twitter} className=" fa-facebook  w-6 h-6 bg-icon transition icon-button"></img >
          <img src={xx} className=" fa-facebook bg-icon  w-6 h-6 transition icon-button"></img >
      
        </ul>
      </div>
     
      <div className="sm:w-1/2 w-full flex justify-center items-center mt-10 sm:mt-0">
        <img
          src={Logo}
          className="w-[175] h-[165] object-contain"
          alt="ImgHardWard"
        />
         
      </div>
   
    </div>
     
        
  );
}
