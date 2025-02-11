import React from "react";
import footer from "../../assets/images/Footer.svg";

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
            <div className="flex   mt-3   gap-3">
            <i className="fas fa-globe w-6 h-6 cursor-pointer text-[#5BA89C]"></i>
      <i className="fab fa-instagram w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
      <i className="fab fa-linkedin w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
      <i className="fab fa-facebook w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
      <i className="fab fa-youtube w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
      <i className="fab fa-twitter w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
      <i className="fab fa-x-twitter w-6 h-6 cursor-pointer  text-[#5BA89C]"></i>
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
