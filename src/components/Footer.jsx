import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>

      {/* Footer */}
      <section id="footer" className="p-20 bg-violet-700">
      <footer className="max-w-6xl mx-auto">
        <Link to='/Contact'>
        {/* Container */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 justify-between">
          {/* Logo */}
          <h1 className="font-serif text-yellow-400 text-3xl">Anime-Planet</h1>
          {/* Mid section */}
          <div className="flex flex-row space-x-10  text-white">
            {/* section 1 */}
            <div className="flex flex-col items-left">
            <h1 className="font-bold">Features</h1>
              <p className="font-md text-violet-300 mt-3">
                Unlimited Anime
              </p>
              <p className="font-md text-violet-300 mt-3">
                Quality Streaming
              </p>
              <p className="font-md text-violet-300 mt-3">
                Updates
              </p>
            </div>
               {/* section 2 */}
               <div className="flex flex-col items-left">
            <h1 className="font-bold">Resource</h1>
              <p className="font-md text-violet-300 mt-3">
                Blog
              </p>
              <p className="font-md text-violet-300 mt-3">
                Developer
              </p>
              <p className="font-md text-violet-300 mt-3">
                Support
              </p>
            </div>
               {/* section 3 */}
               <div className="flex flex-col items-left">
               <h1 className="font-bold">Company</h1>
              <p className="font-md text-violet-300 mt-3">
                About
              </p>
              <p className="font-md text-violet-300 mt-3">
                Our Team
              </p>
              <p className="font-md text-violet-300 mt-3">
                Contact Me
              </p>
            </div>
          </div>
          {/* End Logo */}
          <div className="flex flex-row space-x-6 items-center">
            <img src="\images\icon-facebook.svg" alt="" />
            <img src="\images\icon-instagram.svg" alt="" />
            <img src="\images\icon-twitter.svg" alt="" />
            <img src="\images\icon-pinterest.svg" alt="" />
          </div>
         
        </div>
        </Link>
      </footer>
      <h1 className="text-yellow-400 text-center p-6 -mb-10">Credit : Sai</h1>
    </section>
    </>
  )
}
export default Footer;