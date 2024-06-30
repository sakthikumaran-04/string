import React from 'react'
import { github_footer, instagram, linkedin, twitter } from '../assets/images'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=' bg-slate-800 min-h-48 flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center justify-center gap-12'>
            <img className='w-[30px] cursor-pointer' src={github_footer} alt="" />
            <img className='w-[30px] cursor-pointer' src={instagram} alt="" />
            <img className='w-[30px] cursor-pointer' src={linkedin} alt="" />
            <img className='w-[30px] cursor-pointer' src={twitter} alt="" />
        </div>
        <div className='text-white w-full text-center flex justify-center gap-3'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Contact us</Link>
        </div>
        <p className='text-white text-xs w-full text-center'>Designed With Love By <a href="https://linkedin.com/in/sakthikumaran-n" className=' underline text-center cursor-pointer' target='_blank'>SakthiKumaran</a></p>
    </footer>
  )
}

export default Footer