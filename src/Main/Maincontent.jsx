import React from "react";
import Footer from "../components/Footer";
function Maincontent(props) {
  const limitedAnimeList = props.animeList.slice(0, 4);
  return (
    <main>
  <div
    id="search-box"
    className="flex flex-col justify-center space-x-8 space-y-5 md:flex-row md:space-y-0 mt-20 p-6"
  >
    {/* <!-- input --> */}
    <div className="flex flex-col md:flex-row justify-between p-6 bg-violet-800 rounded-full">
  <div className="bg-white rounded-sm">
    <form
      className="flex flex-col md:flex-row justify-center ite border-b"
      onSubmit={props.HandleSearch}
    >
      <input
        type="search"
        className="ml-6 mr-8 md:mr-0 border-none w-fit md:w-80 placeholder:font-thin focus:outline-none"
        placeholder="Search for anime"
        required
        value={props.search}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
      <button className=" md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 text-gray-300 duration-200 hover:scale-110"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
      <button className="-mb-1 md:mt-0 md:-mb-0.5 md:-mr-1 py-2 px-8 md:px-14 text-lg font-normal text-white bg-violet-700 rounded-sm shadow-2xl duration-200 hover:bg-violet-900 hover:text-yellow-400">
        Search
      </button>
    </form>
  </div>
</div>

  </div>
  {/* anime title */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-between space-x-6 p-10 mb-44 bg-violet-800">
    {limitedAnimeList.map((anime) => {
      const image = anime.images.jpg.image_url;
      const title = anime.title;
      const url = anime.url;

      return (
        <div className="group flex flex-col items-center p-6 ml-10">
          <a href={url}>
            <img src={image} alt="" className='w-52 h-42 rounded-xl group-hover:scale-110 duration-200' />
          </a>
          <h1 className='text-center font-bold text-xl text-violet-300 group-hover:translate-y-4 duration-200 group-hover:text-white'>{title}</h1>
        </div>
      );
    })}
  </div>
  <div className="relative flex flex-col items-center space-y-6 p-12">
    <div className="absolute bottom-9">
      <h1 className="text-center font-bold text-5xl pb-8">
        Thank For Visiting
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center font-md text-3xl">ありがとう</div>
        <div className="text-center font-md text-3xl">Arigatō</div>
      </div>
    </div>
  </div>
  <Footer />
</main>


  );
}

export default Maincontent;
