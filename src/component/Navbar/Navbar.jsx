import { useState, useEffect } from "react";
import icon from "../../assets/images/icon.svg";
import logo from "../../assets/images/Logo.svg";
import { Switch, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, Navbar as FlowbiteNavbar, Navbar } from "flowbite-react";

export default function CustomNavbar({ toggleLanguage }) {
  const [darkMode, setDarkMode] = useState(false);
console.log(toggleLanguage)
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#242424";
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());

      if (newMode) {
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = "#242424";
      } else {
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = "";
      }

      return newMode;
    });
  };

  return (
    <>
  <Navbar fluid rounded className="bg-white  dark:bg-[#242424] px-4 m-0">
         
          <Navbar.Brand href="/markting" className="flex items-center space-x-3 rtl:space-x-reverse">
      
        <img
          src={logo}
          className="w-full   sm:w-1/2  md:w-11/12 lg:w-full"
          alt="Logo"
        />
    </Navbar.Brand>
    
    
       
          <div className="md:hidden">
            <Navbar.Toggle />
          </div>
    
        
          <Navbar.Collapse>
        
    <li className="relative group ">
      <Link href="#" className=" text-[#666] dark:text-white relative   md:mr-3 lg:ml-0 ml-3 lg:mr-16">
        Services
        <i className="fa-solid  fa-chevron-down absolute hidden  lg:block md:ml-16 ml-3 lg:ml-[67px] lg:mt-0 md:mt-0 md:top-3  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
      </Link>
      {/* Dropdown Menu */}
         <div className="absolute z-[99]  hidden sm:w-[70vw] lg:w-[50vw]   left-0 transition-opacity duration-1000 ease-in-out group-hover:block bg-white border border-gray-100  rounded-lg shadow-md  ">
. <div className="flex  justify-center gap-6">
        <ul className="space-y-4 p-4">
      
               <li>
                 <Link
                   to="webDevelopment"
                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                 >
                   Brand & Design
                 </Link>
                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
               </li>
               <li>
                 <Link
                   to="mobileDevelopment"
                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                 >
                   Website Solutions{" "}
                 </Link>
                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
               </li>
               <li>
                 <Link
                   to="qualityAssurance"
                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                 >
                   Digital Marketing
                 </Link>
                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
               </li>
               <li>
                 <Link
                   to="uiUxDesign"
                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                 >
                   Marketing Consultation
                 </Link>
                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
               </li>
        </ul>
       
           <div className=" ">
             <div className="flex flex-col gap-6 mt-6">
             {/* <a
                 href=""
                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
               >
                 <img src={icon} alt="iconNav" className="w-6 h-6" />
                 digital marketing
               </a>
               <p className="text-[#666] dark:text-[#666] font-medium">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eius, voluptate!
               </p>
            */}
               <a
                 href=""
                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
               >
                 <img src={icon} alt="iconNav" className="w-6 h-6" />
                 digital marketing
               </a>
               <p className="text-[#666] dark:text-[#666] font-medium">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eius, voluptate!
               </p>
             </div>
             <div className="flex flex-col gap-6 mt-6 ">
               <a
                 href=""
                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
               >
                 <img src={icon} alt="iconNav" className="w-6 h-6" />
                 digital marketing
               </a>
               <p className="text-[#666] dark:text-[#666] font-medium">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Eius, voluptate!
               </p>
             </div>
           </div>
           </div>
           </div>
      
      
    </li>
    
    
            {/* ///////////////////////////////////////////////////////////////////////// */}
            <Navbar.Link href="careers" className="dark:text-white md:mr-3 lg:mr-16    block text-[#666] cursor-pointer">
            <li className="relative group ">
        <a
          href="#"
          className="  text-[#666] dark:text-white "
        >
          Industries
        </a>
        <i className="fa-solid fa-chevron-down hidden lg:block absolute   md:ml-16 lg:ml-20 lg:mt-0 md:mt-0 md:top-3  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>

        {/* Dropdown Menu */}
                 <div className="absolute z-[99]  hidden sm:w-[70vw] lg:w-[50vw]   left-0 transition-opacity duration-1000 ease-in-out group-hover:block bg-white border border-gray-100  rounded-lg shadow-md  ">

          <ul className="flex flex-wrap justify-start py-10 px-5 gap-20 w-full">
            {/* ////////////////////////////////////////////////////////*/}
            {/* صف 1 */}
            <div className=" flex flex-col gap-5">
              <div className="flex justify-start gap-3 w-1/3 ">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Health Care
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Education
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Manufacturers
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Technology
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Logistics
                  </a>
                </li>
              </div>
            </div>

            {/* صف 2 */}
            <div className=" flex flex-col gap-5">
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Law Firms
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Financial
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Business Services
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Shopify Store
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Energy
                  </a>
                </li>
              </div>
            </div>

            {/* صف 3 */}
            <div className=" flex flex-col gap-5">
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Real Estate
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Restaurants
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Retail Industry
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    E-Resideince Companies
                  </a>
                </li>
              </div>
              <div className="flex justify-start gap-3 w-1/3">
                <img src={icon} alt="iconNav" className="w-6 h-6" />
                <li>
                  <a
                    href="#"
                    className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
                  >
                    Consulting Firms
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </li>
      

    </Navbar.Link>
    {/* ..................................................................................... */}
            <Navbar.Link href="About" className="dark:text-white md:mr-3 lg:mr-16  text-[#666] cursor-pointer">
           
            <li className="relative group">
        <a
          href="#"
          className=" text-[#666] dark:text-white relative"
        >
          Portfolio
          <i className="fa-solid fa-chevron-down absolute hidden lg:block md:ml-16 ml-3 lg:ml-[67px] lg:mt-0 md:mt-0 md:top-3  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
          </a>
        {/* Dropdown Menu */}
        <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md ">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="jobOpenings"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Websites
              </Link>
            </li>
            <li>
              <Link
                to="internships"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Logos
              </Link>
            </li>
            <li>
              <Link
                to="culture"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Brand Identity
              </Link>
            </li>
            <li>
              <Link
                to="culture"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Social Media
              </Link>
            </li>
            <li>
              <Link
                to="culture"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Graphic
              </Link>
            </li>
            <li>
              <Link
                to="culture"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Ads
              </Link>
            </li>
          </ul>
        </div>
      </li>
            </Navbar.Link>
            {/* ////////////////////////////////////////////////////////////////////////// */}
    
            <Navbar.Link href="careers" className="dark:text-white md:mr-3 lg:mr-16 block text-[#666] cursor-pointer">
            <li className="relative group">
        <a
          href="#"
          className=" relative"
        >
          Resources
          <i className="fa-solid fa-chevron-down absolute hidden lg:block md:ml-16 ml-3 lg:ml-20 lg:mt-0 md:mt-0 md:top-3  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
          </a>

        {/* Dropdown Menu */}
        <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="project1"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="project2"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="project3"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="project3"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Website Grader
              </Link>
            </li>
            <li>
              <Link
                to="project3"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                SEO Audit
              </Link>
            </li>
          </ul>
        </div>
      </li>
             </Navbar.Link>
    
            {/* /////////////////////////////////////////////////////////////////////// */}
            <Navbar.Link href="careers" className="dark:text-white md:mr-3 lg:mr-16 block text-[#666] cursor-pointer">
            <li className="relative group">
        <a
          href="#"
          className=" relative "
        >
          About
          <i className="fa-solid fa-chevron-down absolute hidden lg:block md:ml-16 ml-3 lg:ml-[38px]  lg:mt-0 md:mt-0 md:top-3 left-5  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
          </a>
        {/* Dropdown Menu */}
        <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="latestPosts"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="techNews"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                OUT Clients
              </Link>
            </li>
            <li>
              <Link
                to="industryInsights"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Associations and Awards
              </Link>
            </li>
            <li>
              <Link
                to="industryInsights"
                className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
              >
                <img src={icon} alt="iconNav" />
                Customer Reviews
              </Link>
            </li>
            <li>
              <Link
                to="industryInsights"
                className="text-[#666] hover:text-[#5BA89C]  whitespace-nowrap  flex gap-2 "
              >
                <img src={icon} alt="iconNav" />
                Join Our Team
              </Link>
            </li>
          </ul>
        </div>
      </li>
            </Navbar.Link>
            {/* ////////////////////////////////*/}
       
            <div className="block md:hidden mt-2 md:mr-3  my-5 lg:mr-16">
            <FormControlLabel
                control={
                  <Switch
                    className="mx-8 lg:mx-2"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    name="darkMode"
                    size="small"
                    sx={{
                      transform: "scale(1.5)",
                    }}
                  />
                }
              />
              <button className=" bg-[#003540] w-full dark:bg-[#B3E5F1] rounded-2xl py-4 px-6 my-4 mx-auto text-amber-50 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 lg:my-3 lg:mx-5">
                hhhhhhhh
              </button>
    
             
             
            </div> 
          </Navbar.Collapse>
    
         
          <div className="hidden md:flex md:order-2">
          <FormControlLabel
                control={
                  <Switch
                    className="mx-8 lg:mx-2 "
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    name="darkMode"
                    size="small"
                    sx={{
                      transform: "scale(1.6)",
                    }}
                  />
                }
              />
               <Button className="   dark:bg-[#B3E5F1] bg-[#5BA89C]  rounded-3xl text-base  mt-1 mx-auto sm:py-2 sm:px-4 md:py-3 md:px-5   lg:my-3 lg:mx-5">
      Contact Us
    </Button>
             <hr  className="w-2 h-2" />
          </div>
       
        </Navbar>
    </>
  );
}

