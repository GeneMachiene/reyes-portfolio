import { TypeAnimation } from 'react-type-animation'
import { NavLink } from 'react-router-dom'
import Gene from './assets/Gene.webp'
import cv from './assets/REYES_Resume.pdf'
import { useEffect } from 'react';


function Home() {
  useEffect(() => {
    document.title = 'Gene'; // Quick solution
  }, []);

  return (
    <div className='grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-12 items-center justify-center bg-sky-950 w-screen h-dvh bg-opacity-85 overflow-hidden'>
      
      <div className='relative flex items-center row-span-8 col-span-6 order-last md:order-first justify-center h-full overflow-hidden'>
        <img src={Gene} alt="gene" className='absolute z-20 h-full object-contain object-bottom pointer-events-none'/>
        <div className='absolute top-0 rounded-full h-1/2 w-1/2 bg-yellow-500 shadow-2xl'/>
        <div className='absolute left-0 bottom-0 rounded-full h-1/2 w-1/2 bg-pink-600 shadow-2xl animate-pulse'/>
      </div>
      
      <div className='flex flex-col justify-between min-h-52 md:items-start items-center row-span-4 col-span-6'>
        <h1 className='text-2xl sm:ml-1 ml-0 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-purple-500  to-pink-600'>Hi I&apos;m Gene,</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Software Dev",
            3000,
            "Creative",
            3000,
            "Frontend Dev",
            3000,
          ]}
          wrapper="h1"
          speed={50}
          className='z-10 font-extrabold md:text-6xl text-5xl text-white'
          repeat={Infinity}
        />
        <div className="flex gap-3 mt-4">
          <a
            href={cv}
            download
            className='text-white bg-pink-600 text-sm py-2 px-5 rounded-full shadow-lg font-semibold hover:bg-pink-400'>
              Download my Resume
          </a>
          <NavLink
            to={'/Projects'}
            className='text-gray-900 bg-yellow-500 text-sm py-2 px-5 rounded-full shadow-lg font-semibold hover:bg-yellow-200'>
              View more
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Home