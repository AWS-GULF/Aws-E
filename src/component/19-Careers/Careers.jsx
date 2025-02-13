import React from "react";
import QualityAssurance1 from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/Frame 336.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faDollarSign,
  faLightbulb,
  faUsers,
  faBook,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import QualityAssurance3 from "../../assets/images/11.svg";
import QualityAssurance4 from "../../assets/images/y2.svg";
import QualityAssurance5 from "../../assets/images/y3.svg";
import QualityAssurance6 from "../../assets/images/y4.svg";
import QualityAssurance7 from "../../assets/images/y5.svg";
import QualityAssurance8 from "../../assets/images/y6.svg";
import { Link } from "react-router-dom";
export default function Careers() {

    
const jobs = [
    {
      id: 1,
      title: "Multimedia Marketing Project Manager",
      department: "Department: Digital Marketing",
      creation: "Creation date: 2024-11-14",
      Description: ""
    },
    {
      id: 2,
      title: "Multimedia Marketing Project Manager",
      department: "Department: Digital Marketing",
      creation: "Creation date: 2024-11-14",
    },
    {
      id: 3,
      title: "Multimedia Marketing Project Manager",
      department: "Department: Digital Marketing",
      creation: "Creation date: 2024-11-14",
    },
  
  
  ];
  
  
  return (
    <div>
      <div className=" flex justify-center m-auto my-14 gap-1 text-xl ">
        <img src={QualityAssurance1} alt="QualityAssurance1" />
        <h1 className="  text-[#003540] font-bold dark:text-[#B3E5F1] ">Join US </h1>
      </div>

      <div className="flex justify-center items-center text-center">
        <p className="text-5xl text-center font-bold tracking-[4.8px]  mb-2 leading-[75px] font-mons  text-[#003540] dark:text-[white]">
          {" "}
          Join the team where <br />
          innovation meets excellence.
        </p>
      </div>

      <div className=" mb-[42px]  ">
        <p className=" text-aboutCont text-center   tracking-[1.4px] font-normal leading-[35px]  font-mons text-[20px] text-[#666]  dark:text-[#fff] ">
          Our teams consist of exceptional product managers, designers, web and
          mobile developers, and quality engineers , <br /> dedicated to
          delivering projects on time while upholding the highest development
          standards.
        </p>
      </div>

<div className=" flex justify-center">
    <img src={QualityAssurance2} alt="QualityAssurance2 w-full   " />
</div>
      

      
{/*  */}


<div className=" text-[#000] mt-24 w-[95%]  font-mons font-normal leading-[35px] tracking-[1.4px] mb-[100px] flex-col justify-center m-auto items-center">
      <h2 className="text-[28px] text-[#295F70] font-mons text-center font-bold tracking-[.64px] pb-8 dark:text-[#B3E5F1]">
        Current Openings
      </h2>

      {jobs.length === 0 && <p className="text-[#000] sm:p-6 p-0 bg-[#EAF5F6] rounded-[10px]  font-mons font-semibold leading-[35px] tracking-[1.4px]">- Sorry, There are no open vacancies currently.</p>}

      <ul className="flex-col justify-center items-center sm:justify-start w-full   space-y-6  text-center sm:text-start ">
        {jobs.map((job) => (
          <li key={job.id} className="sm:p-6 p-0   sm:w-full  bg-[#EAF5F6] rounded-[10px]">
          <Link className="text-[#003540] underline font-bold text-2xl  tracking-[1.69px]" to={`/careers/${job.id}`}>
              {job.title}
            </Link>

            <div className="text-[#000] font-mons font-normal sm:leading-[35px] sm:tracking-[1.4px] dark:text-[#666]">
              {" "}
              <p>{job.department}</p>
              <p>{job.creation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

{/*  */}
<div className="what-makes">
        <h2 className="text-[28px] font-mons text-center text-[#295F70] font-bold tracking-[.64px] pb-8 text-primary dark:text-[#fff]">
          What makes AWS GULF a great place to work
        </h2>
      </div>

      <div className="what-makes-icons mb-[140px]">
        <ul className="flex flex-wrap sm:gap-4 justify-center gap-3 ">
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={QualityAssurance3} className="w-8 h-8 mb-6 dark:text-[#B3E5F1]" alt="QualityAssurance3 " />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px] dark:text-[#B3E5F1]">
              Growth and Career Path
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              AWS carefully selects the Top 2% of tech talents <br /> and offers them
              whatever is needed for them to <br /> grow.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={QualityAssurance4} className="w-8 h-8 mb-6" alt="QualityAssurance4" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px]  dark:text-[#B3E5F1]">
              Compensation
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              AWS carefully selects the Top 2% of tech talents <br /> and offers them
              whatever is needed for them to <br /> grow.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={QualityAssurance5} className="w-8 h-8 mb-6" alt="QualityAssurance5" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px] dark:text-[#B3E5F1]">
              Gaining experience
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              Dealing with teammates of different expertise <br /> will help you gain
              more experience. Also you will <br /> be learning and introduced to the
              latest <br />technologies.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col ">
            <img src={QualityAssurance6} className="w-8 h-8 mb-6" alt="QualityAssurance6" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px] dark:text-[#B3E5F1] justify-evenly">
              Culture and Work <br /> Environment
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              Looking for positive workplace culture? That’s <br /> AMS team where you
              can find all the support. <br /> We do go through hard times and
              workloads, <br /> but when we decide to take a break and have <br /> fun Nothing
              Can Stop Us!
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col  ">
            <img src={QualityAssurance7} className="w-8 h-8 mb-6" alt=" QualityAssurance7" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px] dark:text-[#B3E5F1] justify-evenly">
              Learning budget
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              AMS invests a lot in its team’s training and <br /> continuous learning
              process, so each and <br /> everyone in the team gets well prepared to
              any <br /> challenges they face in any project.
            </p>
          </li>
          <li className="w-[40%] sm:w-[30%] flex-col rounded-lg ">
            <img src={QualityAssurance8} className="w-8 h-8 mb-6" alt="QualityAssurance8" />
            <h5 className="text-aboutCont font-mons text-lg sm:text-2xl font-bold tracking-[.48px] dark:text-[#B3E5F1]  justify-evenly">
              Diverse projects
            </h5>
            <p className="text-secondary font-normal text-[16px] tracking-[.32px] dark:text-[#fff] justify-evenly">
              At AMS, you will gain a lot of experience thanks <br /> to the variety of
              projects in different fields and <br /> sectors you will be working on.
            </p>
          </li>
        </ul>

      </div>


    </div>
  );
}
