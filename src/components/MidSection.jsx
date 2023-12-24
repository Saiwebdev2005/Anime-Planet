import React from "react";

const MidSection = () => {
  return (
    <>
    <section id="MidSection" className="relative bg-violet-800">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
    
      <div className="container mx-auto flex flex-col-reverse p-6 md:flex-row ">
        {/* Image */}
        <div className="mb-24 mx-auto md:w-92 md:mb-0 md:w-1/2">
         <img src="\images\manga.png" alt="" class="md:w-60 md:ml-30 -mt-16 md:mt-0" />
        </div>
{/* Content */}
        <div className="flex flex-col space-y-10 mb-44 mb:mb-52 md:w-1/2 text-white">
      <h1 className="text-5xl font-bold text-center mt-24 md:text-6xl md:max-w-md md:text-center">
        Manga
      </h1>
      <p className="text-2xl text-center text-violet-4
      00 md:max-w-md md:text-center">
        Unlimited manga and you can also download the full resource.
      </p>
     
        </div>
        
      </div>
      </div>
    </section>
    </>
  )
}
export default MidSection;