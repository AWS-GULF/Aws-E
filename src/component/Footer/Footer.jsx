import React from "react";
import footer from "../../assets/images/Groupp.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
    <div className="lg:flex lg:justify-evenly  lg:items-start lg:pt-16   Footer border-t ">
        <footer className="footer flex-col justify-center items-center w-[100%] flex text-base-content  lg:flex-row lg:justify-between lg:items-start  lg:ps-12 lg:pe-12  ">
        <div className="w-full lg:w-[40%] mt-5 ">
            <aside className="w-full flex lg:flex-col  justify-center items-center">
              <div className=" flex-col text-center items-center lg:justify-start  lg:items-start  w-[50%] mt-4   lg:w-36 lg:mt-[-5px]  lg:m-auto ">
                <img src={footer} className="mx-auto w-[48%] sm:w-[150px]  lg:w-full   " />
                <p className="lg:text-6 mx-auto  text-lg font-Arial text-primary font-semibold w-[50%]  lg:w-full dark:text-[#B3E5F1]  ">
               
              
                </p>
              </div>

              <p className="  text-[#19738C] dark:text-[#B3E5F1]  font-montserrat font-bold lg:text-4xl md:3xl lg:ms-[-30px] md:ms-[-40px] lg:tracking-widest text-center lg:ps-12  font-mons lg:mt-4 hidden lg:block">
              Drive Results with Data-Driven Marketing
              </p>
            </aside>
          </div>
          <div className="w-[90%] mt-4 lg:w-[60%] lg:mr-16 lg:flex justify-evenly flex items-start ms-10 lg:items-start ">
            <nav className=" lg:pe-0 mr-9">
              <h6 className=" font-mons text-[16px] lg:text-[24px] font-[500] text-[#19738C] mb-2 dark:text-[#B3E5F1]  ">
                Services
              </h6>
              <ul className="text-[12px] lg:text-[16px] dark:text-white ">
            <Link to=""> <li className="lg:mb-2 ">Services</li></Link> 
            <Link to=""> <li className="lg:mb-2 mt-2">Branding & Design</li></Link>  
            <Link to=""><li className="lg:mb-2 mt-2">Website Solutions</li></Link>  
            <Link to=""> <li className="lg:mb-2 mt-2">ECommerce Solutions</li></Link>  
            <Link to=""><li className="lg:mb-2 mt-2">SEO</li></Link>  
            <Link to=""> <li className="lg:mb-2 mt-2">Digital Advertising</li></Link>  
            <Link to=""> <li className="lg:mb-2 mt-2">Social Media Marketing</li></Link>  
              </ul>
            </nav>
            <nav className="  flex-col justify-start items-start ps-5  lg:ps-16 ">
              <h6 className="font-mons text-[16px] lg:text-[24px] font-[500] text-[#19738C] mb-2 dark:text-[#B3E5F1] ">
                Contact Us
              </h6>
              <ul className="text-[12px] md:text-[12px] lg:text-[16px] dark:text-white">
                <li className="mb-4">
                  {" "}
                  Seville District 6346, Riyadh, Saudi Arabia
                </li>
                <li className="lg:mb-4 mb-2 ">+966 569851545</li>
                <li className="lg:mb-4 mb-2">wessam@awsgulf.com</li>
                <li className="lg:mb-4 mb-2">www.awsgulf.com</li>
                <ul className="mt-3  items-center flex justify-start  lg:flex lg:gap-6  text-base lg:text-2xl dark:text-white">
                <li>
  <Link to="https://www.facebook.com/profile.php?id=61573374172184"> <i className="fab fa-facebook w-6 h-6 cursor-pointer  text-[#19738C]"></i></Link>
  </li>
 
  <li>
  <Link to="https://www.instagram.com/awsgulf.mkt/ "> <i className="fab fa-instagram w-6 h-6 cursor-pointer  text-[#19738C]"></i></Link>
  </li>
  <li>
  <Link to="https://www.linkedin.com/company/aws-gulf-marketing/ "> <i className="fab fa-linkedin w-6 h-6 cursor-pointer  text-[#19738C]"></i></Link>
  </li>
  
 
    <li>
   <Link to="">   <i className="fab fa-tiktok w-6 h-6 cursor-pointer text-[#19738C]"></i></Link>
  </li>
  <li>
  <Link to="https://x.com/AwsGulf_Mkt"> <i className="fab fa-x-twitter w-6 h-6 cursor-pointer  text-[#19738C]"></i></Link>
  </li>
</ul>

              </ul>
            </nav>
          </div>
        </footer>
      </div>
      <p className="ms-[96px] me-[96px] text-center mt-10 mb-3 lg:text-[15px] text-xs   dark:text-white">
        {" "}
        &copy; 2024 AWS Gulf . All rights reserved.
      </p>
    </div>
  );
}

{/* <div className="bg-color shadow-inner">
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
</div> */}