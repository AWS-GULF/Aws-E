import React, { useEffect, useState } from "react";
import logo from "../../assets/images/LogoWhite.svg";
import logo1 from "../../assets/images/LogoDark.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
export default function FooterHardWard() {
   const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const [currentLogo, setCurrentLogo] = useState(logo);
  
    useEffect(() => {
      const checkDarkMode = () => {
        const isDark = document.documentElement.classList.contains("dark");
        setCurrentLogo(isDark ? logo1 : logo);
      };
  
      
      checkDarkMode();
  
      
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, { attributes: true });
  
      return () => observer.disconnect();
    }, []);
  
  return (

    <div>
   <div className="lg:flex lg:justify-evenly lg:items-start lg:pt-16   Footer border-t ">
        <footer className="footer flex-col justify-center items-center w-[100%] flex text-base-content  lg:flex-row lg:justify-between lg:items-start  lg:ps-12 lg:pe-12  ">
          <div className="w-full lg:w-[40%] ">
            <aside className="w-full flex lg:flex-col  justify-center items-center">
              <div className=" flex-col text-center items-center lg:justify-start  lg:items-start  w-[50%] mt-4   lg:w-36 lg:mt-[-5px]  lg:m-auto ">
                <img src={currentLogo} className={`mx-auto w-[50%] sm:w-[150px]  lg:w-full ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo  ":""}  `} />
                <p className="lg:text-6 mx-auto  text-lg font-Arial text-primary font-semibold w-[50%]  lg:w-full dark:text-[#B3E5F1]  ">
                  {" "}
              
                </p>
              </div>

              <p className={`dark:text-white text-[#003540]  font-montserrat font-bold lg:text-4xl md:3xl lg:ms-[-30px] md:ms-[-40px]  text-center lg:ps-12  font-mons lg:mt-4 hidden lg:block${isArabic?"   font-cairo  ":" tracking-wider "}`}>
              {t("FooterTitleLogo")
           .split("\n")
            .map((line, index) => (
            <React.Fragment key={index}>
            {line}
           <br />
            </React.Fragment>
                ))}
                {/* Your Lighthouse To <br /> The Future */}
              </p>
            </aside>
          </div>
          <div className="w-[90%] lg:w-[60%] lg:mr-16 lg:flex justify-evenly flex items-start ms-10 lg:items-start ">
            <nav className=" lg:pe-0 mr-9">
              <h6 className=" font-mons text-[16px] lg:text-[24px] font-[500] text-primary mb-2 dark:text-[#B3E5F1]  ">
               {t("FooterSercies")}
                {/* Services */}
              </h6>
              <ul className="text-[12px] lg:text-[16px] dark:text-white ">
            <Link to="/mobileDevelopment"> <li className="lg:mb-2 "> {t("FooterSercies0")} </li></Link> 
            <Link to="/wepDevlopment"> <li className="lg:mb-2 mt-2"> {t("FooterSercies1")}</li></Link>  
            <Link to="/uiUxDesign"><li className="lg:mb-2 mt-2"> {t("FooterSercies2")}</li></Link>  
            <Link to="/qualityAssurance1"> <li className="lg:mb-2 mt-2"> {t("FooterSercies3")}</li></Link>  
            <Link to="/iTHardware"><li className="lg:mb-2 mt-2"> {t("FooterSercies4")}</li></Link>  
            <Link to="/StaffAugmentation"> <li className="lg:mb-2 mt-2">{t("FooterSercies5")}</li></Link>  
              </ul>
            </nav>
            <nav className="  flex-col justify-start items-start ps-5  lg:ps-16 ">
              <h6 className="font-mons text-[16px] lg:text-[24px] font-[500] text-primary mb-2 dark:text-[#B3E5F1] ">
                {t("FooterContact")}
                {/* Contact Us */}
              </h6>
              <ul className="text-[12px] md:text-[12px] lg:text-[16px] dark:text-white">
                <li className="mb-4">
                  {" "}
                  {t("FooterContact0")}
                 
                </li>
                <li className="lg:mb-4 mb-2 ">  {t("FooterContact1")}</li>
                <li className="lg:mb-4 mb-2">  {t("FooterContact2")}</li>
                <li className="lg:mb-4 mb-2">  {t("FooterContact3")}</li>
                <ul className={`mt-3 mr-6 items-center flex  gap-2 lg:flex lg:gap-4   text-lg lg:text-2xl dark:text-white ${isArabic?"  mr-[-5px]  ":""}`}>
  <li>
   <Link to="https://www.facebook.com/profile.php?id=61569400731269"> <i className="fa-brands fa-facebook text-[#003540] dark:text-[#fff]"></i></Link>
  </li>
  <li>
  <Link to="https://www.instagram.com/awsgulf/">  <i className="fa-brands fa-instagram text-[#003540]  dark:text-[#fff]"></i></Link>
  </li>
  <li>
  <Link to="https://www.tiktok.com/@awsgulf?lang=en">  <i className="fa-brands fa-tiktok  text-[#003540] dark:text-[#fff]"></i></Link>
  </li>
  <li>
  <Link to="https://www.linkedin.com/company/aws-gulf/?viewAsMember=true"> <i className="fa-brands fa-youtube text-[#003540] dark:text-[#fff]"></i></Link>
  </li>
  {/* <li>
  <Link to=""> <i className="fa-brands fa-facebook text-[#003540] dark:text-[#fff]"></i></Link>
  </li>
  <li>
  <Link to=""> <i className="fa-brands fa-twitter text-[#003540] dark:text-[#fff]"></i></Link>
  </li> */}
  <li>
  <Link to="https://x.com/AwsGulf"> <i className="fa-brands fa-x-twitter text-[#003540] dark:text-[#fff]"></i></Link>
  </li>
</ul>

              </ul>
            </nav>
          </div>
        </footer>
      </div>
      <p className="ms-[96px] me-[96px] text-center mt-10 mb-3 text-[15px] dark:text-white">
        {" "}
        &copy; 2024 AWS Gulf . All rights reserved.
      </p>
    </div>
  )
}
