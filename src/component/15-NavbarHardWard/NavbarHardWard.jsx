
import ModellButtonNavbar from "../ModellButtonNavbar/ModellButtonNavbar";
import { Switch, FormControlLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navbar, Button ,Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logooo.svg";
import logo1 from "../../assets/images/Awslogo2.svg";
import Careers from "../19-Careers/Careers";
import About from "../18-Aboutt/Aboutt";
import OurWork from "../14-OurWork/OurWork";
export default function NavbarHardWard() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#242424";
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#242424";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
    }
  };
  return (
    <Navbar fluid rounded className="bg-white  dark:bg-[#242424] px-4 py-3">
      {/* الجزء الأيسر: الشعار */}
      <Navbar.Brand href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  
    <img
      src={darkMode ? logo1 : logo}
      className="w-full py-3 sm:w-1/2 ml-6 md:w-11/12 lg:w-full"
      alt="Logo"
    />
</Navbar.Brand>


   
      <div className="md:hidden">
        <Navbar.Toggle />
      </div>

    
      <Navbar.Collapse>
    
<li className="relative group ">
  <Link href="#" className=" text-[#666] dark:text-white relative md:mr-3 lg:mr-16">
    Services
    <i className="fa-solid fa-chevron-down absolute md:block md:ml-16 ml-3 lg:mt-0 md:mt-0 md:top-3  mt-3   transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
  </Link>
  {/* Dropdown Menu */}
  <div className="absolute opacity-0 mr-10 group-hover:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md ml-16 lg:ml-0 mt-4 lg:mt-8">
    <ul className="space-y-4 p-4">
      <li>
        <a to="wepDevlopment" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          Web Development
        </a>
      </li>
      <li>
        <a to="mobileDevelopment" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          Mobile Development
        </a>
      </li>
      <li>
        <a to="qualityAssurance1" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          Quality Assurance
        </a>
      </li>
      <li>
        <a to="uiUxDesign" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          UI/UX Design
        </a>
      </li>
      <li>
        <a href="StaffAugmentation" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          Staff Augmentation
        </a>
      </li>
      <li>
        <a href="ITHardware" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
          IT Hardware
        </a>
      </li>
    </ul>
  </div>
</li>

        {/* ///////////////////////////////////////////////////////////////////////// */}
        <Navbar.Link 
  href="OurWork" 
  className="group text-[#666] dark:text-white md:mr-3 lg:mr-16 cursor-pointer"
>    
    Work
 
</Navbar.Link>
{/* ..................................................................................... */}
        <Navbar.Link href="About" className="dark:text-white md:mr-3 lg:mr-16  text-[#666] cursor-pointer">
       
                 About
         
        </Navbar.Link>
        {/* ////////////////////////////////////////////////////////////////////////// */}

        <Navbar.Link href="careers" className="dark:text-white md:mr-3 lg:mr-16 block text-[#666] cursor-pointer">
              Careers
         </Navbar.Link>

        {/* /////////////////////////////////////////////////////////////////////// */}
        <Navbar.Link href="" className="dark:text-white md:mr-3 lg:mr-16  text-[#666] cursor-pointer ">
        
                 Blog
     
        </Navbar.Link>
        {/* ////////////////////////////////// */}
   
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
            <ModellButtonNavbar/>
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
        <button className=" bg-[#003540] dark:bg-[#B3E5F1]  rounded-2xl py-4 px-6 mt-1 mx-auto text-amber-50 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 lg:my-3 lg:mx-5">
            <ModellButtonNavbar/>
          </button>
       
         <hr  className="w-2 h-2" />
      </div>
   
    </Navbar>
    
  );
}






















// import React, { useState, useEffect } from "react";
// import logo from "../../assets/images/logooo.svg";
// import logo1 from "../../assets/images/Awslogo2.svg";
// import { Switch, FormControlLabel } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Button, Dropdown, Navbar } from "flowbite-react";
// import ModellButtonNavbar from "../ModellButtonNavbar/ModellButtonNavbar";

