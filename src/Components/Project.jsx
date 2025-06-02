import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import projects from './projects'

export const Project = () => {
  useEffect(()=>{
          AOS.init({duration:1000});
        })
  return (
    <div id="Project">
      <div className="container mx-auto p-5" data-aos="fade-down">
        <h1 className='md:text-5xl md:mt-10 font-bold text-center'>PROJECTS</h1>
        <div className="grid grid-cols-1 gap-8 mt-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((dd,index)=>(
              <div key={index} className='project-card rounded-lg shadow-lg bg-white'>
                  <img src={dd.image} alt="" className='w-full h-48' />
                  <div className='p-4'>
                    <h1 className='mt-2  text-lg font-medium '>{dd.title}</h1>
                  <p className=''>{dd.titlename}</p>
                  <div className="flex justify-between mt-6">
                    <a href={dd.link} className='text-lg text-purple-600 font-medium '>Live Demo</a>
                    <a href="" className='text-lg text-purple-600 font-medium'>github</a>
                  </div>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
