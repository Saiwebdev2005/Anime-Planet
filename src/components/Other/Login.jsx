import React, { useEffect, useState } from "react";
const Login = (props) =>{
  // Id State
  const [enteredId,setEnteredId] = useState("");
  const [enteredIdValid,setEnteredIdValid] = useState(true);
  const [enteredIdTouched,setEnteredIdTouched] = useState(false); 
  // Password State
  const [enteredPass,setEnteredPass] = useState("");
  const [enteredPassValid,setEnteredPassValid] = useState(false);
  const [enteredPassTouched,setEnteredPassTouched] = useState(false)

 useEffect(() => {
setEnteredIdTouched(true);
if(enteredId.trim() != '' && enteredPass != '')
{
setEnteredIdValid(true);
setEnteredPassValid(true);
}
else if(enteredId.trim() != '')
{
  setEnteredIdValid(true);
}
else if(enteredPass != '')
{
  setEnteredPassValid(true);
}
 },[enteredId,enteredPass])
 //Id Handler
 const IdInputChangeHandler = (event) => {
  setEnteredId(event.target.value);
  setEnteredIdTouched(true);
 }
 
const IdBlurHandler = () => {
  setEnteredIdTouched(true);
  if(enteredId.trim() === '') 
  {
    setEnteredIdValid(false);
  }
}
const IdInputIsInValid = !enteredIdValid && enteredIdTouched;
const IdValidClass = IdInputIsInValid && 'bg-red-200';
//Password Handler
const PassInputChangeHandler = (event) => {
  setEnteredPass(event.target.value);
  setEnteredPassTouched(true);
 }

 const PassBlurHandler = () => {
  setEnteredPassTouched(true);
  console.log(enteredPass)
  if(enteredPass === '')
  {
    setEnteredPassValid(false);
  }
 }
 const PassInputIsInValid = !enteredPassValid && enteredPassTouched;
 const PassValidClass = PassInputIsInValid && 'bg-red-200';

 //Submit Handler
const SubmitHandler = (e) => {
  e.preventDefault();
  setEnteredIdTouched(true);
  if(enteredId.trim() === '')
  {
   setEnteredIdValid(false);
  }
  else{
   setEnteredIdValid(true);
  }
  
  
  setEnteredId('');
  setEnteredPass('');
}

return (props.triggered) ? (
  <div className="fixed inset-0 bg-violet-600 bg-opacity-30 backdrop-blur-sm z-10">
<div className="flex items-center justify-center min-h-screen">
  {/* <!-- Card Container --> */}
  <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
    
    {/* <!-- Left side --> */}
   <div className="p-6 md:p-20">
    {/* <!-- Top --> */}
    <h2 className="font-mono mb-5 text-4xl md:text-6xl font-bold">Log In</h2>
    <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
      Log in to your account to download anime pictures,videos or manga
    </p>
    {/* Id Input */}
    <form onSubmit={SubmitHandler} className="md:max-w-lg">
      <div className="flex flex-col justify-center mx-auto">

     
    <input type="text" className={`w-full p-6 border border-violet-300 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-violet-300 hover:bg-violet-100 hover:text-black ${IdValidClass} `} placeholder="Enter Your User Id" onChange={IdInputChangeHandler} value={enteredId} onBlur={IdBlurHandler}/>
    {IdValidClass ? <p className="text-red-600">Id must not be empty</p> : undefined}
    {/* Password Input */}
    <input type="password" className={`mt-6 w-full p-6 border border-violet-300 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-violet-300 hover:bg-violet-100 hover:text-black ${PassValidClass}`} placeholder="Enter Your Password" onChange={PassInputChangeHandler} value={enteredPass} onBlur={PassBlurHandler}/>
    {PassValidClass ? <p className="text-red-600">Password must not be empty</p> : undefined}
    </div>
    {/* <!-- Middle --> */}
    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-o">
      
      <button className="flex items-center justify-center  bg-violet-800 p-6 font-sans space-x-4 font-bold w-full text-yellow-400 rounded-md hover:shadow-lg px-9 shadow-cyan-100 shadow-sm hover:bg-violet-500 border  transition hover:-translate-y-0.5 duration-300 md:w-auto" onClick={() => {
        props.setTrigger(false)
      }}>
        <span>Next</span>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-7"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="13" y1="18" x2="19" y2="12" />
        <line x1="13" y1="6" x2="19" y2="12" />
      </svg>
      </button>
    </div>
    </form>
   </div>
    {/* <!-- Right side --> */}
    <img src="/images/login Aot.png" alt="" className="w-[430px] hidden md:block "/>
    {/* Close button */}
    <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-violet-400 rounded-full md:bg-white md:top-4 md:hover:bg-violet-200 transition hover:-translate-y-0.5 duration-150 hover:bg-violet-200 hover:cursor-pointer" onClick={() => {
        props.setTrigger(false)
      }}>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
  </div>
  </div>
  </div>
) : ""; 
}
export default Login;