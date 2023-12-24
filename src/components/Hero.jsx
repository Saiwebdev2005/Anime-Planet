import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
    {/* Hero Section */}
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse p-6 md:flex-row ">
        {/* Content */}
        <div className="flex flex-col space-y-10 mb-44 mg:mt-16 mb:mb-52 md:w-1/2">
      <h1 className="text-5xl font-bold text-center md:text-6xl md:max-w-md md:text-left font-sans">
        Welcome to Anime World!!!
      </h1>
      <p className="text-2xl text-center text-violet-4
      00 md:max-w-md md:text-left">
        Anime-Planet is the place for HardCore Anime Fans
      </p>
      <div className="mx-auto md:mx-0">
        <Link to='/Main' className="py-5 px-10 text-2xl font-bold text-yellow-400 rounded-full bg-violet-900 md:py-4 hover:opacity-70 duration-200">
          Get Started!!!
        </Link>
      </div>
        </div>
        {/* Image */}
        <div className="mb-24 mx-auto md:w-92 md:mb-0 md:w-1/2">
         <img src="\images\akatski.png" alt="" class="md:w-78 md:ml-30" />
        </div>
      </div>
    </section>
    </>
  )
}
export default Hero;