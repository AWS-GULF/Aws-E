import React, { useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Choose from "../Choose/Choose";
import SeeourBlog from "../SeeourBlog/SeeourBlog";
import MySlider from "../Slider/Slider";
import Mainn from "../Mainn/Mainn";

export default function Home() {
  // const sectionsRef = useRef([]); // تعريف المراجع

  // استخدام IntersectionObserver
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const sectionName = entry.target.getAttribute("data-section");

  //           // تغيير لون الـ body بناءً على السكشن عند نقطة معينة
  //           if (  sectionName === "main") {
  //             document.body.style.backgroundColor = "#5BA89C"; // تغيير إلى dark اللون المخصص
  //           } else {
  //             document.body.style.backgroundColor = "white"; // تغيير إلى light للسكاشن الأخرى
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3, // تغيير اللون عندما يظهر 30% من السكشن
  //       rootMargin: "0px 0px -30% 0px", // المسافة التي يجب أن تظهر بها السكشن قبل تفعيل المراقبة
  //     }
  //   );

  //   sectionsRef.current.forEach((section) => {
  //     if (section) observer.observe(section); // مراقبة كل السكاشن
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div>
      <Hero />

      <About />

     <Mainn/>

      <MySlider />

      <SeeourBlog />

      {/* <section ref={(el) => (sectionsRef.current[5] = el)} data-section="choose" className="section"> */}
      <Choose />
      {/* </section> */}
   
    </div>
  );
}
