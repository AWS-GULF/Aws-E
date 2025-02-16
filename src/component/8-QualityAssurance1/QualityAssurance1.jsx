import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/computer.svg";
import QualityAssurance3 from "../../assets/images/Illustration.svg";
import QualityAssurance4 from "../../assets/images/House.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SSSproject from "../SSSProject/SSSproject";

export default function QualityAssurance1() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>

      <div className="px-4 sm:px-12">
        <div className="mt-16 mb-14 flex justify-center items-center text-xl  text-[#295F70]">
          <span><img src={QualityAssurance} alt="QualityAssurance" className=' text-[#295F70] ' /></span>
          <p className="text-[#295F70] ps-2 font-montserrat text-lg text-hover font-bold text-[16px] tracking-[1.6px] dark:text-[#B3E5F1]">
            Services
          </p>
        </div>

        <div className="flex justify-center items-center">
          <h2 className="text-3xl sm:text-5xl font-montserrat font-bold mb-[80px] text-center text-[#003540] tracking-[4.8px] leading-[75px] dark:text-[#B3E5F1]">
            We ensure flawless performance and reliability for your software
          </h2>
        </div>

        <div className="px-4 sm:px-[121px] flex-col justify-center text-[#003540] items-center dark:text-white">
          <h1 className="text-center text-2xl sm:text-3xl text-[#000]  mb-[20px] text-primary font-montserrat  text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1]">
            Quality Assurance
          </h1>
          <p className="text-aboutCont text-xl text-left font-montserrat  font-normal leading-[30px] tracking-[1.6px] mb-[60px] dark:text-white">
            We believe in fostering a strong, collaborative partnership with our
            clients. Ensuring the quality, functionality, and reliability of the
            products we deliver is a responsibility we take seriously. Beyond
            meeting expectations, we proactively identify and resolve potential
            risks and challenges, striving to exceed contractual commitments with
            excellence.
          </p>
        </div>

        {/* Accurate Deliveries */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4 className="font-montserrat text-lg text-[20px] font-[600]  text-[#000] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
              Accurate Deliveries
            </h4>
            <p className="font-montserrat text-lg text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] dark:text-white">
              Our development team is committed to providing realistic and precise
              timelines for project milestones. This approach ensures timely
              delivery without ever compromising the quality of the final product.
            </p>
          </div>
          <div className="sm:w-1/4">
            <img src={QualityAssurance2} className="w-full" alt="" />
          </div>
        </div>

        {/* Quality Control */}
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
  <div className="sm:w-2/4">
    <img src={QualityAssurance3} className="w-full h-[230px]" alt="Quality Assurance" />
  </div>
  <div className="sm:w-3/4 pt-14 flex flex-col justify-center items-center ps-1">
    <h4 className="font-montserrat text-lg text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
      Quality Control
    </h4>
    <p className="font-montserrat text-lg  text-[#000] text-[16px] font-normal tracking-[1.6px] leading-[30px] dark:text-white">
      While a completely bug-free environment is unattainable, we have developed highly effective testing and diagnostic strategies. These cover both functional and non-functional aspects of your product, ensuring a smooth development process and minimizing friction for end users.
    </p>
  </div>
</div>


        {/* Account Management */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4 className="font-montserrat text-lg text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
              Account Management
            </h4>
            <p className="font-montserrat text-lg text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] dark:text-white">
              For enterprise clients, we assign a dedicated professional from our
              pro-services team to manage your account exclusively throughout the
              entire development and delivery process. This ensures personalized
              support and seamless communication at every stage.
            </p>
          </div>
          <div className="sm:w-1/4">
            <img src={QualityAssurance4} className="w-full" alt="QualityAssurance4" />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="px-4 sm:px-[121px] flex-col justify-center items-center mb-10">
          <h1 className="text-center mb-[20px] text-primary text-[#295F70] text-2xl sm:text-3xl font-montserrat  text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1]">
            Case Studies
          </h1>
          <p className="text-lg leading-relaxed text-[#666] dark:text-white font-montserrat">
          We stick to tried and true digital marketing strategies that we know will have the highest impact on your bottom line. Forget the fluff and empty promises of other companies, we offer services that are more likely to be profitable and sustainable. Check out our suite of digital marketing services designed to help accelerate your funnel.
        </p>
        </div>

        <div className="cards mb-[100px]   flex flex-wrap rounded-lg justify-center gap-4">
          {/* Card 1 */}
          <div className="card bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance5} alt="QualityAssurance5" />
            </figure>
            <div>
              <h2 className="text-[14px] text-[#003540] font-montserrat text-lg font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-montserrat text-[16px] text-[#666] dark:text-white">
                  Nafaa is the first complete and integrated system of
                  expropriation in the Arabian Gulf region.
                </p>
                <div className="flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] tracking-wider whitespace-nowrap">
                  <p>See More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance6} alt="QualityAssurance6" />
            </figure>
            <div>
              <h2 className="text-[14px] text-primary font-montserrat text-lg font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-montserrat text-[16px] text-[#666] dark:text-white">
                  Nafaa is the first complete and integrated system of
                  expropriation in the Arabian Gulf region.
                </p>
                <div className="flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] tracking-wider whitespace-nowrap">
                  <p>See More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance7} alt="QualityAssurance7" />
            </figure>
            <div>
              <h2 className="text-[14px]  text-primary font-montserrat text-lg font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-montserrat text-[14px] font-[500] text-[#666] dark:text-white">
                  Nafaa is the first complete and integrated system of
                  expropriation in the Arabian Gulf region.
                </p>
                <div className="flex justify-end items-end mt-12 dark:text-[#B3E5F1] text-[#003540] ps-6 decoration-1 underline text-primary text-[16px] font-[600] tracking-wider whitespace-nowrap">
                 <Link to="/SSSproject"> <p>See More</p></Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
