import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/computer.svg";
import QualityAssurance3 from "../../assets/images/Illustration.svg";
import QualityAssurance4 from "../../assets/images/House.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SSSproject from "../SSSProject/SSSproject";
import { useTranslation } from "react-i18next";

export default function QualityAssurance1() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-4 sm:px-12">
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

        <div className="flex justify-center items-center mb-20">
          <h2
            className={`text-lg sm:text-2xl font-montserrat lg:text-4xl font-bold   leading-tight text-[#003540] dark:text-[#B3E5F1]  ${
              i18n.language === "ar" && "font-cairo"
            }`}
          >
            {t("quality-assurance")}{" "}
          </h2>
        </div>

        <div className="px-4 sm:px-[121px] flex-col justify-center text-[#003540] items-center dark:text-white">
          <h1
            className={`text-center text-2xl sm:text-3xl text-[#000]  mb-[20px] text-primary font-montserrat  text-[32px] font-[500] dark:text-[#B3E5F1] ${
              i18n.language === "en" && "tracking-[3.2px] "
            }  ${i18n.language === "ar" && "font-cairo text-[33px]"} }`}
          >
            {t("qa")}{" "}
          </h1>
          <p
            className={`text-aboutCont text-xl text-left font-montserrat  font-normal leading-[30px]  mb-[60px] dark:text-white ${
              i18n.language === "ar" && "font-cairo lg:text-end text-center"
            }  ${i18n.language === "en" && "tracking-[1.6px]"} }`}
          >
            {t("qaDesc")}
          </p>
        </div>

        {/* Accurate Deliveries */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4
              className={`font-montserrat text-lg text-[20px] font-[600]  text-[#000]  mb-4 dark:text-[#B3E5F1]  ${
                i18n.language === "ar" && "font-cairo lg:text-end text-center"
              }  ${i18n.language === "en" && "tracking-[2px]"}`}
            >
              {t("ad")}
            </h4>
            <p
              className={`font-montserrat text-lg text-[16px] font-normal text-[400] leading-[30px] dark:text-white  ${
                i18n.language === "ar" && "font-cairo lg:text-end text-center"
              }  ${i18n.language === "en" && ""}`}
            >
              {t("adDesc")}
            </p>
          </div>
          <div className="sm:w-1/4">
            <img src={QualityAssurance2} className="w-full" alt="" />
          </div>
        </div>

        {/* Quality Control */}
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-2/4">
            <img
              src={QualityAssurance3}
              className="w-full h-[230px]"
              alt="Quality Assurance"
            />
          </div>
          <div className="sm:w-3/4 pt-14 flex flex-col justify-center items-center ps-1">
            <h4
              className={`font-montserrat text-lg text-[20px] font-[600]  mb-4 dark:text-[#B3E5F1]  ${
                i18n.language === "ar" && "font-cairo lg:text-end text-center"
              }  ${i18n.language === "en" && "tracking-[2px]"} `}
            >
              {t("qc")}{" "}
            </h4>
            <p className= {`font-montserrat text-lg  text-[#000] text-[16px] font-normal  leading-[30px] dark:text-white  ${
                i18n.language === "ar" && "font-cairo lg:text-end text-center"
              }  ${i18n.language === "en" && "tracking-[1.6px]"} `}>
             {t("qcDesc")}
            </p>
          </div>
        </div>

        {/* Account Management */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
          <h4
              className={`font-montserrat text-lg text-[20px] font-[600]  mb-4 dark:text-[#B3E5F1]  ${
                i18n.language === "ar" && "font-cairo  lg:text-end text-center"
              }  ${i18n.language === "en" && "tracking-[2px]"} `}
            >
              {t("am")}{" "}
            </h4>
            <p className= {`font-montserrat text-lg  text-[#000] text-[16px] font-normal  leading-[30px] dark:text-white  ${
                i18n.language === "ar" && "font-cairo lg:text-end text-center"
              }  ${i18n.language === "en" && "tracking-[1.6px]"} `}>
             {t("amDesc")}
            </p>
          </div>
          <div className="sm:w-1/4">
            <img
              src={QualityAssurance4}
              className="w-full"
              alt="QualityAssurance4"
            />
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
    </div>
  );
}
