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
import icon from "../../assets/images/gridicons_quote.svg"
export default function ClientsAcross() {
  const [isOpen, setIsOpen] = useState(false);
  const logos = [
    { src: ExploreOurServices1, alt: "ExploreOurServices1" },
    { src: ExploreOurServices2, alt: "ExploreOurServices2" },
    { src: ExploreOurServices3, alt: "ExploreOurServices3" },
    { src: ExploreOurServices4, alt: "ExploreOurServices4" },
    { src: ExploreOurServices5, alt: "ExploreOurServices5" },
    { src: ExploreOurServices6, alt: "ExploreOurServices6" },
    { src: ExploreOurServices7, alt: "ExploreOurServices7" },
    { src: ExploreOurServices8, alt: "ExploreOurServices8" },
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
    <>
   
 <h1 className="text-left mt-9 mb-24 ml-10 font-[Montserrat] text-[20px] font-semibold leading-[30px] tracking-[2px] underline decoration-solid"
 > Explore Our Services </h1>
    <div className="flex flex-wrap ms-6 me-6  rounded-2xl px-6 bg-card  bg-[#EAF5F6] py-20 mt-28  ">
      
      <div className="w-full lg:w-1/2">
        <h2 className="font-mons font-[600] text-5xl  text-aboutCont tracking-[4.8px] leading-[60px] ">
          Clients Across The Globe
        </h2>
        <div className="flex items-start mt-16 me-8">
          <motion.div className="w-full">
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="text-[#333] text-[16px] font-normal tracking-[1.6px] font-mons font-montserrat ">
                  <i class="fa-solid fa-quote-left  pr-3 text-2xl"></i>Recognizing the ever-evolving technological landscape and
                    rapidly changing market needs, the
                  </p>


                  <motion.div
                
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
              <h4 className="mt-6 font-montserrat">Eslam Abosalem</h4>
            <p className="mt-2 font-montserrat">CEA at HWLK</p>
          
              </motion.div>
                </motion.div>
                
              )}
            
            </AnimatePresence>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="text-[#333] text-[16px] font-normal tracking-[1.6px] font-mons  font-montserrat">
                  <i class="fa-solid fa-quote-left  pr-3 text-2xl"></i> AWS is a forward-thinking IT system integrator and services
                    provider, established in 2024 with a focus on delivering
                    cutting-edge IT hardware solutions.
                  </p>
                </motion.div>
              )}
           
              {isOpen && (
                <motion.div
                
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                <h4 className="mt-6 font-montserrat">Hossam Nasser</h4>
              <p className="mt-2 font-montserrat">CEO at HWLK</p>
            
                </motion.div>
              )}
            </AnimatePresence>

         
          </motion.div>
        </div>
        <p className="pt-[40px] ps-1">
          <button className="bg-text font-bold underline mt-28 font-montserrat">WRITE YOUR TESTIMONIAL</button>
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
          {logos.map((icon, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img src={icon.src} alt={icon.alt} className="w-40 h-24 mb-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
}
