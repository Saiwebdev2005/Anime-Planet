import React from 'react'

function Contact() {
  return (
   
    <body class="bg-violet-800 text-gray-100 px-8 py-12">
          <div class="text-center w-full">

          </div>
          <div
            class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div class="flex flex-col justify-between relative">
              <div>
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about Anime Web3!!!</h2>
                <div class="text-gray-700 mt-8">
                  Hate forms? Send us an <span class="underline">email</span> instead.
                </div>
              </div>
              <div className="absolute left-64 md:top-40 md:left-14">
              <img src="\images\contact anime.png" alt="" className='hidden md:block md:w-44' />
              </div>
             
            </div>
            <div class="">
              <div>
                <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                <input class="w-full bg-violet-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="eg : Sai kumar M"/>
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input class="w-full bg-violet-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder='eg : saik434455@gmail.com'/>
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                <textarea
                  class="w-full h-32 bg-violet-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder='It was an wonderful Experience in the website !!!'></textarea>
              </div>
              <div class="mt-8">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-violet-500 text-yellow-00 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline cursor-not-allowed text-yellow-400">
                  Currently unavailable
                </button>
              </div>
            </div>
          </div>
        </body>
  )
}

export default Contact