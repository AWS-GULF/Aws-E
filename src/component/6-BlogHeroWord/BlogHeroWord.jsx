import React, { useEffect } from "react";
import blog from "../../assets/images/blog.svg";
import blog1 from "../../assets/images/blog2.svg";
import blog3 from "../../assets/images/blog3.svg";
import blog4 from "../../assets/images/a1.svg";
import blog5 from "../../assets/images/a2.svg";
import blog6 from "../../assets/images/a3.svg";
import "./Blogg.css"
import Modell from "../16-Modell/Modell";

import { useTranslation } from "react-i18next";

export default function BlogHeroWord() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // تبديل الصور بناءً على اللغة
  const firstImage = isArabic ? blog4 : blog;
  const secondImage = isArabic ? blog6 : blog1;
  const thirdImage = isArabic ? blog5 : blog3;

  return (
    <div className="lg:px-8 w-[85%] mt-9 m-auto py-4 lg:py-16">
      <div className="flex flex-wrap md:flex-nowrap gap-10 ">
        <div className="w-full md:w-1/2">
          <div className="mb-10">
            <img src={firstImage} className="w-full" alt="AI in Social Media" />
            <p className={`text-sm text-secondary mt-4 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl " : ""}`}>
              {t("BLOGSpan1")}
            </p>
            <p className={`text-gray-700 text-lg mt-2 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGTitlep")}
            </p>
            <p className={`mt-4 bg-text underline font-bold pt-2 rounded dark:text-[#B3E5F1] font-montserrat ${isArabic ? " hidden sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGTitleRead Article1")}
            </p>
          </div>

          <div>
            <img src={thirdImage} className="w-full" alt="Video Production" />
            <p className={`text-sm text-secondary mt-4 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGSpan2")}
            </p>
            <p className={`text-gray-700 text-lg mt-2 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGTitlep2")}
            </p>
            <p className={`mt-4 bg-text underline font-bold w py-2 rounded dark:text-[#B3E5F1] font-montserrat ${isArabic ? " hidden sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGTitleRead Article2")}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className={`text-3xl font-bold tracking-wider mb-6 bg-text lg:mt-36 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
            {t("BLOGTitle")}
          </h2>
          <p className={`lg:mb-32 mt-4 bg-text underline font-bold w py-2 rounded dark:text-[#B3E5F1] font-montserrat ${isArabic ? " hidden sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
            {t("BLOGTitleSeeMore")}
          </p>

          <div>
            <img src={secondImage} className="w-full" alt="Marketing " />
            <p className={`text-sm text-secondary mt-4 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGSpan")}
            </p>
            <p className={`text-gray-700 text-lg mt-2 dark:text-white font-montserrat ${isArabic ? " sm:tracking-[0] lg:tracking-[0] font-cairo " : ""}`}>
              {t("BLOGTitlep2")}
            </p>
            <p className={`mt-4 bg-text underline font-bold w py-2 rounded dark:text-[#B3E5F1] font-montserrat ${isArabic ? " hidden sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl " : ""}`}>
              {t("BLOGTitleRead Article")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap md:flex-nowrap items-center justify-around">
        <p className="lg:text-3xl font-bold mx-9 tracking-wide text-[#333] dark:text-white md:text-balance text-xl text-nowrap font-montserrat sm:whitespace-nowrap">
          {t("titleContact")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>

        <button className="backGroundButton sm:px-6 dark:text-[#333] dark:bg-[#B3E5F1] py-1 px-6 backGroundButtonn md:m-auto text-white font-bold my-12 rounded-2xl transition">
          <Modell />
        </button>
      </div>
    </div>
  );
}
