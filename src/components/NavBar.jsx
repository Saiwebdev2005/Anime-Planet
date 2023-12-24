import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Other/Login";

// Hamburger script




const NavBar = () => {
  const [buttonTrigger ,setButtonTrigger] = useState(false);

 const ButtonTrigger= (e) =>  {
  e.preventDefault();
  buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
 }

  useEffect(()=>
  {
  console.log('buttonTriggered')
  },[buttonTrigger])
  return (
    <>
    <nav className="relative container mx-auto p-6 max-w-6xl">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-20">
        {/* Logo */}
        <h1 className="text-violet-700 font-serif text-3xl">Anime-Planet</h1>
        {/* Left Menu */}
        <div className="flex space-x-8 font-bold md:flex">
          <NavLink to='/' className="text-violet-400 hover:text-violet-900 text-sm">Home</NavLink>
          <NavLink to='/Main' className="text-violet-400 hover:text-violet-900 text-sm">Search</NavLink>
          <NavLink to='/Contact' className="text-violet-400 hover:text-violet-900 text-sm">Contact</NavLink>
        </div>
      </div>
      {/* Right Menu */}
      <div className="hidden md:flex items-center space-x-6 font-bold text-violet-600" onClick={ButtonTrigger} >
        <a href="" className="px-8 py-3 font-bold text-yellow-400 bg-violet-900 rounded-full hover:opacity-70 duration-200">Join</a>
      </div>
      {/* Hamburger */}
    </div>
    {/* Mobile menu */}
    <Login triggered={buttonTrigger} setTrigger={setButtonTrigger}/>
    </nav>
  
    </>
  )
}
export default NavBar;
