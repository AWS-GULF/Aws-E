import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import LayoutHardWord from "./component/7-LayoutHardWard/LayoutHardWord";
import HeroHardWard from "./component/1-HeroHardWard/HeroHardWard";
import AboutHardWord from "./component/2-AboutHardWord/AboutHardWord";
import MainHardWard from "./component/3-MainHardWard/MainHardWard";
import OurServicesHaedWard from "./component/4-OurServicesHaedWard/OurServicesHaedWard";
import ClientsAcross from "./component/5-ClientsAcross/ClientsAcross";
import BlogHeroWord from "./component/6-BlogHeroWord/BlogHeroWord";
import QualityAssurance1 from "./component/8-QualityAssurance1/QualityAssurance1";
import MobileDevelopment from "./component/9-MobileDevelopment/MobileDevelopment";
import Home from "./component/Home/Home";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import SeeourBlog from "./component/SeeourBlog/SeeourBlog";
import Choose from "./component/Choose/Choose";
import Slider from "./component/Slider/Slider";
import MaspertsProject from "./component/MaspertsProject/MaspertsProject";
import NotFound from "./component/NotFound/NotFound";
import HomeHardWard from "./component/HomeHardWard/HomeHardWard";
import WepDevlopment from "./component/10-WepDevlopment/WepDevlopment";
import ITHardware from "./component/11-ITHardware/ITHardware";
import StaffAugmentation from "./component/12-StaffAugmentation/StaffAugmentation";
import Mainn from "./component/Mainn/Mainn";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UiUxDesign from "./component/13-UiUxDesign/UiUxDesign";
import Modell from "./component/16-Modell/Modell";
import OurWork from "./component/14-OurWork/OurWork";
import WorkFliter from "./component/17-WorkFliter/WorkFliter";
import Aboutt from "./component/18-Aboutt/Aboutt";
import Careers from "./component/19-Careers/Careers";
import JopDetetails from "./component/JopDetetails/JopDetetails";
import SSSproject from "./component/SSSProject/SSSproject";
import ModellButtonNavbar from "./component/ModellButtonNavbar/ModellButtonNavbar";
// import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const userAgent = navigator.vendor;
  console.log(userAgent);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [isRTL, setIsRTL] = useState(i18n.language === "ar");

  const toggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      document.dir = "rtl";
      setIsRTL(true);
    } else {
      i18n.changeLanguage("en");
      document.dir = "ltr";
      setIsRTL(false);
    }
  };


 
const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutHardWord toggleLanguage={toggleLanguage} />,
    children: [
      { index: true, element: <HomeHardWard /> },
      { path: "aboutHardWord", element: <AboutHardWord i18n={i18n}  t={t}  /> },
      { path: "aboutHardWord", element: <HeroHardWard i18n={i18n}  t={t}  /> },
      { path: "mainHardWard", element: <MainHardWard i18n={i18n}  t={t}  /> },
      { path: "ourServicesHaedWard", element: <OurServicesHaedWard  i18n={i18n}  t={t} /> },
      { path: "clientsAcross", element: <ClientsAcross i18n={i18n}  t={t}  /> },
      { path: "blogHeroWord", element: <BlogHeroWord i18n={i18n}  t={t}  /> },
      { path: "qualityAssurance1", element: <QualityAssurance1 i18n={i18n}  t={t}  /> },
      { path: "mobileDevelopment", element: <MobileDevelopment i18n={i18n}  t={t}  /> },
      { path: "wepDevlopment", element: <WepDevlopment i18n={i18n}  t={t}  /> },
      { path: "homeHardWard", element: <HomeHardWard i18n={i18n}  t={t} /> },
      { path: "StaffAugmentation", element: <StaffAugmentation i18n={i18n}  t={t}  /> },
      { path: "iTHardware", element: <ITHardware i18n={i18n}  t={t}  /> },
      { path: "uiUxDesign", element: <UiUxDesign i18n={i18n}  t={t}  /> },
      { path: "modell", element: <Modell i18n={i18n}  t={t} /> },
      { path: "ourWork", element: <OurWork i18n={i18n}  t={t} /> },
      { path: "workFliter", element: <WorkFliter i18n={i18n}  t={t} /> },
      { path: "about", element: <Aboutt i18n={i18n}  t={t} /> },
      { path: "careers", element: <Careers i18n={i18n}  t={t} /> },
      { path: "/SSSproject", element: <SSSproject i18n={i18n}  t={t} /> },
      { path: "/careers/:id", element: <JopDetetails i18n={i18n}  t={t} /> },
      { path: "ModellButtonNavbar", element: <ModellButtonNavbar i18n={i18n}  t={t} /> },
      {
        path: "markting",
        element: <Layout toggleLanguage={toggleLanguage}/>,
        children: [
          { index: true, element: <Home /> },
          { path: "hero", element: <Hero /> },
          { path: "about", element: <About /> },
          { path: "Mainn", element: <Mainn /> },
          { path: "seeourBlog", element: <SeeourBlog /> },
          { path: "choose", element: <Choose /> },
          { path: "slider", element: <Slider /> },
          { path: "MaspertsProject", element: <MaspertsProject /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);



  const router = createBrowserRouter([
    {
      path: "",
      element: <LayoutHardWord toggleLanguage={toggleLanguage} />,
      children: [
        { index: true, element: <HomeHardWard /> },
        { path: "aboutHardWord", element: <AboutHardWord i18n={i18n} t={t} /> },
        { path: "mainHardWard", element: <MainHardWard /> },
        { path: "ourServicesHaedWard", element: <OurServicesHaedWard /> },
        { path: "clientsAcross", element: <ClientsAcross /> },
        { path: "blogHeroWord", element: <BlogHeroWord /> },
        { path: "qualityAssurance1", element: <QualityAssurance1 /> },
        { path: "mobileDevelopment", element: <MobileDevelopment /> },
        { path: "wepDevlopment", element: <WepDevlopment /> },
        { path: "homeHardWard", element: <HomeHardWard /> },
        { path: "StaffAugmentation", element: <StaffAugmentation /> },
        { path: "iTHardware", element: <ITHardware /> },
        { path: "uiUxDesign", element: <UiUxDesign /> },
        { path: "modell", element: <Modell /> },
        { path: "ourWork", element: <OurWork i18n={i18n} t={t} /> },
        { path: "workFliter", element: <WorkFliter /> },
        { path: "about", element: <Aboutt /> },
        { path: "careers", element: <Careers /> },
        { path: "/SSSproject", element: <SSSproject /> },
        { path: "/careers/:id", element: <JopDetetails /> },
        { path: "ModellButtonNavbar", element: <ModellButtonNavbar /> },
        {
          path: "markting",
          element: <Layout toggleLanguage={toggleLanguage} />,
          children: [
            { index: true, element: <Home /> },
            { path: "hero", element: <Hero /> },
            { path: "about", element: <About /> },
            { path: "Mainn", element: <Mainn /> },
            { path: "seeourBlog", element: <SeeourBlog /> },
            { path: "choose", element: <Choose /> },
            { path: "slider", element: <Slider /> },
            { path: "MaspertsProject", element: <MaspertsProject /> },
            { path: "*", element: <NotFound /> },
          ],
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   const favicon = document.getElementById("favicon");
  //   if (!favicon) return;

  //   const updateFavicon = () => {
  //     favicon.href = window.location.pathname.includes("marketing")
  //       ? "/src/assets/images/fave.svg"
  //       : "/src/assets/images/favee.svg";
  //   };

  //   updateFavicon();
  //   window.addEventListener("popstate", updateFavicon);

  //   return () => window.removeEventListener("popstate", updateFavicon);
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
