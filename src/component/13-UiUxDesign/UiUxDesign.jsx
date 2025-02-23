import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/Omputer.svg";
import QualityAssurance3 from "../../assets/images/Omputer.svg";
import QualityAssurance4 from "../../assets/images/Quality Assurance3.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import kotlin from "../../assets/images/tailwind_css_logo.svg";
import node from "../../assets/images/node.svg";
import oracle from "../../assets/images/oracle.svg";
import radius from "../../assets/images/radius.svg";
import python from "../../assets/images/python5.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function uiUxDesign() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="px-4 sm:px-12">
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
            {t("uiUxHeader")}{" "}
          </h2>
        </div>

      
            <div className="flex sm:justify-center overflow-scroll lg:overflow-hidden scrollbar sm:overflow-hidden  lg:w-fit lg:ps-10  lg:h-30  sm:mb-[100px] mb-8 ">
              <div className="flex gap-2 sm:w-full justify-center items-center lg:w-full  ">
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
      

        <div className="px-4 sm:px-[121px] flex-col justify-center text-[#003540] items-center dark:text-white">
          <h1
            className={`text-center text-2xl sm:text-3xl text-[#295F70]  mb-[20px] text-primary font-mons text-[32px] font-[500] dark:text-[#B3E5F1] ${
              i18n.language === "ar" && "font-cairo "
            } ${i18n.language === "en" && "tracking-[3.2px] "} `}
          >
            {t("uiuxTitle")}{" "}
          </h1>
          <p
            className={`text-aboutCont text-xl text-center  lg:text-center  font-mons font-normal leading-[30px]  mb-[60px] dark:text-white ${
              i18n.language === "en" && "tracking-[1.6px] "
            } ${i18n.language === "ar" && "font-cairo "}`}
          >
            {t("uiuxDesc")}
          </p>
        </div>

        {/* Accurate Deliveries */}
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-[121px] mb-16 gap-8">
          <div className="lg:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4
              className={`font-mons text-[20px] sm:text-[32px] lg:text-[24px] font-[600] text-lg text-[#000] ${
                i18n.language === "en" && "tracking-[2px] "
              } ${
                i18n.language === "ar" && "font-cairo text-center lg:text-start"
              }  mb-4 dark:text-[#B3E5F1]`}
            >
              {t("mr")}
            </h4>
            <p
              className={`font-mons text-[16px] sm:text-[24px] lg:text-[20px] sm:pt-4 font-normal text-[400] ${
                i18n.language === "en" && "tracking-[1.6px] "
              } ${
                i18n.language === "ar" && "font-cairo text-center lg:text-start"
              }   leading-[30px] dark:text-white`}
            >
              {t("mrdesc")}
            </p>
          </div>
          <div className="lg:w-1/4 sm:w-3/4">
            <img src={QualityAssurance2} className="w-full" alt="" />
          </div>
        </div>

        {/* Quality Control */}
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-[121px] mb-16 gap-8">
          <div className="lg:w-1/4  sm:w-3/4">
            <img
              src={QualityAssurance3}
              className=" rounded-r-full w-full"
              alt=""
            />
          </div>
          <div className="lg:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4
              className={`font-mons text-[20px] sm:text-[32px]  lg:text-[24px] font-[600] text-lg text-[#000] ${
                i18n.language === "en" && "tracking-[2px] "
              } ${
                i18n.language === "ar" && "font-cairo text-center lg:text-start"
              }  mb-4 dark:text-[#B3E5F1]`}
            >
              {t("BicB")}
            </h4>
            <p
              className={`font-mons text-[16px] sm:text-[24px] sm:pt-4 font-normal lg:text-[20px] text-[400] ${
                i18n.language === "en" && "tracking-[1.6px] "
              } ${
                i18n.language === "ar" && "font-cairo text-center lg:text-start"
              }   leading-[30px] dark:text-white`}
            >
              {t("BicBDesc")}
            </p>
          </div>
        </div>

        {/* Case Studies Section */}
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
                  className={`flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${
                    i18n.language === "en" && "tracking-wider"
                  } whitespace-nowrap  ${
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
                  className={`flex justify-end items-end mt-14 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${
                    i18n.language === "en" && "tracking-wider"
                  } whitespace-nowrap  ${
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
                  className={`flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] ${
                    i18n.language === "en" && "tracking-wider"
                  } whitespace-nowrap  ${
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
    </div>
  );
}
