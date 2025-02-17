import React from "react";
import Services from "../../assets/images/Services.svg";
import { Link } from "react-router-dom";

import "./OutSerices.css";

export default function OurServicesHaedWard() {
  return (
    <>
      <div className="px-4 sm:px-12 mt-24">
        <div className="text-center lg:mr-32 sm:text-left">
          <h1 className="text-3xl text-[#003540] sm:text-[36px] font-bold mb-4 dark:text-[#B3E5F1] font-montserrat">
            Our Services
          </h1>
          <p className="text-xl sm:text-[20px] tracking-wide text-color-fool dark:text-white font-montserrat d">
            We Have the Pleasure of Introducing Ourselves as an Independent
            Solutions Provider of the World's Leading <br /> Brands Related to
            The IT Industry and Software Development.
          </p>

          <div className="grid lg:gap-4 mt-8 w-full lg:w-[110%] grid-cols-1 sm:grid-cols-1  lg:grid-cols-3">
            {/* Card 1 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 flex-1 bg-tooHover group   ">
  <img
    src={Services}
    alt="Services"
    className="w-full h-auto object-cover"
  />
  <div> 
    <h2 className="text-[#003540] pt-4 text-base font-[600] font-montserrat tracking-[1.6px] font-mons group-hover:dark:text-black dark:text-[#B3E5F1]">
      Quality Assurance
    </h2>
    <p className="font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat 
      group-hover:dark:text-black">
      We believe in fostering a strong, collaborative partnership
      with our clients. Ensuring the quality, functionality, and
      reliability of the products we deliver is a responsibility we
      take seriously. Beyond meeting expectations, we proactively
      identify and resolve potential risks and challenges, striving
      to exceed contractual commitments with excellence.
    </p>
    <div className="card-actions justify-start mt-11 bg-text">
      <Link to="QualityAssurance1">
        <button className="underline dark:text-[#B3E5F1]  group-hover:dark:text-black">
          See More
        </button>
      </Link>
    </div>
  </div>
</div>

            {/* Card 2 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
              <img
                src={Services}
                alt="Services"
                className="w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-[#003540] font-montserrat pt-4 text-base font-[600] tracking-[1.6px] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black">
                  Mobile Development
                </h2>
                <p className="font-mons text-[15px] font-[500] text-[#666] mt-4 leading-6 dark:text-white font-montserrat group-hover:dark:text-black">
                  We create innovative, one-of-a-kind iOS and Android
                  applications with exceptional designs and seamless user
                  experiences. Our mobile solutions are designed to elevate your
                  business, showcase your offerings, and captivate your
                  audience, ensuring lasting engagement and satisfaction.
                </p>
                <div className="card-actions justify-start mt-11">
                  <Link to="MobileDevelopment">
                    <button className="underline bg-text dark:text-[#B3E5F1]  group-hover:dark:text-black">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
              <img
                src={Services}
                alt="Services"
                className="w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-[#003540] pt-4 font-montserrat text-base font-[600] tracking-[1.6px] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black">
                  Web Development
                </h2>
                <p className="font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black">
                  We specialize in developing custom web applications tailored
                  to your unique needs, focusing on delivering exceptional UI/UX
                  experiences. Leave concerns like performance optimization,
                  accessibility, functionality, usability, and security to us,
                  so you can focus on streamlining and enhancing your workflow
                </p>
                <div className="card-actions justify-start mt-11 bg-text">
                  <Link to="wepDevlopment">
                    <button className="underline dark:text-[#B3E5F1]  group-hover:dark:text-black">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
              <img
                src={Services}
                alt="Services"
                className="w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-[#003540] pt-4 font-montserrat text-base font-[600] tracking-[1.6px] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black">
                  IT & Hardware
                </h2>
                <p className="font-mons text-[15px] lg:py-3 font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black">
                  Sindion Technology is a professional IT solutions and services
                  provider.We will help you to achieve your IT strategy by
                  providing you system integration, testing, application
                  development and management services and solutions.
                </p>
                <div className="card-actions justify-start mt-11 bg-text">
                  <Link to="iTHardware">
                    <button className="underline dark:text-[#B3E5F1]  group-hover:dark:text-black">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
              <img
                src={Services}
                alt="Services"
                className="w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-[#003540] font-montserrat pt-4 text-base font-[600] tracking-[1.6px] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black">
                  Staff Augmentation
                </h2>
                <p className="font-mons text-[15px] font-[500] text-[#666] mt-2 leading-6 dark:text-white font-montserrat group-hover:dark:text-black">
                  Staff augmentation is a versatile solution that enables
                  organizations to boost agility and quickly adapt to evolving
                  business demands. This approach is widely utilized across
                  industries to fulfill critical roles in Engineering, Product
                  Development, and Operations.
                </p>
                <div className="card-actions justify-start mt-11 bg-text font-montserrat">
                  <Link to="StaffAugmentation">
                    <button className="underline dark:text-[#B3E5F1]  group-hover:dark:text-black">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="border p-3 rounded-xl min-w-[300px] mb-4 bg-tooHover flex-1 group">
              <img
                src={Services}
                alt="Services"
                className="w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-[#003540] pt-4 text-base font-[600] font-montserrat tracking-[1.6px] font-mons dark:text-[#B3E5F1] group-hover:dark:text-black">
                  UI/UX Design
                </h2>
                <p className="font-mons text-[15px] font-[500] text-[#666] mt-2 font-montserrat leading-6 dark:text-white group-hover:dark:text-black">
                  Every interaction within our products is a result of
                  meticulous planning and design. From the coding of elements
                  and functions to the visual aesthetics, we excel at delivering
                  captivating user experiences. Whether for mobile or web, your
                  end users will find the experience both seamless and engaging.
                </p>
                <div className="card-actions justify-start mt-11 bg-text font-montserrat">
                  <Link to="uiUxDesign">
                    <button className="underline dark:text-[#B3E5F1]  group-hover:dark:text-black">
                      See More
                    </button>
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
