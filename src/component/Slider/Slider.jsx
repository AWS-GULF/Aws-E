import React from "react";
import Slider from "react-slick";
import Slider1 from "../../assets/images/Slider1.svg";
import Slider2 from "../../assets/images/Slider2.svg";
import Slider3 from "../../assets/images/Slider3.svg";
import Slider4 from "../../assets/images/Slider5.svg";
import Slider5 from "../../assets/images/Slider7.svg";

export default function MySlider() {
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
    <div>
      <div className="mb-[60px]">
        <h2 className="text-5xl text-center bg-color font-bold mt-[100px] dark:text-white">
          What Our Client Say
        </h2>
      </div>
      <div className="mt-14">
        <Slider {...settings}>
          <div>
            <img src={Slider1} alt="Slider1" className="w-full" />
          </div>
          <div>
            <img src={Slider2} alt="Slider2" className="w-full" />
          </div>
          <div>
            <img src={Slider3} alt="Slider3" className="w-full" />
          </div>
          <div>
            <img src={Slider4} alt="Slider4" className="w-full" />
          </div>
          <div>
            <img src={Slider5} alt="Slider5" className="w-full" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
