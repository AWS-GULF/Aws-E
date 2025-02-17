import React, { useEffect } from 'react'
import QualityAssurance from "../../assets/images/OFFf.svg";
import QualityAssurance2 from "../../assets/images/computer.svg";
import QualityAssurance3 from "../../assets/images/Illustration.svg";
import QualityAssurance4 from "../../assets/images/frame1991.svg";
import QualityAssurance5 from "../../assets/images/hwlk.svg";
import QualityAssurance6 from "../../assets/images/qq.svg";
import QualityAssurance7 from "../../assets/images/Component11.svg";
import QualityAssurance8 from "../../assets/images/Portfolio1.svg";
import kotlin from "../../assets/images/tailwind_css_logo.svg";
import node from "../../assets/images/node.svg";
import oracle from "../../assets/images/oracle.svg";
import radius from "../../assets/images/radius.svg";
import python from "../../assets/images/python5.svg";
import "./WepDevlpment.css"
import { Link } from 'react-router-dom';

export default function WepDevlopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="px-6 sm:px-12 lg:px-24 ">
      <div className="mt-16 mb-14 flex justify-center items-center text-[#295F70] dark:text-[#B3E5F1] text-xl ">
        <img src={QualityAssurance} alt="QualityAssurance" className="w-8 h-8 img-cloro" />
        <p className="ps-2 font-mons text-hover font-bold text-lg tracking-wide">Services</p>
      </div>
      
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-montserrat lg:text-5xl font-bold tracking-[4.8px] leading-tight text-[#003540] dark:text-[#B3E5F1]">
          Innovative web development solutions to empower your business, enhance your online presence, and drive success.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center mb-20">
        {[kotlin, oracle, python, radius, node].map((img, index) => (
          <img key={index} src={img} alt="tech" className="w-10 sm:w-20 lg:w-20 mx-auto" />
        ))}
      </div>

      <div className="text-center mb-10">
        <h1 className="mb-5 text-[#003540] dark:text-[#B3E5F1] font-mons text-2xl sm:text-3xl tracking-wide font-semibold">
          Web Development
        </h1>
        <p className="text-aboutCont text-lg text-[#666] dark:text-white text-left leading-relaxed font-montserrat">
          We specialize in developing custom web applications tailored to your unique needs, focusing on delivering exceptional UI/UX experiences. Leave concerns like performance optimization, accessibility, functionality, usability, and security to us, so you can focus on streamlining and enhancing your workflow.
        </p>
      </div>
      
      {[ 
        { title: "1- Consultation and Discovery Phase:", desc: "Transforming your idea or product into reality can be challenging. We simplify this process by leveraging industry standards for web architecture and development. Our expert team will guide you in identifying the most effective strategies to achieve your goals seamlessly.", img: QualityAssurance2, reverse: false },
        { title: "Brand Identity & Custom Branding", desc: "Design a fully customized, multi-functional dashboard that reflects your brand identity. Our solutions are crafted to enhance user engagement and ensure effortless navigation for your organization’s leaders and administrators.", img: QualityAssurance3, reverse: true },
        { title: "Identity Management and SSO", desc: "Empower your users with secure and intuitive access to your platform. Whether you provide full control over their interactions or enable self-service dashboards, features like social logins and single sign-on (SSO) can enhance their experience and simplify onboarding.", img: QualityAssurance4, reverse: false },
        { title: "Search Engine Optimization (SEO)", desc: "Ensure your platform is built with optimization best practices to drive organic growth and expand your audience reach exponentially.", img: QualityAssurance8, reverse: true }
      ].map((section, index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row items-center gap-8 px-6 sm:px-12 lg:px-24 mb-16 ${section.reverse ? "sm:flex-row-reverse" : ""}`}
        >
          <div className="sm:w-1/2 lg:w-2/3 text-center sm:text-left">
            <h4 className="text-xl font-semibold mb-4 text-[#003540] dark:text-[#B3E5F1]">{section.title}</h4>
            <p className="text-lg leading-relaxed text-[#333] dark:text-white">{section.desc}</p>
          </div>

          <div className="sm:w-1/2 lg:w-1/3">
            <img
              src={section.img}
              alt={section.title}
              className="w-full rounded-xl max-w-xs mx-auto "
            />
          </div>
        </div>
      ))}
      
      <div className="text-center mb-10 mt-40">
        <h1 className="text-primary font-mons text-2xl mb-7 sm:text-3xl tracking-wide font-semibold text-[#003540] dark:text-[#B3E5F1]">
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
              <h2 className="text-[17px] text-base text-[#003540] font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons  text-[16px] text-[#666] dark:text-white font-montserrat">
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
          <div className="card bg-base-100  rounded-lg w-full sm:w-96 border-1 border border-stroke p-4">
            <figure>
              <img className="w-full h-[382px]" src={QualityAssurance6} alt="QualityAssurance6" />
            </figure>
            <div>
              <h2 className="text-[17px] text-primary font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons text-[16px]  text-[#666] dark:text-white font-montserrat">
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
              <h2 className="text-[17px] text-primary font-mons font-[600] tracking-[1.6px] mb-2 dark:text-[#B3E5F1]">
                Clients
              </h2>
              <div className="flex justify-center items-center">
                <p className="font-mons text-[16px]   text-[#666] dark:text-white font-montserrat">
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
