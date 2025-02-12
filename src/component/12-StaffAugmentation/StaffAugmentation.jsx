import React, { useEffect } from 'react';
import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance3 from "../../assets/images/computer.svg";

export default function StaffAugmentation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="">
            <div className="sm:ms-12 sm:me-12">
                <div className="mt-16 mb-14 flex justify-center items-center text-xl ">
                    <img src={QualityAssurance} alt="QualityAssurance2" />
                    <p className="ps-2 font-montserrat text-[#003540]  dark:text-[#B3E5F1] text-hover font-bold text-xl tracking-[1.6px]">
                        Services
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <h2 className="text-4xl font-montserrat text-[#003540] dark:text-[#B3E5F1] font-bold mb-[80px] text-center tracking-[4.8px] leading-[75px]">
                        Scale your team with top-tier talent, tailored to your project needs.
                    </h2>
                </div>

                <div className="px-[121px] flex-col justify-center items-center">
                    <h1 className="text-center text-[#003540] dark:text-[#B3E5F1] mb-[20px] text-primary font-montserrat text-[32px] tracking-[3.2px] font-[500]">
                        Staff Augmentation
                    </h1>
                    <p className="text-aboutCont text-xl text-center text-[#666] dark:text-white font-montserrat font-normal leading-[30px] tracking-[1.6px] mb-[60px]">
                        Staff augmentation is a versatile solution that enables organizations
                        to boost agility and quickly adapt to evolving business demands. This
                        approach is widely utilized across industries to fulfill critical
                        roles in Engineering, Product Development, and Operations.
                    </p>
                </div>

               
                <div className="flex flex-col sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Identify: Specialized Skills
                        </h4>
                        <p className="font-montserrat text-[16px] text-xl text-[#666] dark:text-white font-normal tracking-[1.6px] leading-[30px]">
                            Share the Job description for the open roles, hire one employee or
                            100 for a month or a lifetime
                        </p>
                    </div>

                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                </div>

                <div className="flex flex-col-reverse  sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                    <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Access to larger talent pool
                        </h4>
                        <p className="font-montserrat text-xl text-xl text-[#666] dark:text-white font-normal tracking-[1.6px] leading-[30px]">
                            Provide shortlisted candidates from its talents pool with 10,000+
                            candidates
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Interview
                        </h4>
                        <p className="font-montserrat text-xl font-normal text-[#666] dark:text-white tracking-[1.6px] leading-[30px]">
                            Run your own interview if needed for the shortlisted candidates
                            (optional step)
                        </p>
                    </div>
                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                </div>

                <div className="flex  flex-col-reverse sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                    <div className="w-full  sm:w-3/4 pt-14 flex-col-reverse justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Hire
                        </h4>
                        <p className="font-montserrat text-xl text-[#666] dark:text-white font-normal tracking-[1.6px] leading-[30px]">
                            Sign statement of work (SOW) and start working, flexible terms
                            that match your business, and suitable for your use case
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Onboard
                        </h4>
                        <p className="font-montserrat text-xl font-normal text-[#666] dark:text-white tracking-[1.6px] leading-[30px]">
                            Our seamless onboard process ensures your employees join your team
                            and get up to speed quickly employers and employees enjoy fully
                            self-serve onboarding and management tools
                        </p>
                    </div>
                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-center items-center px-[121px] mb-16 gap-16">
                    <div className="w-full sm:w-1/4">
                        <img src={QualityAssurance3} className="w-full rounded-l-full" alt="" />
                    </div>
                    <div className="w-full sm:w-3/4 pt-14 flex-col justify-center items-center ps-1 mt-[-30px]">
                        <h4 className="font-montserrat text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
                            Invoice & pay
                        </h4>
                        <p className="font-montserrat text-xl font-normal text-[#666] dark:text-white tracking-[1.6px] leading-[30px]">
                            Handle payroll, tax, benefits, and compliance for your globally
                            distributed team here, with no hidden fees
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}