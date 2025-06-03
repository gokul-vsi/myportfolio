import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub,FaRegCopyright} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <div className='bg-purple-600  md:mt-10'>
              <h1 className='text-white text-4xl pt-5 font-medium text-center '>Gokulnath</h1>
              <div className='flex justify-center text-white pt-5 items-center gap-5'>
                     <a href="https://www.instagram.com/itz_gokul_23_/">    <FaInstagram className='text-2xl font-medium' /> </a>
                                      <a href="https://www.linkedin.com/in/gokulnath-n-1305b9341/">  <FaLinkedin className='text-2xl font-medium' />   </a>
                                      <a href="https://github.com/gokul-vsi">   <FaGithub className='text-2xl font-medium'/>  </a>
              </div>
            <p className='text-center text-white pt-5 pb-5 '>&copy; Copyright 2025. All rights reserved.</p>
        </div>
    </div>
  )
}
