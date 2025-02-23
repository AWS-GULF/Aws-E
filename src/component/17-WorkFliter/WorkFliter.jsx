import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ts from "../../assets/images/ExploreOurServices9.svg";
import nafaa from "../../assets/images/ExploreOurServices1.svg";
import hwlk from "../../assets/images/ExploreOurServices3.svg";
import akark from "../../assets/images/ExploreOurServices2.svg";
import akarkLight from "../../assets/images/akarkLight.jpg";
import axisLight from "../../assets/images/axis.svg";
import axisDark from "../../assets/images/axislight.png";
import masDark from "../../assets/images/masDark.svg";
import masLight from "../../assets/images/MasLight.jpg";
import valueLight from "../../assets/images/rool1.svg";
import valueDark from "../../assets/images/valueExpert.svg";
import vibeDark from "../../assets/images/vibeDark.png";
import vibeLight from "../../assets/images/vibeLight.jpg";
import nafaDark from "../../assets/images/nafaaDark.jpeg";
 

import { useTranslation } from "react-i18next";

export default function WorkFilter() {
  const { t, i18n } = useTranslation();

  const categories = [
    t("All"),
    t("Web-Development"),
    t("Mobile-Development"),
    t("IT-Hardware"),
    t("UI/UX-Design"),
    t("Staff-Augmentation"),
    t("Quality-Assurance"),
  ];

  const cardsData = [
    {
      id: 1,
      categories: [
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: axisLight,
      title: t("clients"),
      description: t("axis"),
    },
    {
      id: 2,
      categories: [
        t("Mobile-Development"),
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: ts,
      title: t("clients"),
      description: t("ts"),
      route: "/SSSproject",
    },
    {
      id: 3,
      categories: [
        t("Mobile-Development"),
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: hwlk,
      title: t("clients"),
      description: t("hwlk"),
    },
    {
      id: 4,
      categories: [
        t("Mobile-Development"),
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: akark,
      title: t("clients"),
      description: t("akark"),
    },
    {
      id: 5,
      categories: [
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: nafaa,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 6,
      categories: [
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: masLight,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 7,
      categories: [
        t("Web-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: valueLight,
      title: t("clients"),
      description: t("value"),
    },
    {
      id: 8,
      categories: [
        t("Mobile-Development"),
        t("UI/UX-Design"),
        t("Quality-Assurance"),
      ],
      src: vibeLight,
      title: t("clients"),
      description: t("vibe"),
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(t("All"));

  useEffect(() => {
    setSelectedCategory(t("All"));
  }, [i18n.language]);

  const filteredCards =
    selectedCategory === t("All")
      ? cardsData
      : cardsData.filter((card) => card.categories.includes(selectedCategory));

  return (
    <div className="container sm:mx-auto sm:p-6">
      <div
        className={`flex-col justify-center items-end space-x-2 text-center sm:flex sm:flex-row lg:justify-center  lg:space-x-8 mb-6 lg:px-[200px] sm:flex-wrap `}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-3 sm:px-4 sm:py-2 mb-4 rounded-lg font-bold transition-all border ${
              i18n.language === "ar" && "font-cairo"
            } ${i18n.language === "ar" && "me-5"}
              ${
                selectedCategory === category
                  ? "border-primary text-[#003540] dark:text-white"
                  : "border-primary bg-white text-black rounded-[10px] hover:bg-primary hover:text-black"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards mb-[100px] flex flex-wrap gap-2 sm:gap-4 justify-center">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`card py-2 w-[45%] sm:w-[30%] bg-base-900 rounded-3xl md:h-[600px] lg:h-[450px] border p-4 ${
              i18n.language === "ar" && "text-end font-cairo"
            }`}
          >
            <figure>
              <Link to={card.route || "#"}>
                <img
                  className=" w-full h-[200px] dark:text-[#B3E5F1] cursor-pointer"
                  src={card.src}
                  alt={card.title}
                />
              </Link>
            </figure>
            <div className="flex-col items-start justify-start rounded-3xl">
              <h2
                className={`text-[12px] mt-10 sm:text-[16px] text-primary font-mons dark:text-[#B3E5F1] font-[600] ${
                  i18n.language === "en" && "sm:tracking-[1.6px]"
                } mb-2 ${
                  i18n.language === "ar" &&
                  "sm:text-end lg:text-start mt-1 text-center"
                }`}
              >
                {card.title}
              </h2>
              <div
                className={`sm:flex lg:flex-row sm:justify-center mt-10 sm:items-center dark:text-white ${
                  i18n.language === "ar" &&
                  "flex-row-reverse sm:text-end lg:text-start text-center"
                }`}
              >
                <p className="font-mons text-[14px] sm:text-[15px] font-[500] dark:text-[#fff]">
                  {card.description}
                </p>
              </div>
              {card.route && (
                <div
                  className={`${
                    i18n.language === "ar" &&
                    "flex-row-reverse lg:justify-start"
                  } flex justify-end md:justify-end  items-end text-[#003540] ps-6 underline text-primary lg:text-[16px] text-xs font-[600] tracking-wider whitespace-nowrap dark:text-[#B3E5F1]`}
                >
                  <Link to={card.route}>
                    <p
                      className={`${
                        i18n.language === "ar" && "sm:mt-10 lg:mt-8"
                      } sm:mt-4 mt-2 lg:mt-4`}
                    >
                      {t("seeMore")}
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
