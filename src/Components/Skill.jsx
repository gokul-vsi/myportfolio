import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import skills from './skills'

export const Skill = () => {
  useEffect(()=>{
        AOS.init({duration:1000});
      })
  return (
    <div id="Skill">
      <div className="container md:mt-12 md:px-10 mx-auto p-5" data-aos="zoom-in">
        <h1 className='md:text-5xl font-bold text-center'>MY SKILLS</h1>
        <div className="grid gap-4 mt-5 md:mt-14 grid-cols-2 md:grid-cols-4">
            {
              skills.map((dd,index)=>(
                
                <div key={index} className='text-center mb-5'>
                  <img src={dd.image} className='w-20 h-20 mx-auto' alt="" />
                  <p className='my-2 text-lg font-medium '>{dd.title}</p>
                  <p>{dd.skill}</p>
                </div>

              ))
            }
        </div>
      </div>
    </div>
  )
}