// {/* <FlowbiteNavbar
// fluid={true}
// rounded={true}
// className="bg-white py-5 dark:bg-[#242424] border-gray-200 shadow-sm m-0 p-0"
// >
// <div className="flex flex-wrap items-center justify-between px-[28px] mx-auto w-full">
//   {/* Logo on the left */}
//   <Link
//     to="/"
//     className="flex items-center space-x-3 rtl:space-x-reverse"
//   >
//     <img
//       src={logo}
//       className="w-full  sm:w-1/2 md:w-11/12 lg:w-full"
//       alt="Logo"
//     />
//   </Link>

//   {/* Right Side: Icons, Dark Mode, Contact Button, Language and Toggle */}
//   <div className="flex items-center ml-auto gap-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
//     {/* Mobile Menu Button */}
//     <FlowbiteNavbar.Toggle />
//   </div>

//   {/* Navbar Menu (Collapse on mobile) */}
//   <FlowbiteNavbar.Collapse>
//     <ul className="flex flex-col mr-64 mt-4 left-0 font-medium md:flex-row md:mt-0 md:space-x-6 rtl:space-x-reverse">
//       {/* Services Dropdown */}
//       <li className="relative group">
//         <a
//           href="#"
//           className="block mt-2 lg:py-6 py-3 lg:px-5 text-[#666] dark:text-white relative  hover:text-[#5BA89C] whitespace-nowrap"
//         >
//           Services
//           <i className="fa-solid  fa-chevron-down absolute  md:block  hidden left-[80px] top-9 transform -translate-y-1/2 transition-transform  group-hover:rotate-180 text-[#666]"></i>
//         </a>
//         {/* Dropdown Menu */}
//         <div className="absolute z-[99]  hidden sm:w-[70vw] lg:w-[50vw]   left-0 transition-opacity duration-1000 ease-in-out group-hover:block bg-white border border-gray-100  rounded-lg shadow-md  ">
//           <div className="flex w-full p-9 gap-6 flex-wrap lg:flex-nowrap">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="webDevelopment"
//                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                 >
//                   Brand & Design
//                 </Link>
//                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
//               </li>
//               <li>
//                 <Link
//                   to="mobileDevelopment"
//                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                 >
//                   Website Solutions{" "}
//                 </Link>
//                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
//               </li>
//               <li>
//                 <Link
//                   to="qualityAssurance"
//                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                 >
//                   Digital Marketing
//                 </Link>
//                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
//               </li>
//               <li>
//                 <Link
//                   to="uiUxDesign"
//                   className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                 >
//                   Marketing Consultation
//                 </Link>
//                 <div className="w-40 my-2 h-1 bg-[#5BA89C]"></div>
//               </li>
//             </ul>

