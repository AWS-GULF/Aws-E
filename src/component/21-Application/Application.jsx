import React from 'react'
import { useRef, useState } from "react";
import elect  from "../../assets/images/mdi_thunder.svg"
import { useTranslation } from 'react-i18next';
export default function JobApplicationForm() {
    const [resume, setResume] = useState(null);
    const fileInputRef = useRef(null);
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const handleResumeUpload = (event) => {
      if (event.target.files.length > 0) {
        setResume(event.target.files[0].name);
      }
    };
  
  return (
    <div>
            <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-lg text-xl  ">
      <div className="p-4 border rounded-lg mb-6 bg-gray-50 dark:bg-[#242424]  sm:flex flex-row items-center justify-center  ">
      <div className="flex-col  w-[80%] ">
      <h2 className="font-semibold flex items-center dark:text-[#B3E5F1]  ">
          <span className='text-[#B3E5F1] '>
            <img src={elect} alt="" />
          </span>{" "}
          {t("Autofillapplication1")}
          {/* Autofill application */}
        </h2>
        <p className="text-sm text-gray-600 dark:text-[#fff]">
        {t("Autofillapplication")}
{/*        
          Save time by importing your resume in one of the <br /> following formats: */}
          <span className="font-medium">
            {" "}
            .pdf, .doc, .docx, .odt, or .rtf.
          </span>
        </p>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx,.odt,.rtf"
          onChange={handleResumeUpload}
        />
      </div>

      <div className="sm:w-[35%] w-full  ">
    
   <button  onClick={() => fileInputRef.current.click()} className="mt-3 whitespace-nowrap dark:bg-[#B3E5F1] dark:text-[black]  bg-[#003540] text-[white] me-14  px-8 py-6 rounded-lg"
            >
             <span className='text-sm    whitespace-nowrap '>
              {t("Importresumefrom")}
               {/* Import resume from */}
                </span> 
            </button>
    </div>
        {resume && (
          <p className="mt-2 text-sm text-[#003540]">
            {t("Selected")}
            
          
             {resume}</p>
        )}
      </div>

      <h3 className="font-bold text-lg mb-3 text-[#666] dark:text-[#B3E5F1]">
        {t("Personalinformation")}
        {/* Personal information */}
        </h3>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#666] ">
          <div>
            <label className="block text-sm font-medium text-[#666]">
              <span className="text-red-500">*</span>
              {t("First name")}
              {/* First name */}
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#666]">
            <span className="text-red-500">*</span>
            {t("Last name")}
            
            {/* Last name */}
            </label>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#666]">
          <span className=" text-[#666] ">*</span>
          {t("EMAIL")}
          {/* EMAIL */}
          </label>
          <input
            type="email"
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#666]">
            {t("NOTES")}
            {/* NOTES */}
          </label>
          <textarea className="mt-1 block w-full border rounded-md p-2 h-24"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#003540] text-white py-2 rounded-lg dark:bg-[#B3E5F1] dark:text-[black] "
        >
          {t("SubmitApplication")}
          {/* Submit Application */}
        </button>
      </form>
    </div>
    </div>
  )
}



