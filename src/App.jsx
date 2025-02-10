import 'flowbite';
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
import Footer from "./component/Footer/Footer";
import NotFound from "./component/NotFound/NotFound";
import HomeHardWard from "./component/HomeHardWard/HomeHardWard";
import WepDevlopment from "./component/10-WepDevlopment/WepDevlopment";
import ITHardware from "./component/11-ITHardware/ITHardware";
import StaffAugmentation from "./component/12-StaffAugmentation/StaffAugmentation";
import Mainn from "./component/Mainn/Mainn";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UiUxDesign from './component/13-UiUxDesign/UiUxDesign';
import Modell from './component/16-Modell/Modell';
import OurWork from './component/14-OurWork/OurWork';
import WorkFliter from './component/17-WorkFliter/WorkFliter';
import Aboutt from './component/18-Aboutt/Aboutt';
import Careers from './component/19-Careers/Careers';

import JopDetetails from './component/JopDetetails/JopDetetails';
import SSSproject from './component/SSSProject/SSSproject';


let createBrowser = createBrowserRouter([
  {
    path: "",
    element: <LayoutHardWord />,
    children: [
      { index: true, element: <HomeHardWard /> },
      { path: "aboutHardWord", element: <AboutHardWord /> },
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
      { path: "modell", element: <Modell/> },
      { path: "ourWork", element: <OurWork/> },
      { path: "workFliter", element: <WorkFliter/> },
      { path: "about", element: <Aboutt/> },
      { path: "careers", element: <Careers/> },
      { path: "sSSproject", element: <SSSproject/> },
     
      { path: "/careers/:id", element: <JopDetetails/> },

      {
        path: "layout",
        element: <Layout />,
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

function App() {
  return <RouterProvider router={createBrowser} />;
}

export default App;
