import React from 'react'
import part1 from "../../assets/images/Part1.svg"
import part2 from "../../assets/images/Part2.svg"
import part3 from "../../assets/images/Part3.svg"
import part4 from "../../assets/images/Part4.svg"
import part5 from "../../assets/images/Part5.svg"
import part6 from "../../assets/images/Part7.svg"
import part8 from "../../assets/images/Part7.svg"
export default function MaspertsProject() {
  return (
    <div>

<section>
    <div className=" bg-blue-300 w-[100%]  rounded-3xl">
    <img src={part1} alt="part1" className='w-full  ' />
    </div>
</section>


{/*  */}
<div className="flex flex-col sm:flex-row gap-4 mt-14">
  <div>
    <img src={part2} alt="part2" className="w-full" />
  </div>
  <div>
    <img src={part3} alt="part3" className="w-full" />
  </div>
</div>


<section>
  <div className="relative w-full mt-14">
    <img src={part4} alt="part1" className="w-full" />
    <div>
      <img
        src={part8}
        alt="part5"
        className="absolute top-1/2 left-1/2 w-[200px] h-[200px] transform -translate-x-1/2 -translate-y-1/2 lg:top-16 lg:left-[400px] lg:transform-none lg:w-auto lg:h-auto"
      />
    </div>
  </div>
</section>


<div className="flex  flex-col lg:flex-row gap-4 lg:mt-14 items-center">
  
  <div className="mt-20 lg:mt-0  ">
    <img src={part8} alt="part8" className="w-full" />
  </div>
 
  <div className="mx-auto lg:mx-0">
    <img src={part5} alt="part5" className="w-full" />
  </div>
</div>










    </div>
  )
}
