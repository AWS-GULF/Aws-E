import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExploreOurServices9 from "../../assets/images/ExploreOurServices9.svg";
import ExploreOurServices1 from "../../assets/images/ExploreOurServices1.svg";
import ExploreOurServices3 from "../../assets/images/ExploreOurServices3.svg";
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
      category: t("Web-Development"),
      src: ExploreOurServices3,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 2,
      category: t("Mobile-Development"),
      src: ExploreOurServices1,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 3,
      category: t("IT-Hardware"),
      src: ExploreOurServices9,
      title: t("clients"),
      description: t("ts"),
      route: "/SSSproject",
    },
    {
      id: 4,
      category: t("Staff-Augmentation"),
      src: ExploreOurServices3,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 5,
      category: t("UI/UX-Design"),
      src: ExploreOurServices9,
      title: t("clients"),
      description: t("ts"),
      route: "/SSSproject",
    },
    {
      id: 6,
      category: t("Quality-Assurance"),
      src: ExploreOurServices3,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 7,
      category: t("Quality-Assurance"),
      src: ExploreOurServices1,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 8,
      category: "Quality Assurance",
      src: ExploreOurServices3,
      title: t("clients"),
      description: t("nfaa"),
    },
    {
      id: 9,
      category: "Quality Assurance",
      src: ExploreOurServices9,
      title: t("clients"),
      description: t("ts"),
      route: "/SSSproject",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(t("All"));

  useEffect(() => {
    setSelectedCategory(t("All"));
  }, [i18n.language]);

  const filteredCards =
    selectedCategory === t("All")
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCategory);

  return (
    <div className="container sm:mx-auto sm:p-6">
      <div className="flex-col justify-center items-end space-x-2 text-center sm:flex sm:flex-row lg:justify-center  lg:space-x-8 mb-6 sm:px-[200px] sm:flex-wrap  ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-3 sm:px-4 sm:py-2 mb-4 rounded-lg font-bold transition-all border  ${i18n.language==='ar'&&"font-cairo "}
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

      <div className="cards mb-[100px] flex flex-wrap gap-2 sm:gap-4 justify-center ">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className={`card py-2 w-[45%] sm:w-[30%] bg-base-900 rounded-3xl md:h-[600px] lg:h-[530px] border p-4 ${
              i18n.language === "ar" && "text-end font-cairo"
            }`}
          >
            <figure>
              <Link to={card.route || "#"}>
                <img
                  className="sm:w-[405px] sm:h-[382px] w-full h-[200px] dark:text-[#B3E5F1] cursor-pointer"
                  src={card.src}
                  alt={card.title}
                />
              </Link>
            </figure>
            <div className="flex-col items-start justify-start rounded-3xl">
              <h2
                className={`text-[12px] sm:text-[16px] text-primary font-mons dark:text-[#B3E5F1] font-[600] ${i18n.language==="en"&&"sm:tracking-[1.6px]"} mb-2 ${
                  i18n.language === "ar" && "sm:text-end lg:text-start mt-1 text-center "
                }`}
              >
                {card.title}
              </h2>
              <div
                className={`sm:flex lg:flex-row sm:justify-center sm:items-center dark:text-white ${
                  i18n.language === "ar" && "flex-row-reverse sm:text-end lg:text-start text-center"
                }`}
              >
                <p className="font-mons text-[14px] sm:text-[15px] font-[500] dark:text-[#fff]">
                  {card.description}
                </p>
              </div>
              {card.route && (
                <div
                  className={`${
                    i18n.language === "ar" && "flex-row-reverse"
                  } flex justify-end md:justify-end lg:justify-start items-end text-[#003540] ps-6 underline text-primary lg:text-[16px] text-xs font-[600] tracking-wider whitespace-nowrap dark:text-[#B3E5F1]`}
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
