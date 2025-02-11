import GHeager from "../../assets/images/Component 126.svg";
import Symboll from "../../assets/images/Symbol1.svg";
import instg from "../../assets/images/Symbol2.svg";
import Linkedin from "../../assets/images/Symbol3.svg";
import facebook from "../../assets/images/Symbol7.svg";
import youtube from "../../assets/images/Symbol4.svg";
import twitter from "../../assets/images/Symbol5.svg";
import xx from "../../assets/images/Symbol6.svg";
export default function Hero() {
  return (
    <div>
      <section className="relative px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6 md:gap-8">
         
          <div className="w-full md:w-1/2 text-left mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold bg-color dark:text-white">
              <span className="block py-[6px]">Drive Results with</span>
              <span className="block py-[6px]">Data-Driven</span>
              <span className="block py-[6px]">Marketing</span>
            </h1>

            <p className="md:text-lg lg:text-[20px] text-2xl font-light leading-6 md:leading-[30px] bg-color-p max-w-lg mt-6 dark:text-white">
              Comprehensive Marketing Consultancy, UX/UI Web <br />
              Design, Mobile Apps & Software Development, <br />
              Sponsored Ads, Content Creation, Graphic Design, AI Solutions & Video Production.
            </p>

       
            <div className="flex flex-wrap gap-[20px] mt-[30px]">
              <button className="bg-button rounded-3xl py-4 px-6 border dark:bg-white dark:text-teal-600 font-bold dark:border-white text-amber-50">
                Contact Us Now
              </button>
              <button className="bg-white text-teal-500 dark:bg-[#5BA89C] dark:text-white dark:border-white font-bold rounded-3xl py-4 px-6 border border-teal-500">
                Software Solutions
              </button>
            </div>

       
            <div className="flex flex-wrap gap-4 mt-[30px]">
              <img src={Symboll} className="w-6 h-6 transition dark:text-white" />
              <img src={instg} className="w-6 h-6 transition dark:text-white" />
              <img src={Linkedin} className="w-6 h-6 transition dark:text-white" />
              <img src={facebook} className="w-6 h-6 transition dark:text-white" />
              <img src={youtube} className="w-6 h-6 transition dark:text-white" />
              <img src={twitter} className="w-6 h-6 transition dark:text-white" />
              <img src={xx} className="w-6 h-6 transition dark:text-white" />
            </div>
          </div>

     
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={GHeager}
              alt="Marketing Strategy Illustration"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full object-cover rounded-lg h-auto md:h-[300px] lg:h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
