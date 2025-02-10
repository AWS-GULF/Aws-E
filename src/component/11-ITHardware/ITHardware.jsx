import React, { useEffect } from 'react';
import QualityAssurance from "../../assets/images/sr-gray.svg";
import QualityAssurance2 from "../../assets/images/accurate.svg";
import QualityAssurance3 from "../../assets/images/qc.svg";
import QualityAssurance4 from "../../assets/images/Quality Assurance5.svg";
import { Link, Element } from "react-scroll";

export default function ITHardware() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sm:ms-12 sm:me-12 ">
            <div className="mt-16 mb-14 flex justify-center items-center">
                <img src={QualityAssurance} alt="" />
                <p className="ps-2 font-mons text-hover text-[#003540] dark:text-[#B3E5F1] font-bold text-[16px] tracking-[1.6px]">
                    Services
                </p>
            </div>

            <div className="flex-col justify-center items-center">
                <h2 className="text-4xl font-mons font-bold mb-[80px] text-center tracking-[4.8px] leading-[75px] dark:text-[#B3E5F1]">
                    Innovative IT and software solutions to bring your ideas to life and drive success
                </h2>
                <p className="mt-5 text-center pb-[70px] text-[#666] dark:text-white font-normal px-5 font-mons text-[20px] tracking-[2px] leading-[35px] text-secondary">
                    <span className="text-[#003540] dark:text-[#B3E5F1] font-bold pe-1">
                        Sindion Technology
                    </span>
                    is a professional IT solutions and services provider. We will help you to achieve your IT strategy by providing you system integration, testing, application development and management services and solutions.
                </p>
            </div>

            <h2 className="text-center font-mons text-[32px] text-[#003540] dark:text-[#B3E5F1] font-bold tracking-[3.2px] pb-8">
                Services
            </h2>

            <div className="flex justify-center items-center pb-16">
                <ul className="flex justify-center items-center">
                    <li className="pe-6 font-mons text-[16px] text-[#003540] dark:text-[#B3E5F1] font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                        <Link
                            to="ITHardware"
                            spy={true}
                            smooth={true}
                            className="cursor-pointer text-[#003540] dark:text-[#B3E5F1]"
                        >
                            IT Hardware & Software Solutions
                        </Link>
                    </li>
                    <li className="pe-6 font-mons text-[16px] text-primary dark:text-[#B3E5F1] font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                        <Link
                            to="Data Center"
                            spy={true}
                            smooth={true}
                            className="cursor-pointer text-[#003540] dark:text-[#B3E5F1]"
                        >
                            Data Center Development
                        </Link>
                    </li>
                    <li className="pe-6 font-mons text-[16px] text-primary dark:text-[#B3E5F1] font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                        <Link
                            to="Network"
                            spy={true}
                            smooth={true}
                            className="cursor-pointer text-[#003540] dark:text-[#B3E5F1]"
                        >
                            Network Services
                        </Link>
                    </li>
                    <li className="pe-6 font-mons text-[16px] text-primary dark:text-[#B3E5F1] font-bold p-4 hover:bg-hover hover:rounded-[10px] hover:transition-all hover:duration-200">
                        <Link
                            to="Professional"
                            spy={true}
                            smooth={true}
                            className="cursor-pointer text-[#003540] dark:text-[#B3E5F1]"
                        >
                            IT Professional Services
                        </Link>
                    </li>
                </ul>
            </div>

            <Element name="ITHardware">
                <div className="flex-col justify-start items-start px-12">
                    <h2 className="font-mons text-[32px] tracking-[3.2px] font-[500] text-[#003540] dark:text-[#B3E5F1] pb-5">
                        IT Professional Services
                    </h2>
                    <p className="text-[#666] dark:text-white font-mons text-[20px] tracking-[2px] leading-[30px] ps-1">
                        Sindion Technology offers a comprehensive range of hardware solutions to meet diverse business needs, including:
                    </p>
                </div>
            </Element>

            <div className="flex justify-start items-start px-12 pt-8 mb-[60px]">
                <div className="flex-col justify-start items-start w-full md:w-3/4">
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 text-[20px] tracking-[2px] font-[600]">
                        1- IT Hardware Products:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing high-quality IT hardware products to ensure optimal performance and reliability for your infrastructure.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        2- IT Hardware Architecture Designing Consultation Services:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing high-quality IT hardware products to ensure optimal performance and reliability for your infrastructure.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        3- Network Equipment:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing high-quality IT hardware products to ensure optimal performance and reliability for your infrastructure.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        4- Surveillance Equipment:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing high-quality IT hardware products to ensure optimal performance and reliability for your infrastructure.
                    </p>
                </div>
                <div className="w-full md:w-1/4 ps-4 flex items-center">
                    <img src={QualityAssurance2} className="w-full h-auto md:w-[437px] md:h-[367px]" alt="" />
                </div>
            </div>

            {/* Part 2 */}
            <Element name="Data Center">
                <div className="flex-col justify-start items-start px-12">
                    <h2 className="font-mons text-[32px] text-[#003540] dark:text-[#B3E5F1] tracking-[3.2px] font-[500] pb-5">
                        Data Center Development
                    </h2>
                    <p className="text-[#666] dark:text-white font-mons text-[20px] tracking-[2px] leading-[30px] ps-1">
                        Sindion Technology provides end-to-end data center development services, ensuring reliability and efficiency at every stage:
                    </p>
                </div>
            </Element>

            <div className="flex justify-start items-start px-12 pt-8 mb-[60px]">
                <div className="w-full md:w-1/4 ps-4 flex items-center">
                    <img src={QualityAssurance3} className="w-full h-auto md:w-[437px] md:h-[367px]" alt="" />
                </div>
                <div className="flex-col justify-start items-start w-full md:w-3/4 ps-3">
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 text-[20px] tracking-[2px] font-[600]">
                        1- Planning and Designing:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Crafting detailed plans and designs to meet your business requirements and up-time standards.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        2- IT Hardware Equipment and Configuration:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Delivering and configuring top-tier hardware for seamless integration into your data center.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        3- Implementation:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Executing the development process with precision to ensure optimal functionality.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        4- Commissioning and Testing:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Conducting rigorous testing and commissioning to guarantee performance, scalability, and compliance.
                    </p>
                </div>
            </div>

            {/* Part 3 */}
            <Element name="Network">
                <div className="flex-col justify-start items-start px-12">
                    <h2 className="font-mons text-[32px] tracking-[3.2px] font-[500] text-[#003540] dark:text-[#B3E5F1] pb-5">
                        Network Services
                    </h2>
                    <p className="text-[#666] dark:text-white font-mons text-[20px] tracking-[2px] leading-[30px] ps-1">
                        Sindion Technology offers customized network solutions and professional services in network architecture, information security, and unified communications:
                    </p>
                </div>
            </Element>

            <div className="flex justify-start items-start px-12 pt-8 mb-[60px]">
                <div className="flex-col justify-start items-start w-full md:w-3/4 ps-3">
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 text-[20px] tracking-[2px] font-[600]">
                        1- Network Infrastructure Designing and Implementation:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Designing and implementing robust network infrastructures tailored to your business needs.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        2- Information Security Solutions:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing solutions to secure your network, protect your data, and ensure compliance with security standards.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        3- Unified Communications:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Implementing unified communications solutions that enhance collaboration, mobility, and productivity.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        4- Network Maintenance and Support:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Offering ongoing network maintenance and support services to ensure reliable and efficient operation.
                    </p>
                </div>
                <div className="w-full md:w-1/4 ps-4 flex items-center">
                    <img src={QualityAssurance4} className="w-full h-auto md:w-[437px] md:h-[367px]" alt="" />
                </div>
            </div>

            {/* Part 4 */}
            <Element name="Professional">
                <div className="flex-col justify-start items-start px-12">
                    <h2 className="font-mons text-[32px] tracking-[3.2px] font-[500] text-[#003540] dark:text-[#B3E5F1] pb-5">
                        IT Professional Services
                    </h2>
                    <p className="text-[#666] dark:text-white font-mons text-[20px] tracking-[2px] leading-[30px] ps-1">
                        We provide expert IT professional services to support your organization’s needs across various domains, including:
                    </p>
                </div>
            </Element>

            <div className="flex justify-start items-start px-12 pt-8 mb-[60px]">
                <div className="flex-col justify-start items-start w-full md:w-3/4">
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 text-[20px] tracking-[2px] font-[600]">
                        1- IT Consulting:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Expert consulting services to guide your organization through complex IT decisions, ensuring strategic alignment and success.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        2- IT Training and Support:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Providing training and support to ensure your staff is equipped to use and maintain the IT systems efficiently.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        3- IT Project Management:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Managing IT projects from inception to completion, ensuring timely delivery, budget adherence, and quality results.
                    </p>
                    <h4 className="font-mons text-[#000] dark:text-[#B3E5F1] pb-4 pt-6 text-[20px] tracking-[2px] font-[600]">
                        4- Systems Integration:
                    </h4>
                    <p className="font-mons text-[#666] dark:text-white text-[16px] tracking-[1.6px] leading-[30px] font-normal">
                        Delivering seamless integration of disparate systems to improve operational efficiency and data flow.
                    </p>
                </div>
                <div className="w-full md:w-1/4 ps-4 flex items-center">
                    <img src={QualityAssurance2} className="w-full h-auto md:w-[437px] md:h-[367px]" alt="" />
                </div>
            </div>
        </div>
    );
}