//             <div className="flex flex-col gap-6">
//               <a
//                 href=""
//                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
//               >
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 digital marketing
//               </a>
//               <p className="text-[#666] dark:text-[#666] font-medium">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eius, voluptate!
//               </p>
//             </div>
//             <div className="flex flex-col gap-6">
//               <a
//                 href=""
//                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
//               >
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 digital marketing
//               </a>
//               <p className="text-[#666] dark:text-[#666] font-medium">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eius, voluptate!
//               </p>
//             </div>
//             <div className="flex flex-col gap-6">
//               <a
//                 href=""
//                 className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] whitespace-nowrap flex gap-2"
//               >
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 digital marketing
//               </a>
//               <p className="text-[#666] dark:text-[#666] font-medium">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eius, voluptate!
//               </p>
//             </div>
//           </div>
//         </div>
//       </li>

//       {/* About Dropdown */}
//       <li className="relative group flex">
//         {/* عنوان القسم */}
//         <a
//           href="#"
//           className="block lg:mt-2  lg:py-6 py-3 lg:px-5 gap-5 text-[#666] dark:text-white"
//         >
//           Industries
//         </a>
//         <i className="fa-solid   fa-chevron-down absolute  md:block  hidden left-[85px] top-11 ml-2 transform -translate-y-1/2 transition-transform  group-hover:rotate-180 text-[#666]"></i>

//         {/* Dropdown Menu */}
//         <div className="absolute z-[99]  hidden sm:w-[70vw] lg:w-[50vw] lg:mt-20 mt-11  left-0 transition-opacity duration-1000 ease-in-out group-hover:block bg-white border border-gray-100  rounded-lg shadow-md ">
//           <ul className="flex flex-wrap justify-start py-10 px-5 gap-20 w-full">
//             {/* ////////////////////////////////////////////////////////// */}
//             {/* صف 1 */}
//             <div className=" flex flex-col gap-5">
//               <div className="flex justify-start gap-3 w-1/3 ">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Health Care
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Education
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Manufacturers
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Technology
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Logistics
//                   </a>
//                 </li>
//               </div>
//             </div>

