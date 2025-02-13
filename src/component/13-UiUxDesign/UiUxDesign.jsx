import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/Omputer.svg";
import QualityAssurance3 from "../../assets/images/Omputer.svg";
import QualityAssurance4 from "../../assets/images/Quality Assurance3.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import kotlin from "../../assets/images/tailwind_css_logo.svg";
import node from "../../assets/images/node.svg";
import oracle from "../../assets/images/oracle.svg";
import radius from "../../assets/images/radius.svg";
import python from "../../assets/images/python5.svg";
import { Link } from 'react-router-dom';

export default function uiUxDesign() {
  return (
    <div>
      <div className="px-4 sm:px-12">
        <div className="mt-16 mb-14 flex justify-center items-center text-[#295F70] text-xl ">
          <span>
            <img src={QualityAssurance} alt="QualityAssurance" className=" " />
          </span>
          <p className="text-[#295F70] text-lg ps-2 font-mons text-hover font-bold text-[16px] tracking-[1.6px] dark:text-[#B3E5F1]">
            Services
          </p>
        </div>

        <div className="flex justify-center items-center">
          <h2 className="text-3xl sm:text-5xl font-mons font-bold mb-[80px]  text-center text-[#003540] tracking-[4.8px] leading-[75px] dark:text-[#B3E5F1]">
          Crafting seamless experiences that drive user satisfaction and business growth.
          </h2>
        </div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center mb-20">
        {[kotlin, oracle, python, radius, node].map((img, index) => (
          <img key={index} src={img} alt="tech" className="w-10 sm:w-20 lg:w-20  mx-auto" />
        ))}
      </div>

        <div className="px-4 sm:px-[121px] flex-col justify-center text-[#003540] items-center dark:text-white">
          <h1 className="text-center text-2xl sm:text-3xl text-[#295F70]  mb-[20px] text-primary font-mons text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1]">
            UI/UX Design
          </h1>
          <p className="text-aboutCont text-xl text-left font-mons font-normal leading-[30px] tracking-[1.6px] mb-[60px] dark:text-white">
            Every interaction within our products is a result of meticulous
            planning and design. From the coding of elements and functions to
            the visual aesthetics, we excel at delivering captivating user
            experiences. Whether for mobile or web, your end users will find the
            experience both seamless and engaging.
          </p>
        </div>

        {/* Accurate Deliveries */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4 className="font-mons text-[20px] font-[600] text-lg text-[#000] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
              Market Research
            </h4>
            <p className="font-mons text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] dark:text-white">
              With the expertise of our seasoned development team, we conduct
              comprehensive market research to analyze current trends,
              conditions, and user preferences. This ensures the creation of a
              digital product that not only meets market demands but also
              retains users and remains relevant for years to come
            </p>
          </div>
          <div className="sm:w-1/4">
            <img src={QualityAssurance2} className="w-full" alt="" />
          </div>
        </div>

        {/* Quality Control */}
        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-[121px] mb-16 gap-8">
          <div className="sm:w-1/4">
            <img src={QualityAssurance3} className=" rounded-r-full" alt="" />
          </div>
          <div className="sm:w-3/4 pt-14 flex-col justify-center items-center ps-1">
            <h4 className="font-mons text-[20px] font-[600] tracking-[2px] mb-4 dark:text-[#B3E5F1]">
              Brand Identity & Custom Branding
            </h4>
            <p className="font-mons text-lg text-[#000] text-[16px] font-normal text-[400] tracking-[1.6px] leading-[30px] dark:text-white">
              Establish a unique visual identity by customizing every aspect of
              your product to reflect your brand. Gain full control over
              elements such as color palettes, shapes, fonts, styles, buttons,
              and overall design direction. Think of your digital product as a
              bespoke masterpiece—crafted to your exact specifications, with
              limitless possibilities to showcase your brand's essence.
            </p>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="px-4 sm:px-[121px] flex-col justify-center items-center mb-10">
          <h1 className="text-center mb-[20px] text-primary text-[#295F70] text-2xl sm:text-3xl font-mons text-[32px] tracking-[3.2px] font-[500] dark:text-[#B3E5F1]">
            Case Studies
          </h1>
          <p className="text-aboutCont text-center font-mons font-normal text-xl text-[#666] leading-[30px] tracking-[1.6px] mb-[60px] dark:text-white">
            We stick to tried and true digital marketing strategies that we know
            will have the highest impact on your bottom line. Forget the fluff
            and empty promises of other companies, we offer services that are
            more likely to be profitable and sustainable. Check out our suite of
            digital marketing services designed to help accelerate your funnel.
          </p>
        </div>

       

        <div className="cards mb-[100px] flex flex-wrap rounded-lg justify-center gap-4">
          {/* Card 1 */}
          <div className="card bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance5} alt="QualityAssurance5" />
            </figure>
            <div>
              <h2 className="text-[17px] text-[#003540] font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons text-[16px]s text-[#666] dark:text-white">
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
              <h2 className="text-[17px] text-primary font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons text-[16px] text-[#666] dark:text-white">
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
              <img className="w-full h-[382px] rounded-xl" src={QualityAssurance7} alt="QualityAssurance7" />
            </figure>
            <div>
              <h2 className="text-[17px] text-primary font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons text-[16px] text-[#666] dark:text-white">
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
