import React from 'react'
import part1 from "../../assets/images/Frame 696.svg"
import part2 from "../../assets/images/Part2.svg"
import part3 from "../../assets/images/Part3.svg"
import part4 from "../../assets/images/Part4.svg"
import part5 from "../../assets/images/Part5.svg"
import part6 from "../../assets/images/Frame225.svg"
import part8 from "../../assets/images/Frame 702.svg"
export default function MaspertsProject() {
  return (
    <div>

<section>
  <div className="mt-16 w-full px-12">
    <img src={part1} alt="part1" className="w-full h-auto" />
  </div>
</section>

{/*  */}
<div className="flex flex-col sm:flex-row  gap-5  mt-16 sm:px-0 justify-center px-12">
  <div className="">
    <img src={part2} alt="part2" className="  w-[664px] h-[700px]   " />
  </div>
  <div className="">
    <img src={part3} alt="part3" className="w-[664px] h-[700px]  " />
  </div>
</div>






<section>
  <div className="relative w-full mt-14 px-12">
    {/* الصورة الخلفية */}
    <img src={part4} alt="part1" className="w-full" />

    {/* الصورة الأمامية - تتوسط الخلفية وتتصغر في الشاشات الصغيرة */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img src={part8} alt="part5" className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-auto lg:h-auto" />
    </div>
  </div>
</section>



<div className="flex flex-col lg:flex-row gap-4 lg:mt-14 items-center justify-center w-full px-4 mb-14">
  <div className="mt-20 lg:mt-0 w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]">
    <img src={part6} alt="part8" className="w-full h-auto" />
  </div>

  <div className="mx-auto lg:mx-0 w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px]">
    <img src={part5} alt="part5" className="w-full h-auto" />
  </div>
</div>









    </div>
  )
}
