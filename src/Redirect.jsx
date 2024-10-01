import { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";

function redirect({link}) {
  
  useEffect(() => {
    setTimeout(()=>(window.location.replace(link)), 3000);
  })
  
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <ImSpinner2 className="animate-spin text-5xl text-violet-600 opacity-85 mb-5"/>
      <h1 className='font-bold text-3xl text-gray-800'>We are taking you to</h1>
      <span className="font-light">{link}</span>
    </div>
  )
}

export default redirect