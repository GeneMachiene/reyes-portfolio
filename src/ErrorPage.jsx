import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src="/gene-icon.svg" alt="logo" className='h-20 m-6' />
      <h1 className='my-2 font-normal text-3xl text-gray-800'>Uh oh...</h1>
      <h1 className='font-bold text-3xl text-gray-800'>That page does not exist.</h1>

      <div className='flex items-center my-14 gap-2'>
        <h1 className='font-light text-xl text-gray-800'>go back to the</h1>
        <NavLink
            to={'/'}
            className='text-white bg-pink-600 text-sm py-2 px-5 rounded-full shadow-lg font-semibold hover:bg-pink-400'>
              Home Page
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage