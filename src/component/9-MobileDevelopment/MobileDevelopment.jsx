import React, { useEffect } from 'react';
import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/computer.svg";
import QualityAssurance3 from "../../assets/images/Illustration.svg";
import QualityAssurance4 from "../../assets/images/House.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import kotlin from "../../assets/images/kotlin.svg";
import node from "../../assets/images/node.svg";
import oracle from "../../assets/images/oracle.svg";
import radius from "../../assets/images/radius.svg";
import python from "../../assets/images/python5.svg";
import { Link } from 'react-router-dom';

export default function MobileDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 sm:px-12 lg:px-24">
      <div className="mt-16 mb-14 flex justify-center items-center text-xl ">
        <img src={QualityAssurance} alt="" className="w-8 h-8" />
        <p className="ps-2 font-montserrat font-bold text-lg tracking-wide text-[#295F70] dark:text-[#B3E5F1]">Services</p>
      </div>
      
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-montserrat lg:text-5xl font-bold  leading-tight text-[#003540] dark:text-[#B3E5F1]">
          Innovative mobile solutions to grow your business on the go.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center mb-20">
        {[kotlin, oracle, python, radius, node].map((img, index) => (
         <img key={index} src={img} alt="tech" className="w-10 sm:w-20 lg:w-28  mx-auto" />
        ))}
      </div>

      <div className="text-center mb-10">
        <h1 className="mb-5 text-[#003540] dark:text-[#B3E5F1] font-montserrat text-2xl sm:text-3xl tracking-wide font-semibold">
          Mobile Development
        </h1>
        <p className="text-aboutCont text-lg text-[#666] font-montserrat dark:text-white text-left leading-relaxed">
          We create innovative, one-of-a-kind iOS and Android applications with exceptional designs and seamless user experiences. Our mobile solutions are designed to elevate your business, showcase your offerings, and captivate your audience, ensuring lasting engagement and satisfaction.
        </p>
      </div>
      
      {[ 
        { title: "UX Design", desc: "Our approach to native app development is rooted in a human-centered philosophy, inspired by the timeless principles of minimalism. By prioritizing elegance, simplicity, and the elimination of unnecessary elements, we craft apps that keep users engaged and delighted", img: QualityAssurance2, reverse: false },
        { title: "Speed", desc: "Speed is critical to delivering a seamless user experience. We ensure your app loads quickly, responds efficiently, and operates flawlessly by integrating the latest speed optimization technologies, making every interaction smooth and satisfying.", img: QualityAssurance3, reverse: true },
        { title: "Security", desc: "Your data and your users' sensitive information are our top priorities. We implement robust security measures to safeguard your product, protect user identities, and maintain the highest level of data integrity and trust.", img: QualityAssurance4, reverse: false }
      ].map((section, index) => (
        <div key={index} className={`flex flex-col sm:flex-row items-center gap-8 px-6 sm:px-12 lg:px-24 mb-16 ${section.reverse ? 'sm:flex-row-reverse' : ''}`}>
          <div className="sm:w-1/2 lg:w-2/3 text-center sm:text-left">
            <h4 className="text-xl font-semibold mb-4 text-[#003540] dark:text-[#B3E5F1]">{section.title}</h4>
            <p className="text-lg leading-relaxed text-[#333] dark:text-white">{section.desc}</p>
          </div>
          <div className="sm:w-1/2 lg:w-1/3">
            <img src={section.img} alt={section.title} className="w-full rounded-l-full max-w-xs mx-auto" />
          </div>
        </div>
      ))}
      
      <div className="text-center mb-10 mt-40">
        <h1 className="font-montserrat text-2xl mb-7 sm:text-3xl tracking-wide font-semibold text-[#003540] dark:text-[#B3E5F1]">
          Case Studies
        </h1>
        <p className="text-lg leading-relaxed text-[#666] dark:text-white font-montserrat">
          We stick to tried and true digital marketing strategies that we know will have the highest impact on your bottom line. Forget the fluff and empty promises of other companies, we offer services that are more likely to be profitable and sustainable. Check out our suite of digital marketing services designed to help accelerate your funnel.
        </p>
      </div>
      
      <div className="cards mb-[100px] flex flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <div className="card bg-base-100 w-full sm:w-96 border-1 rounded-lg border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance5} alt="QualityAssurance5" />
            </figure>
            <div>
              <h2 className="text-[17px] text-[#003540] font-montserrat font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-montserrat text-[16px] text-[#666] dark:text-white ">
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
          <div className="card bg-base-100 rounded-lg w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance6} alt="QualityAssurance6" />
            </figure>
            <div>
              <h2 className="text-[17px] text-primary font-montserrat font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
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
          <div className="card rounded-lg bg-base-100 w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance7} alt="QualityAssurance7" />
            </figure>
            <div>
              <h2 className="text-[17px] text-primary font-montserrat font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-montserrat text-[16px] text-[#666] dark:text-white">
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
  );
}
