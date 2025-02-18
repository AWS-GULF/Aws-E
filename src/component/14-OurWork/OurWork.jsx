import React, { useEffect, useState } from "react";
import QualityAssurance from "../../assets/images/OFFf.svg";
import ExploreOurServices1 from "../../assets/images/ExploreOurServices1.svg";
import ExploreOurServices2 from "../../assets/images/ExploreOurServices2.svg";
import ExploreOurServices3 from "../../assets/images/ExploreOurServices3.svg";
import ExploreOurServices4 from "../../assets/images/ExploreOurServices4.svg";
import ExploreOurServices5 from "../../assets/images/ExploreOurServices5.svg";
import ExploreOurServices6 from "../../assets/images/opm.svg";
import ExploreOurServices8 from "../../assets/images/ExploreOurServices8.svg";
import ExploreOurServices9 from "../../assets/images/ExploreOurServices9.svg";
import ExploreOurServices10 from "../../assets/images/rog.svg";
import ExploreOurServices11 from "../../assets/images/rool1.svg";
import ExploreOurServices12 from "../../assets/images/koko 1.svg";
import ExploreOurServices13 from "../../assets/images/axis.svg";
import ExploreOurServices14 from "../../assets/images/logod 1.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import WorkFliter from "../17-WorkFliter/WorkFliter";

export default function OurWork() {
  const [isOpen, setIsOpen] = useState(false);

  const logos = [
    { src: ExploreOurServices5, alt: "ExploreOurServices5" },
    { src: ExploreOurServices8, alt: "ExploreOurServices8" },
    { src: ExploreOurServices1, alt: "ExploreOurServices1" },
    { src: ExploreOurServices2, alt: "ExploreOurServices2" },
    { src: ExploreOurServices3, alt: "ExploreOurServices3" },
    { src: ExploreOurServices4, alt: "ExploreOurServices4" },
    { src: ExploreOurServices6, alt: "ExploreOurServices6" },
    { src: ExploreOurServices9, alt: "ExploreOurServices9" },
    { src: ExploreOurServices10, alt: "ExploreOurServices10" },
    { src: ExploreOurServices11, alt: "ExploreOurServices11" },
    { src: ExploreOurServices12, alt: "ExploreOurServices12" },
    { src: ExploreOurServices13, alt: "ExploreOurServices13" },
    { src: ExploreOurServices14, alt: "ExploreOurServices14" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="sm:ms-12 sm:me-12">
        <div className="mt-4 sm:mt-16 mb-8 sm:mb-14 flex justify-center dark:text-[#B3E5F1] items-center text-[#003540] text-lg ">
          <img src={QualityAssurance} alt="QualityAssurance" className="dark:text-[#B3E5F1]" />
          <p className="ps-2 text-2xl  font-montserrat text-hover font-bold sm:text-[16px] tracking-[1.6px]">
            Our Clients
          </p>
        </div>

        <div className="flex justify-center items-center text-[#003540] dark:text-[#B3E5F1] ">
          <h2 className="sm:text-5xl text-[20px] font-montserrat font-bold mb-[10px] sm:mb-[40px] sm:px-[150px] text-center sm:tracking-[4.8px] leading-[75px] text-primary">
            BUILDING SUCCESS  TOGETHER
          </h2>
        </div>

        <div className="flex justify-center items-center text-center px-[60px] pb-[70px] ">
          <p className="text-secondary font-montserrat text-[15px] sm:text-[20px] font-[400] leading-[30px] tracking-[0.4px] text-[#666] dark:text-white">
            Since 2016, we have had the privilege of collaborating with over 600
            clients across diverse industries. Here, <br /> we showcase a selection of
            our esteemed partners who have trusted us to deliver innovative and <br />
            impactful solutions.
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="dark:text-[#B3E5F1]">
      <Swiper
  modules={[Grid, Pagination]}
  spaceBetween={20}
  slidesPerView={3} 
  grid={{ rows: 2, fill: "row", rowGap: 20 }}
  pagination={{ clickable: true }}
  slidesPerGroup={3}
  loop={false}
  breakpoints={{
    320: { slidesPerView: 3 ,slidesPerGroup: 2 }, 
    480: { slidesPerView: 3, slidesPerGroup: 2 }, 
    768: { slidesPerView: 3, slidesPerGroup: 3 }, 
    1024: { slidesPerView: 4, slidesPerGroup: 3 }, 
  }}
  className="w-full"
>
  {logos.map((icon) => (
    <SwiperSlide key={icon.alt} className="flex justify-center lg:4/12 md:6/12 w-full px-4 ">
      <img src={icon.src} alt={icon.alt} className="lg:w-40 lg:h-24 mb-10 w-16 h-16" />
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      <div className="mt-[100px] mb-14 flex justify-center items-center">
        <img src={QualityAssurance} alt="QualityAssurance" />
        <p className="ps-2 font-montserrat text-hover font-bold text-[16px] text-[#003540] tracking-[1.6px] dark:text-[#B3E5F1]">
          What We Did
        </p>
      </div>

      <div className="flex justify-center items-center text-center dark:text-[#B3E5F1] text-[#003540]">
        <h2 className="sm:text-5xl text-[20px] font-montserrat font-bold mb-[10px] sm:mb-[20px] sm:px-[150px] text-center sm:tracking-[4.8px] leading-[75px] dark:text-white">
          OUR PORTFOLIO OUR VISION
        </h2>
      </div>

      <div className="flex justify-center items-center text-center px-[60px] pb-[42px] dark:text-white text-[#666]">
        <p className="text-secondary font-montserrat text-[15px] sm:text-[20px] font-[400] leading-[30px] tracking-[0.4px]">
          Since 2016, we have had the privilege of collaborating with over 600
          clients across diverse industries. Here, we showcase a selection of
          our esteemed partners who have trusted us to deliver innovative and
          impactful solutions.
        </p>
      </div>

      <WorkFliter />
    </div>
  );
}
