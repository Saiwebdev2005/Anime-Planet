import React from 'react'

function AnimeCard({anime,key,image}) {
  return   (
  <img src={image} alt="" className='hidden w-full duration-200 md:block group-hover:scale-110'/>
  )
  
      
   
   
}
{/* <img src={anime.images.webp.image_url} class="w-64 mt-6 rounded-md  hover:scale-105 duration-300"/> */}
export default AnimeCard