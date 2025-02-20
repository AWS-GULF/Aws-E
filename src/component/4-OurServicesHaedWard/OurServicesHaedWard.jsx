import React from "react";
import Services from "../../assets/images/Services.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./OutSerices.css";
 
export default function OurServicesHaedWard() {
     const { t, i18n } = useTranslation();
      const isArabic = i18n.language === "ar";
      return (
        <>
          <div className="px-4 sm:px-12 mt-24">
            <div className={`text-center lg:mr-32 sm:text-left${isArabic ? " lg:mr-[-30px] sm:tracking-[0] lg:tracking-[0] font-cairo text-right w-[97%] lg:pl-10 m-auto lg:text-right" : ""}`}>
              <h1 className="text-3xl text-[#003540] sm:text-[36px] font-bold mb-4 dark:text-[#B3E5F1] font-montserrat">
                {t("titleOurServices")}
              </h1>
              <p className={`text-xl sm:text-[20px] tracking-wide text-color-fool dark:text-white font-montserrat ${isArabic ? "font-cairo" : ""}`}>
                {t("DescrtionOurServices")}
              </p>
      
              <div className="grid gap-4 mt-8 lg:w-[110%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 flex-1 bg-tooHover group flex flex-col">
  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
  <div className="flex flex-col justify-between h-full">
    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
      {t("QualityAssuranceH1")}
    </h2>
    <p className={`font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
      {t("QualityAssurancep")}
    </p>
    <div className="card-actions justify-start mt-auto bg-text">
      <Link to="QualityAssurance1">
        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
          {t("QualityAssuranceSeemore")}
        </button>
      </Link>
    </div>
  </div>
</div>

                {/* Card 2 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 flex-1 bg-tooHover group flex flex-col">
  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
  <div className="flex flex-col justify-between h-full">
    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
    {t("MobileDevelopmentH1")}
    </h2>
    <p className={`font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
    {t("MobileDevelopmentp")}
    </p>
    <div className="card-actions justify-start mt-auto bg-text">
      <Link to="QualityAssurance1">
        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
        {t("MobileDevelopmentSeeMore")}
        </button>
      </Link>
    </div>
  </div>
</div>
      
                {/* Card 3 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
                  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
                  <div>
                    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
                      {t("Web DevelopmentH1")}
                    </h2>
                    <p className={`font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
                      {t("Web Developmentp")}
                    </p>
                    <div className="card-actions justify-start mt-11 bg-text">
                      <Link to="wepDevlopment">
                        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
                          {t("Web DevelopmentSeeMore")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
      
                {/* Card 4 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
                  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
                  <div>
                    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
                      {t("IT&HardwareH1")}
                    </h2>
                    <p className={`font-mons text-[15px] lg:py-3 font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
                      {t("IT&Hardwarep")}
                    </p>
                    <div className="card-actions justify-start mt-11 bg-text">
                      <Link to="iTHardware">
                        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
                          {t("IT&HardwareSeeMore")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              
                {/* Card 5 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 flex-1 bg-tooHover group flex flex-col">
  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
  <div className="flex flex-col justify-between h-full">
    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
    {t("StaffAugmentationH1")}
    </h2>
    <p className={`font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
    {t("StaffAugmentationp")}
    </p>
    <div className="card-actions justify-start mt-auto bg-text">
      <Link to="QualityAssurance1">
        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
        {t("StaffAugmentationSeeMore")}
        </button>
      </Link>
    </div>
  </div>
</div>
         
             
               
                {/* Card 6 */}
                <div className="border p-3 rounded-xl min-w-[300px] mb-4 flex-1 bg-tooHover group flex flex-col">
  <img src={Services} alt="Services" className="w-full h-auto object-cover" />
  <div className="flex flex-col justify-between h-full">
    <h2 className={`text-[#003540] font-montserrat pt-4 text-base font-[600] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo" : "tracking-[1.6px]"}`}>
    {t("UI/UXDesignH1")}
    </h2>
    <p className={`font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
    {t("UI/UXDesignp")}
    </p>
    <div className="card-actions justify-start mt-auto bg-text">
      <Link to="QualityAssurance1">
        <button className={`dark:text-[#B3E5F1] group-hover:dark:text-black ${isArabic ? "font-cairo sm:tracking-[0] text-base lg:tracking-[0]" : ""}`}>
        {t("UI/UXDesignSeeMore")}
        </button>
      </Link>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </>
      );
}
