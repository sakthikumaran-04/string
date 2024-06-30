import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='grid grid-cols-layout px-2 lg:grid-cols-3 md:px-32 pt-5 shadow pb-3'>
        <Link to="/"><h1 className=' font-logo text-3xl cursor-pointer max-sm:text-2xl'>String</h1></Link>
        <Search className={"max-lg:hidden"}/>
        <div className='flex gap-5 max-sm:gap-2 font-medium items-center justify-end'>
            <button className=' lg:block bg-slate-100 px-6 py-2 rounded-lg text-black hover:bg-slate-200 max-sm:text-sm max-sm:px-4'>Sign Up</button>
            <button className=' bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600 max-sm:text-sm max-sm:px-4'>Sign In</button>
        </div>
        <Search className={" col-span-3 pt-4 max-lg:flex lg:hidden"}/>
    </nav>
  )
}

export default Navbar