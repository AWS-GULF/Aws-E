import React from 'react'
import { useState } from "react";
import logo from "../../assets/images/logooo.svg";
import { Link, useParams } from "react-router";
import Application from "../21-Application/Application"
import { useTranslation } from 'react-i18next';
export default function JopDetetails() {
   const { t, i18n } = useTranslation();
      const isArabic = i18n.language === "ar";
    const jobDescriptions = {
      
        1:t("titleDescription1"),
      
        2: t("Buildandmaintain2"),
      
        3: t("Buildandmaintain2"),
      };
      
      const jobs = [
        {
          id: 1,
          title: "Multimedia Marketing Project Manager",
        },
        {
          id: 2,
          title: "javascript developer",
        },
        {
          id: 3,
          title: "python developer",
        },
      ];
      const jobResponsibilities = {
        1: [
          t("keytitle1"),
        ],
        2: [
          t("keytitle1"),
        ],
        3: [
          t("keytitle1"),
        
        ],
      };
      
      const jobRequirements = {
        1: [
     t("Requirementstitle1"),
        ],
        2: [
     t("Requirementstitle1"),
        ],
        3: [
     t("Requirementstitle1"),
        ],
      };
      const jobBenefits = {
        1: [
        
        t("Benefits1"),
        ],
        2: [
        t("Benefits1"),
        ],
        3: [
        t("Benefits1"),
        ],
      };
      
      const { id } = useParams();
      const description = jobDescriptions[id] || "Job not found.";
      const responsibilities = jobResponsibilities[id] || [];
      const requirements = jobRequirements[id] || [];
      const Benefits = jobBenefits[id] || [];
    
      const [activeTab, setActiveTab] = useState("overview");
      console.log(id);
      
  return (
    <div>
    <div className=" flex-col justify-center items-center  ">
      <div className=" bg-[#EAF5F6] pt-6 dark:bg-[#2E2E2E]">
        <div className="flex-col text-center justify-center items-center ps-10 w-24 m-auto ">
          <Link to={"/"}>
            <img src={logo} className="w-full " alt="Logo" />
            <p className="text-[20px] text-[#666]  font-montserrat   font-semibold">
              {t("Gulf")}
              {/* Gulf */}
            </p>
          </Link>
        </div>
        <div className="text-center py-4">
          <p className={`font-montserrat text-primary text-[#003540]  dark:text-[#B3E5F1] font-bold text-[24px] ${isArabic?"font-cairo":"tracking-[1.7px] "}`}>
            {t("Multimedia Marketing Project Manager")}
            {/* Multimedia Marketing Project Manager */}
          </p>
          <p className={`gobLocation text-secondary font-montserrat text-[16px]  font-[500]  ${isArabic?"font-cairo":"tracking-[.5px] "}`}>
            <span className="text-aboutCont font-bold dark:text-[#fff]">  {t("Remote")} 
               {/* Remote */}
               </span> <span className='text-[#666] font-cairo dark:text-[#fff] '>
              {t("MarketingFulltime")}
              {/* - Digital Marketing - Full time */}
              </span> 
          </p>
        </div>

        <div className="flex justify-center space-x-4 my-4 bg-white w-fit m-auto">
  <button
    onClick={() => setActiveTab("overview")}
    className={`px-6 py-5 rounded-xl ${
      activeTab === "overview"
        ? "bg-white text-[#003540]  rounded-xl relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:border-b-4 after:border-[#003540]"  // لون النص عند التفعيل
        : "bg-white text-aboutCont "
    }`}
  >
    {t("Overview")}
    {/* Overview */}
  </button>
  <button
    onClick={() => setActiveTab("application")}
    className={`px-3 py-5 rounded-xl ${
      activeTab === "application"
        ? "bg-white text-[#003540]   rounded-xl relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:border-b-4  after:border-[#003540] "  // لون النص عند التفعيل
        : "bg-white text-aboutCont "
    }`}
  >
    {t("Application")}
    {/* Application */}
  </button>
</div>

      </div>

      <div className="p-4  flex justify-center items-center">
        {activeTab === "overview" && (
          <div className="flex-col sm:justify-center sm:items-center sm:w-3/4 w-full dark:text-[#fff]  ">
            <h3 className={`text-2xl font-bold  pb-6  dark:text-[#B3E5F1]  ${isArabic?"font-cairo":"tracking-[1.2px] "}`}>
              {" "}
              {t("Description")}
              {/* Description */}
            </h3>
            <p className={`sm:text-lg font-[500] sm:leading-9 text-aboutCont dark:text-[#fff]    font-montserrat ${isArabic?"font-cairo":" sm:tracking-[2px] "}`}>
              {description}
            </p>

            <h3 className={`text-2xl  font-bold leading-9 dark:text-[#fff]    py-6 ${isArabic?"font-cairo":" tracking-[2px]"}`}>
              {t("KeyResponsibilities")}
              {/* Key Responsibilities */}
            </h3>
            <ul className="list-disc pl-5 dark:text-[#B3E5F1] ">
              {responsibilities.map((responsibility, index) => (
                <li
                  className={`sm:text-lg font-[500]  sm:leading-9 text-aboutCont dark:text-[#fff]    font-montserrat  ${isArabic?"font-cairo":" sm:tracking-[2px] "}  `}
                  key={index}
                >
                  {responsibility}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mt-4 pb-6 dark:text-[#B3E5F1]  ">
              {t("Requirementstitle")}
              {/* Requirements */}
              </h3>
            <ul className="list-disc pl-5  dark:text-[#B3E5F1] ">
              {requirements.map((requirement, index) => (
                <li className={`sm:text-lg font-[500]  sm:leading-9 text-aboutCont dark:text-[#fff]    font-montserrat ${isArabic?"font-cairo":" sm:tracking-[2px] "}  `} key={index}>{requirement}</li>
              ))}

              {/* //////////////////////////////// */}
            </ul>
            <h3 className="text-2xl font-bold mt-4 pb-6   dark:text-[#B3E5F1]  ">
              {t("Benefits")}
              
              {/* Benefits */}
              </h3>
            <ul className="list-disc pl-5  ">
              {Benefits.map((benefit, index) => (
                <li className={`sm:text-lg font-[500] sm:tracking-[2px] sm:leading-9 text-aboutCont dark:text-[#fff]    font-montserrat ${isArabic?"font-cairo":" sm:tracking-[2px] "} `} key={index}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "application" && <Application />}
      </div>
    </div>

    </div>
  )
}
