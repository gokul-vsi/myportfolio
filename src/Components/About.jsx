import React from 'react'
import image2 from '../images/portfolio-2.jpg'

export const About = () => {
  return (
    <div id="About">
      <div className="container md:mt-10 mx-auto p-5">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="md:w-3/5">
            <h1 className='md:text-4xl text-2xl font-medium'>About us</h1>
            <p className='text-justify text-base mt-2 mb-5 md:mb-7 md:mt-5'>I am an enthusiastic Full Stack Developer with a specialization in the MERN Stack. My expertise covers a range of frontend technologies including HTML, CSS (Bootstrap), JavaScript, and React.js, ensuring responsive and engaging user experiences. On the backend, I utilize Node.js, Express.js, and MongoDB to build efficient and scalable applications. Additionally, I am skilled in web designing using tools like Figma to create visually appealing interfaces. I also offer services in MERN Stack web development With a collaborative approach and strong communication skills, I am dedicated to delivering high-quality web solutions that meet diverse needs.</p>
            <a href="" className='p-2  px-4 rounded bg-purple-600 text-white' >DOWNLOAD CV</a>
            <div className='border mt-8 border-gray-400'></div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
              <div className='bg-gray-200 rounded font-medium p-5'>
                <p className='text-xl'>Education</p>
                <p className='mt-2'>BCA , Indo American College - 2023</p>
              </div>
              <div className='bg-gray-200 rounded font-medium   p-5'>
                <p className='text-xl'>Certification</p>
                <p className='mt-2'>Full Stack Web Development and Designing , Web D School - 2024</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 md:px-5 md:me-8 ">
            <img src={image2} className='md:ms-11 about-img ' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
