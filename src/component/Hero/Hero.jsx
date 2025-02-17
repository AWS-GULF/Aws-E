import GHeager from "../../assets/images/Component 126.svg";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
<section className="relative px-4 md:px-8 lg:px-16">
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
    
    <div className="w-full md:w-[50%] mt-16 lg:ml-6 flex flex-col items-center md:items-start">
      <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-[#19738C] dark:text-white ">
        <span className="block py-[6px]">Drive Results with</span>
        <span className="block py-[6px]">Data-Driven Marketing</span>
       
      </h1>

      <p className="md:text-lg lg:text-[20px] text-[18px  font-light font-montserratleading-6 md:leading-[30px] text-gray-700 dark:text-white max-w-lg mt-6">
        Comprehensive Marketing Consultancy, UX/UI Web <br />
        Design, Mobile Apps & Software Development, <br />
        Sponsored Ads, Content Creation, Graphic Design, AI Solutions & Video Production.
      </p>

    
      <div className="flex flex-nowrap gap-5 mt-8">
        <button className="bg-[#5BA89C] rounded-3xl lg:py-6 lg:px-10 py-6  px-8 text-nowrap text-white font-bold hover:bg-[#6cbdb1] transition-all">
          Contact Us Now
        </button>
        <button      onClick={handleClick} className="bg-white text-[#5BA89C] border text-nowrap border-[#5BA89C] rounded-3xl lg:py-6 lg:px-10 py-6  px-6 font-bold hover:bg-gray-100 transition">
   
          Software Solutions
        </button>
      </div>


      <div className="flex flex-wrap justify-center md:justify-start gap-9 mt-9 text-[#5BA89C]">
       
        <a href="https://www.facebook.com/profile.php?id=61573374172184 " className="text-3xl transition"><i className="fab fa-facebook"></i></a>
     
        <a href="https://www.instagram.com/awsgulf.mkt/ " className="text-3xl transition"><i className="fab fa-instagram"></i></a>
       
        <a href="https://www.linkedin.com/company/aws-gulf-marketing/ " className="text-3xl transition"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-3xl transition"><i className="fab fa-tiktok"></i></a>
        <a href="https://x.com/AwsGulf_Mkt " className="text-3xl transition"><i className="fab fa-x-twitter"></i></a>
        {/* <a href="#" className="text-2xl transition"><i className="fab fa-twitter"></i></a>
       
        <a href="#" className="text-2xl transition"><i className="fab fa-behance"></i></a> */}
      </div>
    </div>

    
    <div className="w-full md:w-[50%] lg:mr-20 lg:mt-0   flex justify-center">
  <img
    src={GHeager}
    alt="Marketing Strategy Illustration"
    className="w-[75%] max-w-[663px] md:w-[664px] md:h-[600px] object-contain"
  />
</div>


  </div>
</section>


    </div>
  );
}
