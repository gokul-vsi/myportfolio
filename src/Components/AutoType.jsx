import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const AutoType = () => {
     const typedRef = useRef(null); 

  useEffect(() => {
    
    const options = {
      strings: ["Full Stack Web developer", "Web Designer","MERN Stack developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    
    const typedInstance = new Typed(typedRef.current, options);

    
    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <div>
        <h2 className='md:text-4xl text-lg md:mt-6 mt-2 md:ms-7 font-medium'><span className="auto-type" ref={typedRef}></span></h2>
    </div>
  )
}
