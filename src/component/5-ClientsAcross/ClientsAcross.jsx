import ExploreOurServices1 from "../../assets/images/ExploreOurServices1.svg";
import ExploreOurServices2 from "../../assets/images/ExploreOurServices2.svg";
import ExploreOurServices3 from "../../assets/images/ExploreOurServices3.svg";
import ExploreOurServices4 from "../../assets/images/ExploreOurServices4.svg";
import ExploreOurServices5 from "../../assets/images/ExploreOurServices5.svg";
import ExploreOurServices6 from "../../assets/images/opm.svg";
import ExploreOurServices7 from "../../assets/images/ExploreOurServices4.svg";
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
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function ClientsAcross() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);

  const logos = [
    { id: 1, src: ExploreOurServices1, alt: "ExploreOurServices1" },
    { id: 2, src: ExploreOurServices2, alt: "ExploreOurServices2" },
    { id: 3, src: ExploreOurServices3, alt: "ExploreOurServices3" },
    { id: 4, src: ExploreOurServices4, alt: "ExploreOurServices4" },
    { id: 5, src: ExploreOurServices5, alt: "ExploreOurServices5" },
    { id: 6, src: ExploreOurServices6, alt: "ExploreOurServices6" },
    { id: 7, src: ExploreOurServices7, alt: "ExploreOurServices7" },
    { id: 8, src: ExploreOurServices8, alt: "ExploreOurServices8" },
    { id: 9, src: ExploreOurServices9, alt: "ExploreOurServices9" },
    { id: 10, src: ExploreOurServices10, alt: "ExploreOurServices10" },
    { id: 11, src: ExploreOurServices11, alt: "ExploreOurServices11" },
    { id: 12, src: ExploreOurServices12, alt: "ExploreOurServices12" },
    { id: 13, src: ExploreOurServices13, alt: "ExploreOurServices13" },
    { id: 14, src: ExploreOurServices14, alt: "ExploreOurServices14" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className={`text-left mt-9 dark:text-[#B3E5F1] mb-24 ml-10 font-montserrat text-[20px] font-semibold leading-[30px] underline decoration-solid ${isArabic?"  font-cairo text-3xl ":"tracking-[2px] "}`}>
        {/* Explore Our Services */}
        {t("ClirntsExplore Our")}
      </h1>
      <div className="flex flex-wrap ms-6 me-6 rounded-2xl px-6 bg-card bg-[#EAF5F6] py-20 mt-28">
        <div className="w-full lg:w-1/2">
          <h2 className={`font-mons font-[600] text-5xl text-aboutCont leading-[60px] ${isArabic?" ] font-cairo text-3xl ":"tracking-[4.8px] "}}`}>
            {/* Clients Across The Globe */}
            {t("ClientsTitle")}
          </h2>
          <div className="flex items-start mt-16 me-8">
            <motion.div className="w-full">
              <AnimatePresence mode="wait">
              <motion.div
  key={isOpen ? "open" : "closed"}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
  <p className={`text-[#333] text-[16px] font-normal  font-mons font-montserrat${isArabic?" font-cairo text-3xl ":"tracking-[1.6px]"}`}>
    <i className={`fa-solid fa-quote-left pr-3 text-2xl${isArabic?" sm:tracking-[0] lg:tracking-[0]  px-2":""}`}></i>
    {isArabic
      ? isOpen
        ? t("ClientsSlider1") // النص العربي عندما يكون مفتوحًا
        : t("ClientsSlider2") // النص العربي عندما يكون مغلقًا
      : isOpen
      ? "AWS is a forward-thinking IT system integrator and services provider, established in 2024 with a focus on delivering cutting-edge IT hardware solutions."
      : "Recognizing the ever-evolving technological landscape and rapidly changing market needs, the"}
  </p>
  <motion.div transition={{ duration: 0.4, ease: "easeInOut" }}>
    <h4 className={`mt-6 font-montserrat ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo  ":""}`}>
      {isArabic
        ? isOpen
          ? t("ClientsSlider3") 
          : t("ClientsSlider5") 
        : isOpen
        ? "Hossam Nasser"
        : "Eslam Abosalem"}
    </h4>
    <p className="mt-2 font-montserrat">
      {isArabic
        ? isOpen
          ? t("ClientsSlider4") 
          : t("ClientsSlider6") 
        : isOpen
        ? "CEO at HWLK"
        : "CEA at HWLK"}
    </p>
  </motion.div>


                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          <p className="pt-[40px] ps-1">
            <button className={`bg-text font-bold  lg:mt-28 md:my-20 font-montserrat${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo text-base ":""}`}>
              {t("Clients")}
              {/* WRITE YOUR TESTIMONIAL */}
            </button>
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-start mt-6 lg:mt-0">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            grid={{ rows: 2, fill: "row", rowGap: 20 }}
            pagination={{ clickable: true }}
            slidesPerGroup={3}
            loop={false}
            className="w-full"
          >
            {logos.map((icon) => (
              <SwiperSlide key={icon.id} className="flex items-center justify-center">
                <img src={icon.src} alt={icon.alt} className="w-40 h-24 mb-10" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
