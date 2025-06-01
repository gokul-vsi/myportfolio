import React from 'react'
import skills from './skills'

export const Skill = () => {
  return (
    <div id="Skill">
      <div className="container md:mt-10 mx-auto p-5">
        <h1 className='md:text-5xl font-bold text-center'>MY SKILLs</h1>
        <div className="grid gap-4 mt-5 md:mt-14 grid-cols-2 md:grid-cols-4">
            {
              skills.map((dd,index)=>(
                
                <div key={index} className='text-center mb-5'>
                  <img src={dd.image} className='w-20 h-20 mx-auto' alt="" />
                  <p>{dd.title}</p>
                  <p>{dd.skill}</p>
                </div>

              ))
            }
        </div>
      </div>
    </div>
  )
}
