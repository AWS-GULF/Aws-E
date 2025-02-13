
import React, { useEffect } from "react";
import blog from "../../assets/images/blog.svg";
import blog1 from "../../assets/images/blog2.svg";
import blog3 from "../../assets/images/blog3.svg";
import "./Blogg.css"
import Modell from "../16-Modell/Modell";
export default function BlogHeroWord() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="px-8 w-[85%] mt-9 m-auto py-16">
      <div className="flex flex-wrap md:flex-nowrap gap-10 ">
        <div className="w-full md:w-1/2">
          <div className="mb-10">
            <img src={blog} className="w-full" alt="AI in Social Media" />
            <p className="text-sm text-secondary mt-4 dark:text-white font-montserrat">23 July 2024</p>
            <p className="text-gray-700 text-lg mt-2 dark:text-white font-montserrat">
              Discover how AI is revolutionizing social media marketing. This
              blog explores the benefits of AI-powered tools, from enhanced
              audience targeting and personalized user experiences to predictive
              analytics and automation. Learn how businesses are leveraging AI
              to optimize their social media strategies.
            </p>
            <p className="mt-4 bg-text  underline font-bold  w py-2 rounded dark:text-[#B3E5F1] font-montserrat">
              Read Article
            </p>
          </div>

          <div>
            <img src={blog3} className="w-full" alt="Video Production" />
            <p className="text-sm text-secondary mt-4 dark:text-white font-montserrat">22 August 2023</p>
            <p className="text-gray-700 text-lg mt-2 dark:text-white font-montserrat">
              Discover how AI is revolutionizing social media marketing. This
              blog explores the benefits of AI-powered tools, from enhanced
              audience targeting and personalized user experiences to predictive
              analytics and automation. Learn how businesses are leveraging AI
              to optimize their social media strategies.
            </p>
            <p className="mt-4 bg-text  underline font-bold  w py-2 rounded dark:text-[#B3E5F1] font-montserrat">
              Read Article
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold tracking-wider mb-6 bg-text mt-36 dark:text-white font-montserrat">
            BLOG, UPDATES AND NEWS
          </h2>
          <p className="mb-32 mt-4 bg-text  underline font-bold  w py-2  rounded dark:text-[#B3E5F1] font-montserrat">
              Read Article
            </p>

          <div>
            <img src={blog1} className="w-full" alt="Marketing" />
            <p className="text-sm text-secondary mt-4 dark:text-white font-montserrat">22 August 2023</p>
            <p className="text-gray-700 text-lg mt-2 dark:text-white font-montserrat">
              Discover how AI is revolutionizing social media marketing. This
              blog explores the benefits of AI-powered tools, from enhanced
              audience targeting and personalized user experiences to predictive
              analytics and automation. Learn how businesses are leveraging AI
              to optimize their social media strategies.
            </p>
            <p className="mt-4 bg-text  underline font-bold  w py-2 rounded dark:text-[#B3E5F1] font-montserrat">
              Read Article
            </p>
          </div>
        </div>
      </div>

      {/* القسم الأخير */}
      <div className="mt-16 flex flex-wrap md:flex-nowrap items-center justify-around">
        <p className="text-3xl font-bold tracking-wide text-[#333] dark:text-white font-montserrat">
          Ready to take your business to the <br /> next level? Let’s create something <br />
          extraordinary together!
        </p>
        <button className="  backGroundButton  sm:px-6  dark:text-[#333]  dark:bg-[#B3E5F1]  py-1 px-6  backGroundButtonn md:m-auto text-white font-bold my-12 rounded-2xl   transition">
          <Modell/>
          </button>
      </div>
    </div>
  );
}
