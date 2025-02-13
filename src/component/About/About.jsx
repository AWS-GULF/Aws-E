import React from "react";
import Slider from "react-slick";
import Frame1 from "../../assets/images/Frame1.svg";
import Frame2 from "../../assets/images/Frame 2.svg";
import Frame3 from "../../assets/images/Frame 3.svg";
import Frame4 from "../../assets/images/Frame 4.svg";
import Frame5 from "../../assets/images/Frame 5.svg";
import Frame6 from "../../assets/images/Frame 6.svg";

export default function About() {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: "0",
  };

  return (
    <section className="lg:mt-[100px] md:m-7  relative px-6  md:px-12 lg:px-20">
    
    <h2 className="font-montserrat text-[#19738C] font-bold text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[60px] text-center max-w-6xl mx-auto dark:text-white">
      Expressive and enduring digital experiences.
    </h2>

   
    <p className=" font-montserrat  text-[#333]  md:text-xl leading-[28px] md:leading-[32px] lg:leading-[36px] py-6 dark:text-white x-auto">
      We help our clients accelerate progress, shape outcomes, and envision the future. 
      Through collaboration with companies across industries, we build scalable brand 
      systems and products that leverage emerging behaviors and technologies, and ultimately 
      unlock potential. Learn more about what we can do for you.
    </p>

   
    <div className="flex flex-col lg:flex-row items-center gap-10 mt-10 max-w-6xl mx-auto">
   
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] dark:text-white">
          Branding & Design
        </h2>
        <p className="font-montserrat text-[#333] font-normal text-lg md:text-xl leading-[28px] md:leading-[32px] py-6 dark:text-white">
          We help our clients accelerate progress, shape outcomes, and envision the future. 
          Through collaboration with companies across industries, we build scalable brand 
          systems and products that leverage emerging behaviors and technologies, and ultimately 
          unlock potential. Learn more about what we can do for you.
        </p>

        <button className="bg-[#5BA89C] rounded-3xl py-6 px-8 font-bold text-white dark:bg-white dark:text-teal-600">
          Contact Us Now
        </button>
      </div>

      <div className="w-full lg:w-1/2 ">
        <div className="w-[90%] md:w-[80%] lg:w-[100%] max-w-lg">
          <Slider {...settings}>
            <img src={Frame1} alt="Frame1" className="w-full h-auto rounded-xl shadow-md" />
            <img src={Frame2} alt="Frame2" className="w-full h-auto rounded-xl shadow-md" />
            <img src={Frame3} alt="Frame3" className="w-full h-auto rounded-xl shadow-md" />
            <img src={Frame4} alt="Frame4" className="w-full h-auto rounded-xl shadow-md" />
            <img src={Frame5} alt="Frame5" className="w-full h-auto rounded-xl shadow-md" />
            <img src={Frame6} alt="Frame6" className="w-full h-auto rounded-xl shadow-md" />
          </Slider>
        </div>
      </div>
    </div>
  </section>
  );
}