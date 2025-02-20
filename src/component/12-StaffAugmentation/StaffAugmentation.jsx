import React, { useEffect } from "react";
import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance3 from "../../assets/images/computer.svg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function StaffAugmentation() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="mt-16 sm:mb-14 mb-6 flex justify-center items-center text-xl ">
          <img src={QualityAssurance} alt="" className="w-8 h-8" />
          <p
            className={` ps-2 font-montserrat font-bold text-lg tracking-wide text-[#295F70] dark:text-[#B3E5F1]  ${
              i18n.language === "ar" && "font-cairo text-[33px]"
            } `}
          >
            {t("services")}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <h2
            className={`text-sm sm:text-3xl font-mons font-bold sm:mb-[80px] mb-[50px] text-center ${
              i18n.language === "ar" && "font-cairo "
            } text-[#003540]  leading-[75px] dark:text-[#B3E5F1] ${
              i18n.language === "en" && "tracking-[2.8px]"
            } `}
          >
            {t("staffHeading")}{" "}
          </h2>
        </div>

        <div className="lg:px-[121px] px-14 flex-col justify-center items-center">
          <h1
            className={`text-center text-[#003540] dark:text-[#B3E5F1] mb-[20px] text-primary font-montserrat text-[32px]  font-[500] w-full sm:w-auto ${
              i18n.language === "ar" && "font-cairo"
            }   ${i18n.language === "en" && "tracking-[3.2px]"}`}
          >
            {t("staff")}
          </h1>
          <p
            className={`text-aboutCont text-xl text-center text-[#666] dark:text-white font-montserrat  leading-[30px] ] mb-[60px] w-full sm:w-auto  ${
              i18n.language === "ar" && "font-cairo"
            }   ${i18n.language === "en" && "tracking-[1.6px]"}`}
          >
            {t("staffDesc")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
            <h4
              className={`font-montserrat text-[20px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[2px]"}`}
            >
              {t("specialzed-skills")}
            </h4>
            <p
              className={`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}
            >
              {t("specialzedDesc")}
            </p>
          </div>

          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
          <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
            <h4
              className={`font-montserrat text-[18px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[2px]"}`}
            >
             
              {t("access")}
            </h4>
            <p className= {`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}>
              {t("accessDesc")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
            <h4
              className={`font-montserrat text-[20px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[2px]"}`}
            >
       
              {t("interview")}
            </h4>
            <p  className={`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}>
              {t("interviewDesc")}
            </p>
          </div>
          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
          <div className="w-full sm:w-3/4 pt-14 flex-col-reverse justify-center items-center ps-1 mt-[-30px]">
            <h4 className={`font-montserrat text-[20px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${i18n.language==='ar'&& "font-cairo"}   ${i18n.language==='en'&& "tracking-[2px]"}`}>
            
              {t("hire")}
            </h4>
            <p className={`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}>
              {t("hireDesc")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
            <h4 className={`font-montserrat text-[20px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${i18n.language==='ar'&& "font-cairo"}   ${i18n.language==='en'&& "tracking-[2px]"}`}>
            
              {t("onboard")}
            </h4>
            <p className={`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}>
              {t("onboardDesc")}
            </p>
          </div>
          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center items-center lg:px-[121px] px-14 mb-16 gap-16">
          <div className="w-full sm:w-1/4">
            <img
              src={QualityAssurance3}
              className="w-full rounded-l-full"
              alt=""
            />
          </div>
          <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
            <h4 className={`font-montserrat text-[20px] font-[600] text-center lg:text-start mb-4 dark:text-[#B3E5F1] w-full ${i18n.language==='ar'&& "font-cairo"}   ${i18n.language==='en'&& "tracking-[2px]"}`}>
            
              {t("invoice")}
            </h4>
            <p className={`font-montserrat text-[22px] text-xl text-[#666] dark:text-white  text-center lg:text-start  leading-[30px] w-full sm:w-auto ${
                i18n.language === "ar" && "font-cairo"
              }   ${i18n.language === "en" && "tracking-[1.6px]"}`}>
              {t("invoiceDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
