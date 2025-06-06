import React from 'react'
import { useEffect } from 'react';
import image1 from '../images/portfolio-1.jpg'
import { AutoType } from './AutoType'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";
import 'animate.css';

export const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  return (
    <div>
      <div className="container md:mt-5 mx-auto p-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 order-2 md:order-1 mt-5 " data-aos="fade-right">
          <img src={image1} className="h-full lg:h-[500px] w-full max-w-2xl object-cover rounded-md" alt="" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 lg:p-8 " data-aos="fade-left">
              <h1 className='md:text-4xl text-lg md:mt-18 md:ms-7 font-medium'>Hello, I'm Gokulnath</h1>
              <AutoType/>
              <p className='md:text-lg text-justify mt-2 md:mt-6 text-gray-500 text-lg md:ms-7'>
                Specialized in MERN Stack, I build dynamic, user-friendly web applications that look great and work flawlessly across all devices. Let's bring your vision to life with clean code and compelling design.
              </p>
              <div className="flex gap-5 md:ms-7 mt-2 md:mt-6 ">
                     <a href="#Contact" className='p-2 px-4 rounded bg-purple-600 text-white'>Contact Me</a>
                     <a href="" className='p-2 px-4 rounded border-2 border-purple-600 text-purple-600 animate__animated animate__pulse animate__fast animate__infinite'>Hire Me</a>
              </div>
              <div className="flex gap-3 mt-4 md:ms-7 md:mt-6">
                 <a href="https://www.instagram.com/itz_gokul_23_/">    <FaInstagram className='md:text-3xl text-2xl' /> </a>
                        <a href="https://www.linkedin.com/in/gokulnath-n-1305b9341/">  <FaLinkedin className='md:text-3xl text-2xl' />   </a>
                        <a href="https://github.com/gokul-vsi">   <FaGithub className='md:text-3xl text-2xl' />  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