// export default function NavbarComponent() {
  // const [darkMode, setDarkMode] = useState(false);

  // // Load dark mode preference from localStorage
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode === "true") {
  //     setDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //     document.body.style.backgroundColor = "#242424";
  //   }
  // }, []);

  // // Toggle dark mode
  // const toggleDarkMode = () => {
  //   const newMode = !darkMode;
  //   setDarkMode(newMode);
  //   localStorage.setItem("darkMode", newMode.toString());

  //   if (newMode) {
  //     document.documentElement.classList.add("dark");
  //     document.body.style.backgroundColor = "#242424";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     document.body.style.backgroundColor = "";
  //   }
  // };

//   return (
//     <Navbar fluid={true} rounded={true} className="bg-white my-3 py-5 dark:bg-[#242424] border-gray-200 shadow-sm m-0 p-0">
//       <div className="flex flex-wrap items-center justify-between text-xl px-[28px] mx-auto w-full">
//         {/* Logo on the left */}
        // <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //   <img
        //     src={darkMode ? logo1 : logo} // Change logo based on dark mode
        //     className="w-full py-3 sm:w-1/2 md:w-11/12 lg:w-full"
        //     alt="Logo"
        //   />
        // </a>

        // {/* Right Side: Icons, Dark Mode, Contact Button, Language and Toggle */}
        // <div className="flex items-center ml-auto gap-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
        //   {/* Mobile Menu Button */}
        //   <Navbar.Toggle />
        // </div>

//         {/* Navbar Menu (Collapse on mobile) */}
//         <Navbar.Collapse>
//           <ul className="flex flex-col mt-4 left-0 font-medium md:flex-row md:mt-0 md:space-x-6 rtl:space-x-reverse">
//             {/* Services Dropdown */}
//             <li className="relative group">
//               <a href="#" className="block mt-2 lg:py-6 py-3 lg:px-5 text-[#666] dark:text-white relative">
//                 Services
//                 <i className="fa-solid fa-chevron-down absolute md:block left-[85px] top-1/2 transform -translate-y-1/2 transition-transform group-hover:rotate-180 text-[#666]"></i>
//               </a>
//               {/* Dropdown Menu */}
//               <div className="absolute opacity-0 mr-10 group-hover:opacity-100 left-0 transition-opacity duration-500 ease-in-out group-hover:block bg-white border border-gray-100 z-10 rounded-lg shadow-md ml-16 lg:ml-0 mt-4 lg:mt-8">
//                 <ul className="space-y-4 p-4">
//                   <li>
//                     <a href="wepDevlopment" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       Web Development
//                     </a>
//                   </li>
//                   <li>
//                     <a href="mobileDevelopment" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       Mobile Development
//                     </a>
//                   </li>
//                   <li>
//                     <a href="qualityAssurance1" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       Quality Assurance
//                     </a>
//                   </li>
//                   <li>
//                     <a href="uiUxDesign" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       UI/UX Design
//                     </a>
//                   </li>
//                   <li>
//                     <a href="StaffAugmentation" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       Staff Augmentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="ITHardware" className="text-[#666] hover:text-[#5BA89C] inline-block whitespace-nowrap">
//                       IT Hardware
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>

//             {/* Other Navigation Links */}
//             <li>
//               <Link to="ourWork" className="block py-2 px-3 lg:py-8 text-[#666] dark:text-white">
//                 Work
//               </Link>
//             </li>
//             <li>
//               <Link to="about" className="block py-2 px-3 lg:py-8 text-[#666] dark:text-white">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="careers" className="block py-2 px-3 lg:py-8 text-[#666] dark:text-white">
//                 Careers
//               </Link>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-3 mr-72 lg:py-8 text-[#666] dark:text-white">
//                 Blog
//               </a>
//             </li>
//           </ul>
//           <i className="fa-solid fa-globe mt-4 md:ml-4 lg:ml-1 pb-3 lg:py-5 text-[#666] dark:text-white"> العربية</i>

//           {/* Dark Mode Switch */}
          // <FormControlLabel
          //   control={
          //     <Switch
          //       className="mx-8 lg:mx-2"
          //       checked={darkMode}
          //       onChange={toggleDarkMode}
          //       name="darkMode"
          //       size="small"
          //       sx={{
          //         transform: "scale(1.5)",
          //       }}
          //     />
          //   }
          // />
//           {/* Contact Us Button */}
          // <button className=" bg-[#003540] dark:bg-[#B3E5F1] rounded-2xl py-4 px-6 mt-1 mx-auto text-amber-50 sm:py-2 sm:px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 lg:my-3 lg:mx-5">
          //   <ModellButtonNavbar/>
          // </button>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// }