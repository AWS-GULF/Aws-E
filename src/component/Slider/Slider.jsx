import React from "react";
import Slider from "react-slick";
import Slider1 from "../../assets/images/kall1.svg";
import Slider2 from "../../assets/images/kall2.svg";
// import Slider3 from "../../assets/images/kall3.svg";
import Slider5 from "../../assets/images/kall5.svg";

export default function MySlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2, // عرض 2 شرائح بحيث تكون واحدة في المنتصف
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    centerMode: true, // ✅ تفعيل وضع الـ Center Mode
    centerPadding: "20%", // ✅ لإظهار نصف الشرائح الجانبية
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div>
      <div className="mb-[60px] rounded-2xl">
        <h2 className="text-5xl text-center bg-color font-bold mt-[100px] dark:text-white">
          What Our Client Say
        </h2>
      </div>
      <div className="px-4 rounded-2xl">
        <Slider {...settings}>
          {[Slider1, Slider2,  Slider5].map((slide, index) => (
            <div key={index} className="w-full h-[300px] flex items-center justify-center rounded-2xl transition-transform duration-700 transform hover:rotate-6 mx-4">
              <img 
                src={slide} 
                alt={`Slider ${index + 1}`} 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 transform hover:rotate-6"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
