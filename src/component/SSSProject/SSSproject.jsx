import React from "react";
import QualityAssurance1 from "../../assets/images/sr-gray.svg";
import QualityAssurance2 from "../../assets/images/ss3.svg";
import QualityAssurance3 from "../../assets/images/s1.svg";
import QualityAssurance4 from "../../assets/images/s4.svg";
import QualityAssurance6 from "../../assets/images/s6.svg";
import { useTranslation } from "react-i18next";
export default function SSSproject() {
  const { t,i18n } = useTranslation();
  return (
    <>
      <div>
        <div className=" flex justify-center text-xl my-16 text-justify gap-2">
          <img src={QualityAssurance1} alt="QualityAssurance1" className={`${i18n.language==='ar'&&"w-8" }`}/>
          <h1 className={` dark:text-[#B3E5F1] ${i18n.language==='ar'&& "text-[24px] font-[500] text-gray-500"} `}>{t("case")}</h1>
        </div>

        <div className="text-2xl flex justify-center  gap-5 ">
          <img src={QualityAssurance2} alt="QualityAssurance2 " />
          <h2 className="text-center mt-9 text-5xl font-bold text-[#003540]">
            {t("TsTitle")}
          </h2>
        </div>
        <div className="mt-20 text-center w-full tracking-[1.6px] font-montserrat text-[16px] font-normal leading-[30px] ">
          <div className="text-center md:text-left px-4 md:px-16 lg:px-24">
            <p className={` text-[16px]  text-[#333] md:text-[18px] lg:text-[20px] dark:text-white leading-[1.8] ${i18n.language==='ar'&& "tracking-[0] text-start"}`}>
              {t("TsDesc")}
            </p>
            <img
              src={QualityAssurance3}
              alt="Quality Assurance"
              className="m-auto mt-8 w-[90%] sm:w-[70%] md:w-[60%] lg:w-full max-w-none"
            />
          </div>

          {/*  */}
          <div className="flex flex-col md:flex-row justify-center mt-11 gap-4 mx-6 md:mx-24">
            <div className="bg-[#EAF5F6] p-7 rounded-lg w-full md:w-1/2">
              <h4 className={`text-black font-montserrat text-[20px] font-semibold mt-4 tracking-[2px] dark:text-[black] ${i18n.language==='ar'&& "tracking-[0]"}`}>
                {t("missionTitle")}
              </h4>
              <p className={`mt-4 text-black font-montserrat text-[16px] font-normal leading-[30px] tracking-[1.6px] dark:text-black ${i18n.language==='ar'&& "tracking-[0]"}` }>
                {t("mission")}{" "}
              </p>
            </div>
            <div className={`bg-[#EAF5F6] p-7 rounded-lg w-full md:w-1/2`}>
              <h4 className={`text-center text-black font-montserrat text-[20px] mt-4 font-semibold tracking-[2px] dark:text-[black] ${i18n.language==='ar'&& "tracking-[0]"}`}>
                {t("visionTitle")}
              </h4>
              <p className={`text-black font-montserrat mt-4 text-[16px] font-normal leading-[30px] tracking-[1.6px] dark:text-black ${i18n.language==='ar'&& "tracking-[0]"}`}>
                {t("vision")}{" "}
              </p>
            </div>
          </div>

          <div className="mt-32 mx-11">
            <h4 className={`${i18n.language==='ar'&& "tracking-[0]"}text-[#003540]   text-3xl dark:text-[#B3E5F1]`}>
              {t("interfaces")}
            </h4>
            <div className=" text-left mt-16 ">
              <h4 className={`text-[#003540] text-3xl dark:text-[#B3E5F1] ${i18n.language==='ar'&& "sm:lg:text-end tracking-[0] text-center "}`}>
                {t("admin")}
              </h4>
              <p className={`mt-3 text-[#000] text-[20px] dark:text-white ${i18n.language==='ar'&& "sm:lg:text-end tracking-[0] text-center"}`}>
                {t("desc1")}
              </p>
            </div>
            <div className=" ">
              <img
                src={QualityAssurance4}
                alt="QualityAssurance4 "
                className="m-auto w-[80%]"
              />
            </div>
          </div>

          <div className="mt-16 mx-11">
            <div className=" text-left ">
              <h4 className={`text-[rgb(0,53,64)] text-3xl dark:text-[#B3E5F1] ${i18n.language==='ar'&& "lg:text-end tracking-[0] text-center "} `}>
                {t("support")}
              </h4>
              <p className={`${i18n.language==='ar'&& "lg:text-end tracking-[0]"} mt-3 text-[#000] text-[20px]  dark:text-white text-center`}>
                {t("desc2")}
              </p>
            </div>
            <div className=" text-left mt-6 ">
              <h4 className={`${i18n.language==='ar'&& "lg:text-end tracking-[0]"} text-[#003540] text-3xl dark:text-[#B3E5F1] text-center`}>
                {t("smart")}
              </h4>
              <p className={`${i18n.language==='ar'&& "lg:text-end tracking-[0]"} mt-3 text-[#000] text-[20px] dark:text-white text-center `}>
                {t("desc5")}
              </p>
            </div>
            <div className=" ">
              <img
                src={QualityAssurance6}
                alt="QualityAssurance6 "
                className="m-auto w-[80%]"
              />
            </div>
          </div>

          <div className=" mx-11">
            <div className={` ${i18n.language==='ar'&& "lg:text-end tracking-[0] text-center"} text-left `}>
              <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">
                {t("company")}
              </h4>
              <p className="mt-3 text-[#000] text-[20px]  dark:text-[#fff]">
                {t("desc3")}
              </p>
            </div>
            <div className=" ">
              <img
                src={QualityAssurance4}
                alt="QualityAssurance4 "
                className="m-auto w-[80%]"
              />
            </div>
          </div>

          <div className=" mx-11">
            <div className={` ${i18n.language==='ar'&& "lg:text-end tracking-[0] text-center"} text-left `}>
              <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">
                {t("employee")}
              </h4>
              <p className="mt-3 text-[#000] text-[20px] dark:text-white ">
                {t("desc4")}
              </p>
            </div>
            <div className=" ">
              <img
                src={QualityAssurance4}
                alt="QualityAssurance4 "
                className="m-auto w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
