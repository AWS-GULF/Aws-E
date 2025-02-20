import React, { useEffect } from "react";
import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/computer.svg";
import QualityAssurance3 from "../../assets/images/Illustration.svg";
import QualityAssurance4 from "../../assets/images/House.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import kotlin from "../../assets/images/kotlin.svg";
import node from "../../assets/images/node.svg";
import oracle from "../../assets/images/oracle.svg";
import radius from "../../assets/images/radius.svg";
import python from "../../assets/images/python5.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileDevelopment() {
  const { t, i18n } = useTranslation();
  // console.log(t,i18n.language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 sm:px-12 lg:px-24">
      <div className="mt-16 mb-14 flex justify-center items-center text-xl ">
        <img src={QualityAssurance} alt="" className="w-8 h-8" />
        <p
          className={` ps-2 font-montserrat font-bold text-lg tracking-wide text-[#295F70] dark:text-[#B3E5F1]  ${
            i18n.language === "ar" && "font-cairo text-[33px]"
          } `}
        >
          {t("services")}
        </p>
      </div>

      <div className="text-center mb-20">
        <h2
          className={`text-lg sm:text-2xl font-montserrat lg:text-4xl font-bold   leading-tight text-[#003540] dark:text-[#B3E5F1]  ${
            i18n.language === "ar" && "font-cairo"
          }`}
        >
          {t("mobileDesc")}{" "}
        </h2>
      </div>

      <div className="flex sm:justify-center overflow-scroll lg:overflow-hidden scrollbar sm:overflow-hidden  lg:w-[1400px]  lg:h-30  sm:mb-[100px] mb-8 ">
        <div className="flex gap-2 sm:w-full justify-center items-center lg:w-full ">
          <img
            src={kotlin}
            className="sm:pe-[87px] lg:pe-12 lg:pt-6 lg:w-1/6 lg:h-[160px]    "
            alt="kotlin"
          />
          <img
            src={oracle}
            className="sm:pe-[87px] lg:pe-12   lg:w-1/5 p-4  lg:h-[120px] "
            alt="oracle"
          />
          <img
            src={python}
            className="sm:pe-[87px] lg:pe-12   lg:w-1/5 p-4  lg:h-[120px] "
            alt="python"
          />
          <img
            src={radius}
            className="sm:pe-[87px] lg:pe-12   lg:w-1/5 p-4  lg:h-[120px] "
            alt="radius"
          />
          <img src={node} className=" lg:w-1/5 p-4  lg:h-[120px]" alt="node" />
        </div>
      </div>

      <div className="text-center mb-24">
        <h1
          className={`mb-5 text-[#003540] dark:text-[#B3E5F1] font-montserrat text-2xl sm:text-3xl tracking-wide font-semibold ${
            i18n.language === "ar" && "font-cairo"
          }`}
        >
          {t("md")}
        </h1>
        <p
          className={` text-aboutCont text-lg text-[#666] font-montserrat dark:text-white  leading-relaxed text-center  ${
            i18n.language === "ar" && "font-cairo"
          }`}
        >
          {t("mdDesc")}
        </p>
      </div>

      {[
        {
          title: t("ux"),
          desc: t("uxDesc"),
          img: QualityAssurance2,
          reverse: false,
        },
        {
          title: t("speed"),
          desc: t("speedDesc"),
          img: QualityAssurance3,
          reverse: true,
        },
        {
          title: t("secur"),
          desc: t("securDesc"),
          img: QualityAssurance4,
          reverse: false,
        },
      ].map((section, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row items-center gap-8 px-6 sm:px-12 lg:px-24 mb-16 ${
            section.reverse ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`sm:w-1/2 lg:w-2/3 text-center sm:text-left ${
              i18n.language === "ar" && "font-cairo sm:text-right"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-4 text-[#003540] dark:text-[#B3E5F1] ${
                i18n.language === "ar" && "font-cairo"
              }`}
            >
              {section.title}
            </h4>
            <p
              className={`text-lg leading-relaxed text-[#333] dark:text-white  ${
                i18n.language === "ar" && "font-cairo"
              }`}
            >
              {section.desc}
            </p>
          </div>
          <div className="sm:w-1/2 lg:w-1/3">
            <img
              src={section.img}
              alt={section.title}
              className="w-full rounded-l-full max-w-xs mx-auto"
            />
          </div>
        </div>
      ))}

      <div
        className={`text-center mb-10 mt-40 ${
          i18n.language === "ar" && "mt-0"
        }  `}
      >
        <h1
          className={`font-montserrat text-2xl mb-7 sm:text-3xl tracking-wide font-semibold text-[#003540] dark:text-[#B3E5F1] ${
            i18n.language === "ar" && "font-cairo"
          }`}
        >
          {t("cases")}
        </h1>
        <p
          className={`text-lg leading-relaxed text-[#666] dark:text-white font-montserrat ${
            i18n.language === "ar" && "font-cairo"
          }`}
        >
          {t("casesDesc")}
        </p>
      </div>

      <div className="cards mb-[100px] flex flex-wrap justify-center gap-4">
        {/* Card 1 */}
        <div className="card bg-base-100 w-full sm:w-96 border-1 rounded-lg border border-stroke p-4">
          <figure>
            <img
              className="w-full h-[382px]"
              src={QualityAssurance5}
              alt="QualityAssurance5"
            />
          </figure>
          <div>
            <h2
              className={`text-[17px] text-[#003540] font-montserrat font-[600] ${
                i18n.language === "ar" && "font-cairo"
              } ${
                i18n.language === "en" && "tracking-[1.6px]"
              }  mb-2 dark:text-[#B3E5F1]`}
            >
              {t("clients")}
            </h2>
            <div className="flex justify-center items-center">
              <p
                className={` font-montserrat text-[16px] text-[#666] dark:text-white  ${
                  i18n.language === "ar" && " font-cairo"
                } `}
              >
                {t("nfaa")}
              </p>
              <div
                className={`flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${i18n.language==='en'&&"tracking-wider"} whitespace-nowrap  ${
                  i18n.language === "ar" && " font-cairo text-[20px]"
                }`}
              >
                <p>{t("seeMore")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 rounded-lg w-full sm:w-96 border-1 border border-stroke p-4">
          <figure>
            <img
              className="w-full h-[382px]"
              src={QualityAssurance6}
              alt="QualityAssurance6"
            />
          </figure>
          <div>
            <h2
              className={`text-[17px] text-[#003540] font-montserrat font-[600] ${
                i18n.language === "ar" && "font-cairo"
              } ${
                i18n.language === "en" && "tracking-[1.6px]"
              }  mb-2 dark:text-[#B3E5F1]`}
            >
              {t("clients")}
            </h2>
            <div className="flex justify-center items-center">
              <p
                className={` font-montserrat text-[16px] text-[#666] dark:text-white  ${
                  i18n.language === "ar" && " font-cairo"
                } `}
              >
                {t("nfaa")}
              </p>
              <div
                className={`flex justify-end items-end mt-14 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${i18n.language==='en'&&"tracking-wider"} whitespace-nowrap  ${
                  i18n.language === "ar" && " font-cairo text-[20px] "
                }`}
              >
                <p>{t("seeMore")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card rounded-lg bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
          <figure>
            <img
              className="w-full h-[382px]"
              src={QualityAssurance7}
              alt="QualityAssurance7"
            />
          </figure>
          <div>
            <h2
              className={`text-[17px] text-[#003540] font-montserrat font-[600] ${
                i18n.language === "ar" && "font-cairo"
              } ${
                i18n.language === "en" && "tracking-[1.6px]"
              }  mb-2 dark:text-[#B3E5F1]`}
            >
              {t("clients")}
            </h2>
            <div className="flex justify-center items-center">
              <p
                className={` font-montserrat text-[16px] text-[#666] dark:text-white  ${
                  i18n.language === "ar" && " font-cairo"
                }      `}
              >
                {t("ts")}
              </p>
              <div
                className={`flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${i18n.language==='en'&&"tracking-wider"} whitespace-nowrap  ${
                  i18n.language === "ar" && " font-cairo text-[20px]"
                }`}
              >
                <Link to="/SSSproject">
                  {" "}
                  <p>{t("seeMore")}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
