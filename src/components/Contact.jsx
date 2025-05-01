import React, { useRef, useState } from 'react';
import { FaArrowAltCircleDown, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d1olm5d', 'template_n4fchns', form.current, {
        publicKey: 'eLJP1BJe-9rZdpwAl',
      })
      .then(
        () => {
          setStatus({ success: true, message: 'Message sent successfully!' });
        },
        (error) => {
          setStatus({ success: false, message: 'Failed to send message. Please try again.' });
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:thisarabandara2@gmail.com" className='hover:underline'>
                thisarabandara2@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+94706900822</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Kandy, Sri Lanka.</span>
            </div>
            <div className='mb-4'>
              <br></br>
              <span>Follow on </span>
            </div>
            <div className="mb-4 flex space-x-6">
              <a href="https://web.facebook.com/thisara.bandara.140/" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@tikkafood" className="text-gray-400 hover:text-white text-2xl">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/in/thisara2057/" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/thisarabandara2" className="text-gray-400 hover:text-white text-2xl">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor="user_name" className='block mb-2'>Your Name</label>
                <input type="text" name="user_name" required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="user_email" className='block mb-2'>Email</label>
                <input type="email" name="user_email" required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea name="message" rows="5" required
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Message' />
              </div>
              <button type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>

              {status && (
                <p className={`mt-2 text-sm ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
