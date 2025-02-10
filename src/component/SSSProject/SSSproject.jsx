import React from "react";
import QualityAssurance1 from "../../assets/images/sr-gray.svg";
import QualityAssurance2 from "../../assets/images/ss3.svg";
import QualityAssurance3 from "../../assets/images/s1.svg";
import QualityAssurance4 from "../../assets/images/s4.svg";
import QualityAssurance6 from "../../assets/images/s6.svg";
export default function SSSproject() {
  return (
    <div>
      <div className=" flex justify-center my-16 text-justify gap-2">
        <img src={QualityAssurance1} alt="QualityAssurance1" />
        <h1 className="dark:text-[#B3E5F1] ">Case Study</h1>
      </div>

      <div className="text-2xl flex justify-center  gap-5 ">
        <img src={QualityAssurance2} alt="QualityAssurance2 " />
        <h2 className="text-center mt-9 text-5xl font-bold text-[#003540]">
          {" "}
          Triple s
        </h2>
      </div>
      <div className="mt-20 text-center w-full tracking-[1.6px] font-montserrat text-[16px] font-normal leading-[30px] ">
      <div className="text-center md:text-left px-4 md:px-16 lg:px-24">
  <p className=" text-[16px]  text-[#333] md:text-[18px] lg:text-[20px] dark:text-white leading-[1.8]">
    The introduction Smart Support System (SSS) is an integrated ticketing
    system initially designed by AWS to serve as a maintenance tool for projects
    sold to partners. Over time, it has evolved to cater to external companies,
    streamlining their internal structures. The core objective is to minimize
    problem resolution time, enhance client email management, and boost overall
    productivity. The system is built on three main interfaces, offering a
    comprehensive solution for efficient issue resolution.
  </p>
  <img
  src={QualityAssurance3}
  alt="Quality Assurance"
  className="m-auto mt-8 w-[90%] sm:w-[70%] md:w-[60%] lg:w-full max-w-none"
/>

</div>

    
        {/*  */}
        <div className="flex flex-col md:flex-row justify-center mt-11 gap-4 mx-6 md:mx-24">
  <div className="bg-[#EAF5F6] p-7 rounded-lg w-full md:w-1/2">
    <h4 className="dark:text-[#B3E5F1] text-black font-montserrat text-[20px] font-semibold tracking-[2px] dark:text-[black]">
      Mission
    </h4>
    <p className="mt-4 text-black font-montserrat text-[16px] font-normal leading-[30px] tracking-[1.6px] dark:text-black">
      To empower organizations with Smart Support System (SSS), a cutting-edge ticketing solution designed to revolutionize problem resolution. Our mission is to provide a seamless, efficient, and collaborative platform that enhances communication between employees, clients, and external partners. SSS aims to streamline internal structures, reduce problem resolution time, and elevate overall productivity for businesses relying on maintenance and after-sales operations.
    </p>
  </div>
  <div className="bg-[#EAF5F6] p-7 rounded-lg w-full md:w-1/2">
    <h4 className="text-center text-black font-montserrat text-[20px] mt-4 font-semibold tracking-[2px] dark:text-[black]">
      Vision
    </h4>
    <p className="text-black font-montserrat text-[16px] font-normal leading-[30px] tracking-[1.6px] dark:text-black">
      We envision Smart Support System (SSS) as the forefront of innovative ticketing solutions, setting new standards in problem management. Our vision is to be the go-to platform for companies seeking a comprehensive, user-friendly, and customizable system. SSS aspires to foster a work environment where communication flows effortlessly, problems are swiftly addressed, and organizations achieve peak efficiency. We aim to continually evolve and adapt, ensuring SSS remains a trusted ally in enhancing operational excellence for businesses worldwide.
    </p>
  </div>
</div>


        <div className="mt-32 mx-11">
          <h4 className="text-[#003540]   text-3xl dark:text-[#B3E5F1] ">Interfaces</h4>
          <div className=" text-left mt-16 ">
            <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">Admin Interface:</h4>
            <p className="mt-3 text-[#000] text-[20px] dark:text-white ">
              Exclusively designed for administrators, this interface, provides
              a comprehensive overview of all external tickets allocated to the
              technical team. <br />
               Administrators can efficiently manage and assign tickets,
              ensuring a smooth workflow for their technical team. Additionally,
              administrators have the capability to add companies (clients),
              countries, cities, and departments, ensuring a dynamic and
              adaptive system.
            </p>
          </div>
          <div className=" ">
            <img
              src={QualityAssurance4}
              alt="QualityAssurance4 "
              className="m-auto w-[80%]"
            />
          </div>
        </div>

        <div className="mt-16 mx-11">
          <div className=" text-left ">
            <h4 className="text-[rgb(0,53,64)] text-3xl dark:text-[#B3E5F1] ">Support Interface:</h4>
            <p className="mt-3 text-[#000] text-[20px]  dark:text-white">
              Specifically designed for the company's internal use, this
              interface empowers employees to resolve internal tickets swiftly.{" "}
              <br />
               It serves as a dedicated platform for addressing challenges
              within departments or across various branches, streamlining
              internal issue resolution processes.
            </p>
          </div>
          <div className=" text-left mt-6 ">
            <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">
              Smart Support Interface:
            </h4>
            <p className="mt-3 text-[#000] text-[20px] dark:text-white ">
              An exclusive platform for AWS employees, this interface enables
              the resolution of external tickets. Our support team works
              diligently to address external issues reported by customers and
              affiliated companies, ensuring a seamless experience.
            </p>
          </div>
          <div className=" ">
            <img
              src={QualityAssurance6}
              alt="QualityAssurance6 "
              className="m-auto w-[80%]"
            />
          </div>
        </div>

        <div className=" mx-11">

          <div className=" text-left ">
            <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">Company Interface:</h4>
            <p className="mt-3 text-[#000] text-[20px]  dark:text-[#fff]">
              Tailored for companies utilizing the Smart Support System, this
              interface allows for the efficient management of organizational
              hierarchies. Companies can seamlessly add branches, fostering a
              structured and organized workflow and them employees.
            </p>
          </div>
          <div className=" ">
            <img
              src={QualityAssurance4}
              alt="QualityAssurance4 "
              className="m-auto w-[80%]"
            />
          </div>
        </div>

        <div className=" mx-11">
          <div className=" text-left ">
            <h4 className="text-[#003540] text-3xl dark:text-[#B3E5F1] ">Employee Interface:</h4>
            <p className="mt-3 text-[#000] text-[20px] dark:text-white ">
              Individually designed for employees, this interface facilitates
              the submission of external tickets to AWS, addressing
              system-related issues. Simultaneously, employees can raise
              internal tickets to resolve challenges encountered within their
              department or across different branches, eliminating the need for
              intricate communication channels.
            </p>
          </div>
          <div className=" ">
            <img
              src={QualityAssurance4}
              alt="QualityAssurance4 "
              className="m-auto w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
