import { useState } from "react";
import { Link } from "react-router-dom";
import ExploreOurServices9 from "../../assets/images/ExploreOurServices9.svg";
import ExploreOurServices1 from "../../assets/images/ExploreOurServices1.svg";
import ExploreOurServices3 from "../../assets/images/ExploreOurServices3.svg";

export default function WorkFilter() {
  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "IT & Hardware",
    "UI/UX Design",
    "Staff Augmentation",
    "Quality Assurance",
  ];

  const cardsData = [
    { id: 1, category: "Web Development", src: ExploreOurServices3, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 2, category: "UI/UX Design", src: ExploreOurServices1, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 3, category: "IT & Hardware", src: ExploreOurServices9, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.", route: "/SSSproject" },
    { id: 4, category: "UI/UX Design", src: ExploreOurServices3, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 5, category: "Staff Augmentation", src: ExploreOurServices9, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.", route: "/SSSproject" },
    { id: 6, category: "Mobile Development", src: ExploreOurServices3, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 7, category: "Mobile Development", src: ExploreOurServices1, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 8, category: "Quality Assurance", src: ExploreOurServices3, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region." },
    { id: 9, category: "Quality Assurance", src: ExploreOurServices9, title: "clients", description: "Nafaa is the first complete and integrated system of expropriation in the Arabian Gulf region.", route: "/SSSproject" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredCards = selectedCategory === "All" ? cardsData : cardsData.filter((card) => card.category === selectedCategory);

  return (
    <div className="container sm:mx-auto sm:p-6">
      <div className="flex-col justify-center dark:text-black items-end space-x-2 text-center sm:flex sm:flex-row sm:justify-center sm:space-x-4 mb-6 sm:px-[200px] sm:flex-wrap">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={`px-2 py-3 sm:px-4 sm:py-2 mb-4 rounded-lg font-bold transition-all 
              ${selectedCategory === category 
                ? "bg-primary text-black"  // هنا خليت النص أسود بدل أبيض
                : "border-primary bg-white text-black border rounded-[10px] hover:bg-primary hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards mb-[100px] flex flex-wrap gap-2 sm:gap-4 justify-center">
        {filteredCards.map((card) => (
          <div key={card.id} className="card py-2 w-[45%] sm:w-[30%] bg-base-900 sm:h-[500px] border border-stroke p-4">
            <figure>
              <Link to={card.route || "#"}>
                <img className="sm:w-[405px] sm:h-[382px] w-full h-[200px] dark:text-[#B3E5F1] cursor-pointer" src={card.src} alt={card.title} />
              </Link>
            </figure>
            <div className="flex-col items-start justify-start">
              <h2 className="text-[12px] sm:text-[14px] text-primary font-mons dark:text-[#B3E5F1] font-[600] sm:tracking-[1.6px] mb-2">{card.title}</h2>
              <div className="sm:flex sm:flex-row sm:justify-center sm:items-center dark:text-white">
                <p className="font-mons text-[10px] sm:text-[15px] font-[500] dark:text-[#fff]">{card.description}</p>
                {card.route && (
                  <div className="flex justify-end items-end mt-12 text-[#003540] ps-6 underline text-primary text-[16px] font-[600] tracking-wider whitespace-nowrap dark:text-[#B3E5F1]">
                    <Link to={card.route}><p>See More</p></Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}