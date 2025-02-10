import React from "react";
import footer from "../../assets/images/Footer.svg";
import Symboll from "../../assets/images/Symbol8.svg";
import instg from "../../assets/images/Symbol2.svg";
import Linkedin from "../../assets/images/Symbol3.svg";
import facebook from "../../assets/images/Symbol7.svg";
import youtube from "../../assets/images/Symbol4.svg";
import twitter from "../../assets/images/Symbol5.svg";
import xx from "../../assets/images/Symbol6.svg";
export default function Footer() {
  return (
    <div>
      <div className="bg-color shadow-inner">
        <div className="w-[95%] grid grid-cols-3 gap-4 justify-between items-center mt-[100px] m-auto text-xs md:text-sm lg:text-base">
          <div className="flex justify-center md:justify-start pt-16">
            <img src={footer} alt="footer" className="w-16 md:w-18 lg:w-80" />
          </div>
          <div className="flex flex-col text-center md:text-left lg:ml-28 md:ml-0">
            <h4 className="bg-color md:text-2xl text-2xl dark:text-white">Services</h4>
            <a href="">
              <span className="bg-color-p dark:text-white">Branding & Design</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">Website Solutions</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">eCommerce Solutions</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">SEO</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">Digital Advertising</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">Social Media Marketing</span>
            </a>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h4 className="bg-color text-2xl md:text-2xl dark:text-white">Contact Us</h4>
            <a href="">
              <span className="bg-color-p dark:text-white">
                Seville District 6326, Riyadh Saudi Arabia
              </span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">+966 569851545</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">wessam@awsgulf.com</span>
            </a>
            <a href="">
              <span className="bg-color-p dark:text-white">www.awasgulft.com</span>
            </a>
            <div className="flex  gap-0 mt-3 md:gap-6">
               <img src={Symboll} className=" w-6 h-4  bg-text-button transition  dark:text-white "></img>
                                    <img src={instg} className="  w-6 h-4  md:text-base bg-text-button  dark:text-white "></img >
                                    <img src={Linkedin} className=" w-6 h-4   md:text-base bg-text-button dark:text-white "></img>
                                    <img src={facebook} className="  w-6 h-4  md:text-base bg-text-button dark:text-white "></img>
                                   
                                    <img src={youtube} className="  w-6 h-4   md:text-base bg-text-button dark:text-white "></img >
                                    <img src={twitter} className=" w-6 h-4   md:text-base bg-text-button dark:text-white"></img >
                                    <img src={xx} className=" w-6 h-4   md:text-base bg-text-button dark:text-white "></img >
           
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] bg-color-p text-xs md:text-sm py-1">
        <h3 className="text-center dark:text-white">
          {" "}
          @ 2024 AWS Gulf Media. All rights reserved
        </h3>
      </div>
    </div>
  );
}