//             {/* صف 2 */}
//             <div className=" flex flex-col gap-5">
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Law Firms
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Financial
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Business Services
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Shopify Store
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Energy
//                   </a>
//                 </li>
//               </div>
//             </div>

//             {/* صف 3 */}
//             <div className=" flex flex-col gap-5">
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Real Estate
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Restaurants
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Retail Industry
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     E-Resideince Companies
//                   </a>
//                 </li>
//               </div>
//               <div className="flex justify-start gap-3 w-1/3">
//                 <img src={icon} alt="iconNav" className="w-6 h-6" />
//                 <li>
//                   <a
//                     href="#"
//                     className="text-[#666] dark:text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap"
//                   >
//                     Consulting Firms
//                   </a>
//                 </li>
//               </div>
//             </div>
//           </ul>
//         </div>
//       </li>
//       {/* Portfolio Dropdown */}
//       <li className="relative group">
//         <a
//           href="#"
//           className="block mt-2 lg:py-6 py-3 lg:px-5  text-[#666] dark:text-white relative"
//         >
//           Portfolio
//           <i className="fa-solid  fa-chevron-down absolute  md:block  hidden left-[85px] top-9  transform -translate-y-1/2 transition-transform  group-hover:rotate-180 text-[#666]"></i>
//         </a>
//         {/* Dropdown Menu */}
//         <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md ">
//           <ul className="space-y-4 p-4">
//             <li>
//               <Link
//                 to="jobOpenings"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Websites
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="internships"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Logos
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="culture"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Brand Identity
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="culture"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Social Media
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="culture"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Graphic
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="culture"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Ads
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </li>

//       {/* Resources Dropdown */}
//       <li className="relative group">
//         <a
//           href="#"
//           className="block mt-2 lg:py-6 py-3 lg:px-5 text-[#666] dark:text-white relative"
//         >
//           Resources
//           <i className="fa-solid  fa-chevron-down absolute  md:block  hidden left-[85px] top-9 ml-2 transform -translate-y-1/2 transition-transform  group-hover:rotate-180 text-[#666]"></i>
//         </a>

//         {/* Dropdown Menu */}
//         <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md">
//           <ul className="space-y-4 p-4">
//             <li>
//               <Link
//                 to="project1"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="project2"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Case Studies
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="project3"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 FAQs
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="project3"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Website Grader
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="project3"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2 whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 SEO Audit
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </li>

//       {/* About Dropdown */}
//       <li className="relative group">
//         <a
//           href="#"
//           className="block mt-2 lg:py-6 py-3 lg:px-5 text-[#666] dark:text-white  relative"
//         >
//           About
//           <i className="fa-solid  fa-chevron-down absolute  md:block  hidden left-[70px] top-9  transform -translate-y-1/2 transition-transform  group-hover:rotate-180 text-[#666]"></i>
//         </a>
//         {/* Dropdown Menu */}
//         <div className="absolute  hidden mr-10 pr-6 group-hideen:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-[99] rounded-lg shadow-md">
//           <ul className="space-y-4 p-4">
//             <li>
//               <Link
//                 to="latestPosts"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Case Studies
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="techNews"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 OUT Clients
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="industryInsights"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Associations and Awards
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="industryInsights"
//                 className="text-[#666] hover:text-[#5BA89C] flex gap-2  whitespace-nowrap"
//               >
//                 <img src={icon} alt="iconNav" />
//                 Customer Reviews
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="industryInsights"
//                 className="text-[#666] hover:text-[#5BA89C]  whitespace-nowrap  flex gap-2 "
//               >
//                 <img src={icon} alt="iconNav" />
//                 Join Our Team
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </li>
//     </ul>
//     {/* <button onClick={toggleLanguage}>

//     <i className="fa-solid fa-globe mt-4 md:ml-4 text-base lg:ml-1 pb-3 lg:py-5 text-[#666]  dark:text-white">
//       {" "}
//       العربية
//     </i>
//     </button> */}

//     {/* Dark Mode Switch */}
//     <FormControlLabel
//       control={
//         <Switch
//           className="mx-8 mt-1 lg:mx-2"
//           checked={darkMode}
//           onChange={toggleDarkMode}
//           name="darkMode"
//           size="small"
//           sx={{
//             transform: "scale(1.7)",
//           }}
//         />
//       }
//     />

//     {/* Contact Us Button */}
//     <Button className="   dark:bg-[#B3E5F1] bg-[#5BA89C] my-8 rounded-3xl text-base py-4 px-6 mt-1 mx-auto sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-4 lg:px-6  lg:my-3 lg:mx-5">
//       Contact Us
//     </Button>
//   </FlowbiteNavbar.Collapse>
// </div>
// </FlowbiteNavbar> */}