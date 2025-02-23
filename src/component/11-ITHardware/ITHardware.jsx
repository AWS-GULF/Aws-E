import React, { useEffect } from "react";

import QualityAssurance4 from "../../assets/images/Quality Assurance5.svg";
import { Link, Element } from "react-scroll";
import sr from "../../assets/images/OFFf.svg";
import QualityAssurance from "../../assets/images/Omputer.svg";
import { useTranslation } from "react-i18next";

export default function ITHardware() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-6 sm:px-0">
        <div className="  sm:ms-12 sm:me-12">
          <div className="mt-16 sm:mb-14 mb-6 flex justify-center items-center text-xl ">
            <img src={sr} alt="" className="w-8 h-8" />
            <p
              className={` ps-2 font-montserrat font-bold text-lg tracking-wide text-[#295F70] dark:text-[#B3E5F1]  ${
                i18n.language === "ar" && "font-cairo text-[33px]"
              } `}
            >
              {t("services")}
            </p>
          </div>

          <div className="flex-col justify-center items-center ">
            <h2
              className={`text-sm sm:text-3xl font-mons font-bold sm:mb-[80px] mb-[50px] text-center ${
                i18n.language === "ar" && "font-cairo "
              } text-[#003540]  leading-[75px] dark:text-[#B3E5F1] ${
                i18n.language === "en" && "tracking-[2.8px]"
              } `}
            >
              {t("ItHeader")}
            </h2>
            <p
              className={`text-aboutCont text-xl text-center  lg:text-center  font-mons font-normal leading-[30px]  mb-[60px] dark:text-white ${
                i18n.language === "en" && "tracking-[1.6px] "
              } ${i18n.language === "ar" && "font-cairo "}`}
            >
              <span className=" pe-1 font-bold">{t("aws-name")}</span>
              {t("itDesc")}
            </p>
          </div>

          <h2
            className={`text-center font-mons text-[32px] font-bold pb-8 dark:text-[#B3E5F1] ${
              i18n.language === "en" && "tracking-[3.2px]  "
            } ${i18n.language === "ar" && "font-cairo "}} `}
          >
            {t("services")}
          </h2>

          <div className="flex  justify-center items-center pb-16 ">
            <ul className="flex-col  sm:flex sm:flex-row  justify-center items-center dark:text-[#B3E5F1] text-[#003540] font-semibold  ">
              <div className="flex  justify-between ms-2 sm:ms-0">
                <li className=" w-[40%] dark:text-[#B3E5F1]  sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="ITHardware"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer  "
                  >
                    {" "}
                    {t("ITandHard")}
                  </Link>
                </li>
                <li className=" w-[40%] sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to=" Data Center "
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    {t("DataCenter")}
                  </Link>
                </li>
              </div>
              <div className="flex justify-between ms-2 sm:ms-0 ">
                <li className=" w-[40%] sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="Network"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    {t("Network")}
                  </Link>
                </li>
                <li className=" w-[40%] sm:w-fit  mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="Professional"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    {t("ProServices")}
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <Element name="ITHardware">
            <div className="flex-col justify-center items-start sm:px-12 ">
              <h2
                className={`text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px]  font-[500] dark:text-[#B3E5F1] ${
                  i18n.language === "en" && "tracking-[3.2px] "
                } ${i18n.language === "ar" && "font-cairo "} `}
              >
                {t("ITandHard")}
              </h2>
              <p
                className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                } text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}
              >
                {t("ITDesc")}
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px]  ">
            <div className="ps-4 w-3/4 m-auto   sm:hidden ">
              <img
                src={QualityAssurance}
                className="sm:w-[437px] sm:h-[367px] w-full"
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4 ">
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Itf1")}
              </h4>
              <p  className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Itf1Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Itf2")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Itf2Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Itf3")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Itf3Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Itf4")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Itf4Desc")}
              </p>
            </div>
            <div className="ps-4 w-3/4 m-auto ms-20    hidden sm:block  dark:text-[#fff]">
              <img src={QualityAssurance} className="w-full" alt="" />
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name=" Data Center ">
            <div className="flex-col justify-center items-end sm:px-12 mt-10 sm:mt-0">
              <h2  className={`text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px]  font-[500] dark:text-[#B3E5F1] ${
                  i18n.language === "en" && "tracking-[3.2px] "
                } ${i18n.language === "ar" && "font-cairo "} `}>
                {t("DataCenter")}
              </h2>
              <p  className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                } text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("DcDesc")}{" "}
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start gap-20 items-start sm:px-12 sm:pt-8 sm:mb-[60px] bg--950 dark:text-[#fff]   ">
            <div className="ps-4 w-3/4 m-auto bg--700 ">
              <img src={QualityAssurance} className="  w-full " alt="" />
            </div>

            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Dcf1")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Dcf1Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Dcf2")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Dcf2Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Dcf3")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Dcf3Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Dcf4")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Dcf4Desc")}
              </p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name="Network">
            <div className="flex-col justify-center items-start sm:px-12 mt-10 sm:mt-0">
              <h2 className={`text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px]  font-[500] dark:text-[#B3E5F1] ${
                  i18n.language === "en" && "tracking-[3.2px] "
                } ${i18n.language === "ar" && "font-cairo "} `}>
                {t("Network")}
              </h2>
              <p  className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                } text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("NetworkDesc")}
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px] ">
            <div className="ps-4 w-3/4 m-auto   sm:hidden ">
              <img
                src={QualityAssurance}
                className="sm:w-[437px] sm:h-[367px] w-full"
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Netf1")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Netf1Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Netf2")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Netf2Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Netf3")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Netf3Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Netf4")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Netf4Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("Netf5")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("Netf5Desc")}
              </p>
            </div>
            <div className="ps-4 w-3/4 m-auto    hidden sm:block ">
              <img src={QualityAssurance} className="w-full" alt="" />
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name="Professional">
            <div className="flex-col justify-center items-start sm:px-12 mt-10 sm:mt-0">
              <h2  className={`text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px]  font-[500] dark:text-[#B3E5F1] ${
                  i18n.language === "en" && "tracking-[3.2px] "
                } ${i18n.language === "ar" && "font-cairo "} `}>
                {t("ProServices")}
              </h2>
              <p  className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                } text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("proDesc")}
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px]">
          <div className="pe-8 w-3/4 m-auto  ">
              <img src={QualityAssurance} className="  w-full " alt="" />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("proF1")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("proF1Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("proF2")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("proF2Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("proF3")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("proF3Desc")}
              </p>
              <h4
                className={`font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff]  font-[600] mb-1 ${
                  i18n.language === "en" && "tracking-[2px] "
                } ${i18n.language === "ar" && "font-cairo "}`}
              >
                {t("proF4")}
              </h4>
              <p className={`${i18n.language === "en" && "tracking-[1.6px] "} ${
                  i18n.language === "ar" && "font-cairo "
                }  text-start text-[14px] sm:text-[16px] font-mons font-normal  dark:text-[#fff] text-[#666] leading-[30px]  mb-[60px]  `}>
                {t("proF3Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
