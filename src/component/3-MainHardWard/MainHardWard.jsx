import React, { useEffect, useState, useTransition } from "react";
import { Fade } from "react-awesome-reveal";
import "./MainHerd.css";
import { useTranslation } from "react-i18next";

export default function MainHardWard() {

const { t, i18n } = useTranslation();
const isArabic=i18n.language==="ar";
const words = i18n.language === "ar" 
? ["الثقة", "التعاون", "الابتكار", "الاحترام", "الالتزام", "الإيجابية", "التنوع"]
: ["TRUST", "COLLABORATION", "INNOVATION", "RESPECT", "COMMITMENT", "POSITIVE", "DIVERSITY"];



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="w-full mt-[100px]  px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className={`w-[70%] sm:w-[430px] h-[580px] bg-[#EAF5F6] flex justify-center items-center rounded-lg shadow-lg ${isArabic? " lg:ml-12":""}` }>



            <Fade key={words[currentIndex]} duration={1000}>
              <span className="font-bold text-4xl sm:text-[64px] text-[#478B9C]">
                {words[currentIndex]}
              </span>
            </Fade>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className={`ext-2xl font-bold text-[#003540] dark:text-[#B3E5F1] tracking-wide ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>
{t("HeroSoftWareMaintitle")}
            {/* About AWS GULF */}
          </h2>
          <p className={`text-[#333] font-montserrat  dark:text-white mt-8 text-lg font-normal leading-8 sm:text-base tracking-wide  text-justify whitespace-pre-line  ${isArabic?"  sm:tracking-[0] lg:tracking-[0] font-cairo text-lg ":""}`}>
          {t("HeroSoftWareMainP")}
</p>
          {/* القسمين: Creativity & Technology */}
         <div className="flex justify-center  sm:mt-5 md:m-auto md:flex-row mt-8 lg:gap-8 gap-3">
  {/* قسم Creativity */}
  <div className="w-full md:w-1/2">
      <button className="sm:mt-4  py-4 px-8 mb-4 md:mt-4 lg:mt-8 font-normal text-[20px] leading-[24px] Style sm:px-[50px] md:px-[60px] lg:px-[80px] sm:py-[14px] md:py-[18px] lg:py-[24px] dark:text-white">
      <span className="pr-3 lg:pr-9">{t("HeroSoftWareMainCreativity")}</span>
      {/* Technology */}
    </button>

    <ul className={`text-secondary ms-2 text-[15px] sm:mt-2 md:mt-3 lg:mt-4 sm:space-y-1 md:space-y-1.5 lg:space-y-2 font-montserrat text-color-fool dark:text-white ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>

      <li>{t("forSixUiCreativity1")} </li>
      <li>{t("forSixUiCreativity2")}</li>
      <li>{t("forSixUiCreativity3")}</li>
      <li>{t("forSixUiCreativity4")}</li>
      <li>{t("forSixUiCreativity5")}</li>
    </ul>
  </div>

  {/* قسم Technology */}
  <div className="w-full md:w-1/2">
    <button className="sm:mt-4  py-4 px-8 mb-4 md:mt-4 lg:mt-8 font-normal text-[20px] leading-[24px] Style sm:px-[50px] md:px-[60px] lg:px-[80px] sm:py-[14px] md:py-[18px] lg:py-[24px] dark:text-white">
      {t("HeroSoftWareMainTechnology")}
      {/* Technology */}
    </button>
    <ul className={`text-secondary ms-2   text-[15px] sm:mt-2 md:mt-3 lg:mt-4 sm:space-y-1 md:space-y-1.5 lg:space-y-2 font-montserrat text-color-fool dark:text-white ${isArabic?"  sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>
    {/* UX UI Design
    Native & Flutter Mobile Apps Coding
    Ecommerce Solutions
    Bespoke Software Development */}
      <li> {t("forSixUiTechnology1")}</li>
      <li>{t("forSixUiTechnology2")}</li>
      <li>{t("forSixUiTechnology3")}</li>
      <li>{t("forSixUiTechnology4")}</li>
    </ul>
  </div>
</div>
{/* More About Us  */}
<p className={`mt-8 text-[#003540] underline  text-[20px] dark:text-[#B3E5F1] ${isArabic?"  hidden sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>   {t("MoreAboutUs")} </p>
          
        </div>

      </div>
      
    </div>
  );
}
