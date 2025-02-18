import React, { useEffect } from 'react';



import QualityAssurance4 from "../../assets/images/Quality Assurance5.svg";
import { Link, Element } from "react-scroll";
import sr from "../../assets/images/OFFf.svg";
import QualityAssurance from "../../assets/images/Omputer.svg";

export default function ITHardware() {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-6 sm:px-0">
        <div className="  sm:ms-12 sm:me-12">
          <div className="  mt-4 sm:mt-16 mb-8 sm:mb-14 flex justify-center items-center">
            <img src={sr} alt="" />
            <p className="ps-2 font-mons text-hover  font-bold text-[16px] tracking-[1.6px dark:text-[#B3E5F1] ">
              Services
            </p>
          </div>

          <div className="flex-col justify-center items-center ">
            <h2 className="sm:text-4xl text-[20px] font-mons font-bold mb-[60px] sm:mb-[80px] text-center  dark:text-[#B3E5F1]  sm:tracking-[4.8px] sm:leading-[75px] ">
              Innovative IT and software solutions to bring your ideas to life
              and drive success
            </h2>
            <p className=" sm:mt-5 text-center pb-[70px] font-normal  px-5 font-mons text-[15px] sm:text-[20px] tracking-[2px] leading-[35px] text-secondary">
              <span className="font-[500] pe-1">
                AWs Technology
              </span>
              is a professional IT solutions and services provider.We will help
              you to achieve your IT strategy by providing you system
              integration, testing, application development and management
              services and solutions.
            </p>
          </div>

          <h2 className="text-center font-mons text-[32px] font-bold tracking-[3.2px] pb-8 dark:text-[#B3E5F1] ">
            Services
          </h2>

          <div className="flex  justify-center items-center pb-16 ">
            <ul className="flex-col  sm:flex sm:flex-row  justify-center items-center dark:text-[#B3E5F1]  ">
              <div className="flex  justify-between ms-2 sm:ms-0">
                <li className=" w-[40%] dark:text-[#B3E5F1]  sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="ITHardware"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer  "
                  >
                    {" "}
                    IT Hardware & Software Solutions
                  </Link>
                </li>
                <li className=" w-[40%] sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to=" Data Center "
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    Data Center Development
                  </Link>
                </li>
              </div>
              <div className="flex justify-between ms-2 sm:ms-0 ">
                <li className=" w-[40%] sm:w-fit mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="Network"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    Network Services
                  </Link>
                </li>
                <li className=" w-[40%] sm:w-fit  mb-2 sm:mb-0 sm:pe-6 font-mons sm:text-[16px] text-primary font-bold sm:p-4 p-1  hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                  <Link
                    to="Professional"
                    spy={true}
                    smooth={true}
                    className="cursor-pointer"
                  >
                    {" "}
                    IT Professional Services
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <Element name="ITHardware">
            <div className="flex-col justify-center items-start sm:px-12 ">
              <h2 className="text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1]  ">
                IT Professional Services
              </h2>
              <p className="text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal  text-[#fff] text-[#666]leading-[30px] tracking-[1.6px] mb-[60px] ">
                AWS Technology offers a comprehensive range of hardware
                solutions to meet diverse business needs, including:
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px]  ">
            <div className="ps-4 w-3/4 m-auto   sm:hidden ">
              <img
                src={QualityAssurance}
                className="sm:w-[437px] sm:h-[367px] w-full"
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4 ">
              <h4 className="font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] dark:text-[#fff] tracking-[2px] font-[600] mb-1 ">
                1- IT Hardware Products:
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4  dark:text-[#fff]">
                Providing high-quality IT hardware products to ensure optimal
                performance and reliability for your infrastructure.
              </p>
              <h4 className="font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] tracking-[2px] font-[600] mb-1 dark:text-[#fff]">
                2- IT Hardware Architecture Designing Consultation Services:
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Providing high-quality IT hardware products to ensure optimal
                performance and reliability for your infrastructure.
              </p>
              <h4 className="font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] tracking-[2px] font-[600] mb-1 dark:text-[#fff]">
                3- Network Equipment:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Providing high-quality IT hardware products to ensure optimal
                performance and reliability for your infrastructure.
              </p>
              <h4 className="font-mons  text-[#000] pb-4 text-[16px] sm:text-[20px] tracking-[2px] font-[600] mb-1 dark:text-[#fff]">
                4- Surveillance Equipment:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Providing high-quality IT hardware products to ensure optimal
                performance and reliability for your infrastructure.
              </p>
            </div>
            <div className="ps-4 w-3/4 m-auto ms-20    hidden sm:block  dark:text-[#fff]">
              <img
                src={QualityAssurance}
                className="w-full"
                alt=""
              />
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name=" Data Center ">
            <div className="flex-col justify-center items-end sm:px-12 mt-10 sm:mt-0">
              <h2 className="text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1] ">
                Data Center Development{" "}
              </h2>
              <p className="text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] dark:text-[#fff]">
                AWS Technology provides end-to-end data center development
                services, ensuring reliability and efficiency at every stage:
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start gap-20 items-start sm:px-12 sm:pt-8 sm:mb-[60px] bg--950 dark:text-[#fff]   ">
            <div className="ps-4 w-3/4 m-auto bg--700 ">
              <img
                src={QualityAssurance}
                className="  w-full "
                alt=""
              />
            </div>

            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4 className="font-mons text-[#000] pb-4 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                1- Planning and Designing:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Crafting detailed plans and designs to meet your business
                requirements and up-time standards.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                2- IT Hardware Equipment and Configuration:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Delivering and configuring top-tier hardware for seamless
                integration into your data center.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                3- Implementation:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Executing the development process with precision to ensure
                optimal functionality.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                4- Commissioning and Testing:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Conducting rigorous testing and commissioning to guarantee
                performance, scalability, and compliance.
              </p>
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name="Network">
            <div className="flex-col justify-center items-start sm:px-12 mt-10 sm:mt-0">
              <h2 className="text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1] ">
                Network Services{" "}
              </h2>
              <p className="text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] dark:text-[#fff]">
                AWS Technology offers customized network solutions and
                professional services in network architecture, information
                security, and unified communications:
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px] ">
            <div className="ps-4 w-3/4 m-auto   sm:hidden ">
              <img
                src={QualityAssurance}
                className="sm:w-[437px] sm:h-[367px] w-full"
                alt=""
              />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4 className="font-mons text-[#000] pb-4 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                1- Network Infrastructure Designing and Implementation:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Designing and implementing robust network infrastructures
                tailored to your business needs.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                2- Directory Services Configuration:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Configuring directory services to ensure seamless management and
                access control across your network.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                3- E-mail and Print Servers Configuration:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Setting up and optimizing email and print servers for efficient
                communication and document management.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                4- Video Telephony:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Implementing video telephony solutions to enhance remote
                communication and collaboration.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                5- Wireless Network Solutions:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal mb-4 dark:text-[#fff]">
                Providing secure and reliable wireless network solutions to
                support mobility and flexibility in your operations.
              </p>
            </div>
            <div className="ps-4 w-3/4 m-auto    hidden sm:block ">
              <img
                src={QualityAssurance}
                className="w-full"
                alt=""
              />
            </div>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Element name="Professional">
            <div className="flex-col justify-center items-start sm:px-12 mt-10 sm:mt-0">
              <h2 className="text-center  mb-[20px] text-primary font-mons text-[16px] sm:text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1] ">
                IT Professional Services{" "}
              </h2>
              <p className="text-aboutCont text-center text-[14px] sm:text-[16px] font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] dark:text-[#fff]">
                AWS Technology delivers top-tier IT professional services to
                ensure seamless integration and operational excellence:
              </p>
            </div>
          </Element>

          <div className="sm:flex sm:flex-row flex-col justify-start items-start sm:px-12 sm:pt-8 sm:mb-[60px]">
            <div className="ps-4 w-3/4 m-auto me-20">
              <img src={QualityAssurance} className="sm:w-[437px] sm:h-[367px] w-full  " alt="" />
            </div>
            <div className="flex-col justify-start items-start  sm:w-3/4">
              <h4 className="font-mons text-[#000] pb-4 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                1- Commissioning and Testing for Fiber Optics:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal dark:text-[#fff]">
                Comprehensive services for fiber optics, including laying,
                termination, and splicing to ensure optimal performance.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                2- Passive Components Installation for Fiber Optics:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal dark:text-[#fff]">
                Expert installation of passive components to enhance the
                efficiency and reliability of fiber optic networks.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                3- Installation and Configuration Services for Certified
                Hardware with SLA Agreement:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal dark:text-[#fff]">
                Providing installation and configuration services for all
                certified hardware, backed by Service Level Agreements (SLA) for
                guaranteed support.
              </p>
              <h4 className="font-mons text-[#000] pb-4 pt-6 text-[20px] tracking-[2px] font-[600] dark:text-[#fff]">
                4- Installation and Configuration of Surveillance Equipment:{" "}
              </h4>
              <p className="font-mons text-[#000] text-[16px] tracking-[1.6px] leading-[30px] font-normal pb-10 dark:text-[#fff]">
                Delivering end-to-end installation and configuration services
                for advanced surveillance systems to ensure secure environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
