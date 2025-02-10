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
    <div>
      <section className="lg:mt-[100px] md:mt-6 relative px-6 md:px-12 lg:px-20">
  {/* العنوان الرئيسي */}
  <h2 className="font-montserrat font-bold text-[36px] md:text-[42px] lg:text-[48px] leading-[50px] md:leading-[60px] lg:leading-[75px] text-center dark:text-white">
    Expressive and enduring digital experiences.
  </h2>

  {/* الفقرة التوضيحية */}
  <p className="font-normal text-center text-lg md:text-xl leading-[30px] md:leading-[34px] py-6 dark:text-white max-w-4xl mx-auto">
    We help our clients accelerate progress, shape outcomes, and envision the future. 
    Through collaboration with companies across industries, we build scalable brand 
    systems and products that leverage emerging behaviors and technologies, and ultimately 
    unlock potential. Learn more about what we can do for you.
  </p>

  {/* القسم الرئيسي */}
  <div className="lg:flex lg:justify-between items-center gap-10">
    {/* النصوص */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="font-montserrat font-semibold text-[28px] md:text-[32px] leading-[36px] dark:text-white">
        Branding & Design
      </h2>
      <p className="font-montserrat text-[#888787] font-normal text-lg md:text-xl leading-[32px] py-6 dark:text-white max-w-3xl mx-auto lg:mx-0">
        We help our clients accelerate progress, shape outcomes, and envision the future. 
        Through collaboration with companies across industries, we build scalable brand 
        systems and products that leverage emerging behaviors and technologies, and ultimately 
        unlock potential. Learn more about what we can do for you.
      </p>

      <button className="bg-button rounded-3xl py-4 px-6 font-bold text-white dark:bg-white dark:text-teal-600 mx-auto lg:mx-0">
        Contact Us Now
      </button>
    </div>

          {/* السلايدر */}
          <div className="w-full lg:w-1/2 px-6">
            <Slider {...settings}>
              <img src={Frame1} alt="Frame1" className="w-full h-[400px]" />
              <img src={Frame2} alt="Frame2" className="w-full h-[400px]" />
              <img src={Frame3} alt="Frame3" className="w-full h-[400px]" />
              <img src={Frame4} alt="Frame4" className="w-full h-[400px]" />
              <img src={Frame5} alt="Frame5" className="w-full h-[400px]" />
              <img src={Frame6} alt="Frame6" className="w-full h-[400px]" />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
