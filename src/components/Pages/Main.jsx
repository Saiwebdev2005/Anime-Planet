import  { Fragment, useEffect, useState } from 'react';
import AnimeCard from '../../Main/AnimeCard';
import MainHeader from '../../Main/MainHeader';
import Maincontent from '../../Main/Maincontent';
function Main() {
  
 const [animeList ,setAnimeList] = useState([]);
 const [topAnime, setTopAnime] = useState([]);
 const [search, setSearch] = useState("");

 const GetTopAnime = async () => {
   const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then(res => res.json());
  
   setTopAnime(temp.data.slice(0,5));
 }

 const HandleSearch = (e) => {
 e.preventDefault();

 FetchAnime(search);
 }
 const FetchAnime = async (query) => {
  const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`).then(res => res.json());
  setAnimeList(temp.data.slice(0,5));

 }

 useEffect(() => {
 GetTopAnime();

 },[]);


  return (
    <Fragment>
   <MainHeader topAnime={topAnime}></MainHeader>
   
   <Maincontent HandleSearch={HandleSearch}
   search={search}
   animeList={animeList}
   setSearch={setSearch}
   ></Maincontent>
   <AnimeCard animeList={animeList}/>
    </Fragment>
  )
}

export default Main