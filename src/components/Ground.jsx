import React from "react";

const Ground = () => {
  return (
    <>
    <div className="w-full bg-violet-800">
    {/* Site info about Language */}
    <section id="stats" class="py-24 bg-white">
      <div className="flex flex-col relative items-center ">
        <div className="absolute -left-5 -top-7 md:-top-7 mb-10">
          <img src="\images\ds shinobu.png" alt="" className="md:w-64 md:h-86 w-64 z-0 opacity-30 md:opacity-100" />
        </div>
        <div className="flex flex-row space-x-8 absolute -top-10  md:items-center">
        <img src="\images\dub logo.png" alt="" className="w-32"/>
        <img src="\images\sub logo.png" alt="" className="w-36" />
        </div>
      
      
    
      
      <div class="container z-10 mx-auto px-3 mt-32">
    <h2 class="text-4xl mb-6 font-bold text-center">
      Dubbed and Native
    </h2>
    <p class="max-w-xs mx-auto text-center text-violet-800 md:max-w-md">
      Here both Sub and Dub are available for the anime you like!!!.
    
    </p>
  </div>
  </div>
  </section>
  {/* Features */}
    <section id="feature" className="pb-48 max-w-6xl mx-auto ">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7 space-y-10">
        {/* Horizontal line */}
        <div className="hidden absolute top-48 left-16 h-3 bg-yellow-400 md:block w-10/12"></div>
        {/* Vertical */}
        <div className="absolute w-2 h-full -ml-1 bg-yellow-400 md:hidden left-1/2"></div>
        {/* Box1 */}
        <div class="relative md:top-20 flex flex-col p-6 space-y-6 bg-violet-100 rounded-lg lg:w-1/3">
  
  <div class="absolute -ml-10 -top-10 left-1/2 md:left-16">
    
    <div class="flex item-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
      <img src="\images\privacy.svg" alt="" className="bg-yellow-400 rounded-full"/>
    </div>
  </div>
  <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
    Data Protection
  </h5>
  <p class="text-center text-gray-400 md:text-left">
    The Data Collected here is protected from harmful source
  </p>
</div>
{/* Box2 */}
<div class="relative md:top-20 flex flex-col p-6 space-y-6 bg-violet-100 rounded-lg lg:w-1/3">
  
  <div class="absolute -ml-10 -top-10 left-1/2 md:left-16">
    
    <div class="flex item-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
      <img src="\images\fast.svg" alt="" className="bg-yellow-400 rounded-full"/>
    </div>
  </div>
  <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
    Fast Download
  </h5>
  <p class="text-center text-gray-400 md:text-left">
    The video's can be downloaded faster with the max quality.
  </p>
</div>
{/* Box3 */}
<div class="relative md:top-20 flex flex-col p-6 space-y-6 bg-violet-100 rounded-lg md:w-1/3">
  
  <div class="absolute -ml-10 -top-10 left-1/2 md:left-16">
    
    <div class="flex item-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
      <img src="\images\unlimited.svg" alt="" className="bg-yellow-400 rounded-full"/>
    </div>
  </div>
  <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">
    Unlimited Access
  </h5>
  <p class="text-center text-gray-400 md:text-left">
    There is no charge for access our site and enjoy watching free of cost.
  </p>
</div>
      </div>
    </section>
    </div>
    </>
  )
}
export default Ground;