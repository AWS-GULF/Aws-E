import React from 'react'
import Slider from "react-slick";
import microsoft from "../../assets/images/microsoft 1.svg"
import lenovo from "../../assets/images/lenovo 1.svg"
import kaspersky from "../../assets/images/kaspersky 1.svg"
import cisco from "../../assets/images/cisco 1.svg"
import peplink from "../../assets/images/peplink 1.svg"
import dell from "../../assets/images/dell 1.svg"

export default function AboutHardWord() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3, // العرض الافتراضي على الشاشات الكبيرة
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // للشاشات من 1024 بيكسل أو أقل
            settings: {
              slidesToShow: 2, // عرض 2 slides على الشاشات المتوسطة
            },
          },
          {
            breakpoint: 600, // للشاشات من 600 بيكسل أو أقل
            settings: {
              slidesToShow: 1, // عرض 1 slide على الشاشات الصغيرة
            },
          },
        ],
      };
    
  return (
 <>
 <div>
  <hr  className='mt-4'/>
  <div className="flex flex-col lg:flex-row justify-between text-center colorText   shadow-lg ">
    {/* العنوان العلوي */}
    <div className="not-italic font-bold leading-normal   tracking-[5.76px] lg:w-6/12 colorText md:w-1/2 text-4xl text-[#333]  dark:text-white">
      Our Leading Brands <br /> Partnerships
    </div>

    {/* السلايدر */}
    <div className=" max-w-5xl lg:w-6/12 md:w-1/2">
      <Slider {...settings} className="flex justify-center items-center">
        <div className="">
          <img src={microsoft} alt="Slider1" className=" h-20 w-40 object-contain  md:my-6" />
        </div>
        <div className="">
          <img src={lenovo} alt="Slider2" className=" h-20 w-40 object-contain md:my-6" />
        </div>
        <div className="">
          <img src={kaspersky} alt="Slider3" className=" h-20 w-40 object-contain md:my-6" />
        </div>
        <div className="">
          <img src={cisco} alt="Slider4" className=" h-20 w-40 object-contain md:my-6" />
        </div>
        <div className="">
          <img src={peplink} alt="Slider5" className=" h-20 w-40 object-contain md:my-6" />
        </div>
        <div className="">
          <img src={dell} alt="Slider6" className=" h-20 w-40 object-contain md:my-6" />
        </div>
      </Slider>
    </div>
  </div>
  <hr />
</div>

 </>
  )
}
