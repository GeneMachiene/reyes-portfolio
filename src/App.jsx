import { NavLink, Outlet, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from '/gene-icon.svg'
import { useState } from "react";


function App() {
  const [open, setOpen] = useState(false);
  const currentURI = useLocation().pathname;
  const athome = currentURI == "/";
  const atblog = currentURI == "/practicum";

  return (
    <>
      <div className='h-dvh grid grid-rows-12'>
        {!athome?
          <header className={`relative z-50 row-span-1 py-2 px-6 md:px-20 lg:px-52 flex flex-grow-0 justify-between min-w-full ${atblog? 'bg-sky-950 bg-opacity-95 shadow-md text-white':'bg-white shadow-md'}`}>
            <NavLink onClick={()=>{setOpen(false)}} className="flex items-center">
              <img src={icon} alt="logo" className="h-full max-h-10 hover:animate-pulse" />
            </NavLink>

            <div className="md:flex hidden items-center gap-3">
              <NavLink to={'/projects'} className={ ({isActive}) => (`text-sm hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Projects</NavLink>
              <NavLink to={'/practicum'} className={ ({isActive}) => (`text-sm hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Practicum</NavLink>
              <NavLink to={'/contact'} className={ ({isActive}) => (`text-sm hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Contact</NavLink>
            </div>

            <button className="md:hidden visible"
              onClick={()=>{setOpen(!open)}}
            >
              <RxHamburgerMenu className="h-full w-5 text-purple-500"/>
            </button>

            <div className={`${open? 'flex': 'hidden'} box-border absolute flex-col gap-3 bg-white text-gray-800 z-50 rounded-md top-full mt-3 left-3 right-3 p-6 text-xl shadow-xl`}>
              <NavLink onClick={()=>{setOpen(false)}} to={'/projects'} className={ ({isActive}) => (` hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Projects</NavLink>
              <NavLink onClick={()=>{setOpen(false)}} to={'/practicum'} className={ ({isActive}) => (` hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Practicum</NavLink>
              <NavLink onClick={()=>{setOpen(false)}} to={'/contact'} className={ ({isActive}) => (` hover:text-purple-600 ${isActive? 'font-bold':''}`)}>Contact</NavLink>
            </div>
          </header>
          :
          <></>
        }

        <div className={`${athome? 'row-span-12':'row-span-11'} ${open || athome? 'overflow-y-hidden':'overflow-y-scroll'}`}>
          <Outlet />
          <div onClick={()=>{setOpen(!open)}} className={`${open? 'block': 'hidden'} absolute bottom-0 top-0 left-0 right-0 bg-black z-40 bg-opacity-50`} />
        </div>
      </div>
    </>
  )
}

export default App
