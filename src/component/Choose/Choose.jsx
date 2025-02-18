import React from "react";

export default function Choose() {
  return (
    <div>

<section className="my-12 relative px-6 lg:px-0 ">
  <h1 className="font-montserrat dark:text-white  font-semibold text-[#19738C] text-4xl text-center text-primary py-6">
    Why Choose Us
  </h1>

  <div className="flex flex-col mt-14 lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-10 max-w-screen-xl mx-auto">
 
    <div className="lg:ml-80 w-full text-center lg:w-auto md:text-center lg:text-left sm:text-center sm:text-nowrap">
      <h2 className="font-montserrat font-semibold text-2xl  text-balance leading-[36px] text-gray-800 dark:text-white">
        Our values are part of <br /> everything we create at <br /> <span className="text-end"> Instrument. </span>
      </h2>
    </div>

  
    <div className="w-full lg:w-6/12 space-y-6 text-center lg:text-left overflow-hidden">
      <div>
        <h2 className="font-montserrat font-medium text-lg text-gray-900 dark:text-white">
          People First
        </h2>
        <p className="text-gray-600 dark:text-white text-nowrap">
          We are committed to creating a workplace that reflects the communities we serve. <br />
          We cultivate an environment of belonging, where differences are not only <br /> respected, but valued.
        </p>
      </div>

      <div>
        <h2 className="font-montserrat font-medium text-lg text-gray-900 dark:text-white">
          Pursuit of Excellence
        </h2>
        <p className="text-gray-600 dark:text-white text-nowrap">
          We’re not here to make work that’s just average. We partner with incredible clients <br />
          who allow us to do our best work, and they expect nothing less.
        </p>
      </div>

      <div>
        <h2 className="font-montserrat font-medium text-lg text-gray-900 dark:text-white">
          Growth Mindset
        </h2>
        <p className="text-gray-600 dark:text-white text-nowrap">
          Each year, we grow in size, in capabilities, and in cultural intelligence.
          This growth <br /> fuels the impact we can make for employees, our community, and clients.
        </p>
      </div>
      
      <div>
        <h2 className="font-montserrat font-medium text-lg text-gray-900 dark:text-white">
          Truth in Action
        </h2>
        <p className="text-gray-600 dark:text-white text-nowrap">
          We apply our capabilities and resources towards a shared purpose of shaping a <br /> better future.
        </p>
      </div>
    </div>
  </div>
</section>



      <section className="relative w-[90%] md:w-[80%] m-auto md:mb-24  mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8">
          <div className="md:w-3/12 lg:w-1/2 bg-colorr font-montserrat lg:text-[32px] font-bold lg:leading-[50px] text-center lg:text-left dark:text-white">
           <span> Ready to elevate your brand? </span> <span> Let’s build something amazing </span> <br /> together!
          </div>
          <button className="bg-button rounded-3xl py-6  px-8 mt-4 lg:mt-0 mx-auto font-bold text-amber-50 dark:bg-white dark:text-[#5BA89C]">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
