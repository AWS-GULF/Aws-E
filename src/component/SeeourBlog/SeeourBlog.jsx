import React from "react";
import frame7 from "../../assets/images/frame7.svg";
import frame8 from "../../assets/images/Frame8.svg";

export default function SeeourBlog() {
  return (
    <>
<section className="mb-24 relative w-[95%] mx-auto">
  <h1 className="bg-color text-center text-5xl font-bold p-[60px] dark:text-white">
    See our Blog
  </h1>

  <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center">
    <div className="w-full mb-4 lg:mb-0">
      <img src={frame8} alt="" className="w-full" />
      <div className="mt-2 ml-3">
        <p className="bg-color-p dark:text-white">7 Oct 2023</p>
        <h2 className="font-montserrat text-2xl font-semibold bg-colorr my-1 dark:text-white">
          Do More
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white mb-10">
          "Do More" is about pushing boundaries, embracing challenges, and striving for growth. It’s the mindset that drives success by going beyond expectations and making a meaningful impact.
        </p>
      </div>
    </div>

    <div className="w-full">
      <img src={frame7} alt="frame8" className="w-full" />
      <div className="mt-2 ml-3">
        <p className="bg-color-p my-1 dark:text-white">7 Oct 2023</p>
        <h2 className="font-montserrat text-2xl font-semibold bg-colorr dark:text-white">
          The Power of AI
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white mb-10">
          Artificial Intelligence is revolutionizing industries by automating tasks, enhancing decision-making, and driving innovation. Its potential to transform everything from healthcare to business is limitless, shaping a smarter future.
        </p>
      </div>
    </div>
  </div>

  {/* الفlex نفسه لتكرار الصور للمرة الثانية */}
  <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center">
    <div className="w-full mb-4 lg:mb-0">
      <img src={frame8} alt="frame7" className="w-full" />
      <div className="mt-2 ml-3">
        <p className="bg-color-p my-1 dark:text-white">7 Oct 2023</p>
        <h2 className="font-montserrat text-2xl font-semibold bg-colorr dark:text-white">
          Do More
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          "Do More" is about pushing boundaries, embracing challenges, and striving for growth. It’s the mindset that drives success by going beyond expectations and making a meaningful impact.
        </p>
      </div>
    </div>

    <div className="w-full">
      <img src={frame7} alt="frame8" className="w-full" />
      <div className="mt-2 ml-3">
        <p className="bg-color-p my-1 dark:text-white">7 Oct 2023</p>
        <h2 className="font-montserrat text-2xl font-semibold bg-colorr dark:text-white">
          The Power of AI
        </h2>
        <p className="bg-color-p font-montserrat text-sm font-medium dark:text-white">
          Artificial Intelligence is revolutionizing industries by automating tasks, enhancing decision-making, and driving innovation. Its potential to transform everything from healthcare to business is limitless, shaping a smarter future.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

