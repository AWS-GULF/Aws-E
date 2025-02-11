import React from "react";
import OutWork1 from "../../assets/images/Out Work1.svg";
import OutWork2 from "../../assets/images/Out Work2.svg";
import OutWork3 from "../../assets/images/Out Work3.svg";
import { useNavigate } from "react-router-dom";

export default function Mainn() {
  const navigate = useNavigate();
  return (
    <>
   <section className="w-[95%] mx-auto my-8">
  <h2 className="bg-color text-center text-4xl sm:text-5xl font-bold p-[40px] sm:p-[60px] dark:text-white">
    OUR WORK
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

    <div className="w-full">
      <img src={OutWork2} alt="Masperts" className="mt-4 w-full cursor-pointer" onClick={() => navigate("maspertsProject")} />
      <div className="mt-2 ml-4 sm:ml-6">
        <h2 className="font-montserrat text-xl sm:text-2xl font-semibold dark:text-white">
          Masperts
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          #Marketing
        </p>
      </div>
    </div>


    <div className="w-full">
      <img src={OutWork1} alt="Uber For Business" className="w-full " />
      <div className="mt-2 ml-4 sm:ml-6">
        <h2 className="font-montserrat text-xl sm:text-2xl font-semibold dark:text-white">
          Uber For Business
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          #Marketing
        </p>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">

    <div className="w-full">
      <img src={OutWork3} alt="Nike Campaign" className=" sm:mt-16 w-full" />
      <div className="mt-2 ml-4 sm:ml-6">
        <h2 className="font-montserrat text-xl sm:text-2xl font-semibold dark:text-white">
          Nike Campaign
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          #Marketing
        </p>
      </div>
      <a href="#" className="bg-text-button inline-block mt-6 sm:mt-[32px] px-4 py-2 rounded-lg text-white font-semibold">
        Explore More of Our Work
        <i className="fa-solid fa-arrow-right mx-2"></i>
      </a>
    </div>

 
    <div className="w-full">
      <img src={OutWork1} alt="Uber For Business" className="w-full" />
      <div className=" ml-4 sm:ml-6">
        <h2 className="font-montserrat text-xl sm:text-2xl font-semibold dark:text-white">
          Uber For Business
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          #Marketing
        </p>
      </div>
    </div>
    
  </div>
</section>

    </>
  );
}
