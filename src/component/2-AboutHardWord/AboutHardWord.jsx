import React from 'react'
import Slider from "react-slick";
import microsoft from "../../assets/images/microsoft 1.svg"
import lenovo from "../../assets/images/lenovo 1.svg"
import kaspersky from "../../assets/images/kaspersky 1.svg"
import cisco from "../../assets/images/cisco 1.svg"
import peplink from "../../assets/images/peplink 1.svg"
import dell from "../../assets/images/dell 1.svg"
import { useTranslation } from "react-i18next";
export default function AboutHardWord() {
  
 
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
  const settings = {
    dots: false,
    infinite: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 4000, 
    cssEase: "linear", 
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
  };
  
  return (
 <>
 <div className="overflow-hidden">
  <hr  className='my-5 lg:mt-0'/>
  <div className="flex flex-col md:m-auto md:justify-center lg:flex-row justify-center text-center colorText shadow-lg ">
    {/* العنوان العلوي */}
    <div className={`not-italic mt-5  font-bold leading-normal lg:w-6/12 colorText md:w-1/2  text-nowrap  text-[#333] dark:text-white mx-auto ${isArabic ?" lg:mt-10 md:mt-1 md:px-5 sm:px-2 font-cairo" :" tracking-[5.76px]"}`}>

    <p className={`text-center text-3xl font-bold ${isArabic?"font-cairo":""}`}>
  {t("HeroSoftWareMainTitle").split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</p>
      {/* Our Leading Brands <br /> Partnerships */}
    </div>

    <div className="max-w-5xl lg:w-6/12 justify-center  py-2 mx-auto">
      <Slider {...settings} className="flex  items-center w-full">
        <div className="flex justify-center">
          <img src={microsoft} alt="Slider1" className="h-20 w-40  md:my-6" />
        </div>
        <div className="flex justify-center">
          <img src={lenovo} alt="Slider2" className="h-20 w-40  md:my-6" />
        </div>
        <div className="flex justify-center">
          <img src={kaspersky} alt="Slider3" className="h-20 w-40  md:my-6" />
        </div>
        <div className="flex justify-center">
          <img src={cisco} alt="Slider4" className="h-20 w-40  md:my-6" />
        </div>
        <div className="flex justify-center">
          <img src={peplink} alt="Slider5" className="h-20 w-40  md:my-6" />
        </div>
        <div className="flex justify-center">
          <img src={dell} alt="Slider6" className="h-20 w-40  md:my-6" />
        </div>
      </Slider>
    </div>
  </div>
  <hr />
</div>

 </>
  )
}
