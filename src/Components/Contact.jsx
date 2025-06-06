import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import TextField from '@mui/material/TextField';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_is0fh28', 'template_l384ho4', form.current, {
        publicKey: 'EIvz0waaN4umVp2lz',
      })
      .then(
        () => {          
          console.log('SUCCESS!');
          toast.success("Message send Successfully")
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <div id="Contact">
      <div className="container mx-auto p-5">
        <ToastContainer position="top-right" />
        <h1 className='md:text-5xl text-2xl md:mt-10 font-bold text-center'>Contact Me</h1>
        <p className='text-center mt-7'>Feel free to reach out for any inquiries or collaboration opportunities!</p>
          <form   ref={form} onSubmit={sendEmail}   className="flex flex-col justify-center mt-7 items-center">
            <ToastContainer position="top-right" />
            <div className='flex gap-5'>
              <TextField id="outlined-basic" name="from_name" label="Your Name" required variant="outlined" />
              <TextField id="outlined-basic" name="from_email" label="Email Address" required variant="outlined" />
            </div>
            <div className='mt-7 w-full max-w-md'>
              <textarea name="message" placeholder='Subject' required className='p-3 w-full border border-gray-400 rounded outline-blue-600' id=""></textarea>
            </div>
            <input type="submit"  value="Send Message"  className='p-2 border px-4 rounded bg-purple-600 text-white mt-7 hover:bg-white hover:border-purple-600 hover:text-purple-600'  />
          </form>
      </div>
    </div>
  )
}
