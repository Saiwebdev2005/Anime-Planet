import React from 'react';
function MainHeader({topAnime}) {
  return (
    <div>
    {/* Hero content */}
    {/* Header */}
    <div className="flex relative  items-center justify-center p-6">
    <h1 className='font-bold text-6xl text-violet-800 mx-auto text-left pt-12 pb-20'>Welcome to Anime-Planet</h1>
    {/* right */}
    <div className='hidden absolute md:block right-32 top-2 opacity-90'>
    <img src="\images\goku.png" alt="" 
    className='w-32'/>
    </div>
   {/* left */}
    <div className='absolute left-72 top-44 md:top-0 md:left-32 opacity-90'>
    <img src="\images\luffy.png" alt="" 
    className='w-24 md:w-32'/>
    </div>

    </div>
     
      {/* Content container */}
      <div className="container mx-auto flex flex-col p-6 md:flex-row bg-violet-800">
        {/* Content */}
        <div className="flex flex-col space-y-10 mb-44 mg:mt-16 mb:mb-52 md:w-1/2">
      <h1 className="text-5xl font-bold text-center md:text-6xl md:max-w-md md:text-left text-white">
        Top Anime Of this Week
      </h1>
      <p className="text-2xl text-center text-violet-4
      00 md:max-w-md md:text-left">
        In Anime-Planet the most viewed anime are Listed Here.
      </p>
      <div className="mx-auto md:mx-0">
        <a href="#search-box" className="py-5 px-10 text-2xl font-bold text-yellow-400 rounded-full bg-violet-900 md:py-4 hover:opacity-70 duration-200">
          Lets Search Anime!!!
        </a>
      </div>
        </div>
        {/* right anime section */}
        <div className="flex flex-col justify-between space-y-6 mb-30 -mt-28 md:mt-16 w-full md:w-1/2 p-6">
          {/* Container 1 */}
          {topAnime.map((anime) => {
            return (
              <div className="flex relative flex-col items-left justify-center bg-violet-400 mx-4 mt-4 rounded-lg" key={anime.mal_id}>

              <h1 className="font-bold text-center text-xl text-yellow-400">
                {anime.title}
              </h1>
              <div className="ml-4 font-medium">
              <p className='text-white'>
                Rating : {anime.score}
              </p>
              <p className='text-white'>
                Release year : {anime.year}
              </p>
              <p className='text-white'>
                Episode : {anime.episodes}
              </p>
              </div>
              <button className='p-4 absolute left-32 md:-right-20 top-16 md:top-8 bg-violet-800 rounded-full py-2 px-4 mx-12 md:mx-32'>
                <a href={anime.trailer.url} className="text-xs text-bold text-yellow-400">
                  Trailer!!!
                </a>
              </button>
             </div>
            //  release year = year
            //  episode = episodes
            //  rating = score
            )
          })}
           
        </div>
        </div>
        {/* Top anime */}
       
       
      
    </div>
  )
}

export default MainHeader