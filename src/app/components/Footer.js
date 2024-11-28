"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import client1 from '@/assets/client1.png'
import client2 from '@/assets/client2.png'
import client3 from '@/assets/client3.png'
import client4 from '@/assets/client4.png'
import client5 from '@/assets/client5.png'
import client6 from '@/assets/client6.png'
import google from '@/assets/google.jpg'
import apple from '@/assets/apple.jpg'
import pay1 from '@/assets/pay-1.jpg'
import pay2 from '@/assets/pay-2.jpg'
import pay3 from '@/assets/pay-3.jpg'
import pay4 from '@/assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col
justify-center items-strt gap-10 grow'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-4xl font-bold text-themepurple underline
italic'>Aslam Eats</h1>
            <p className='text-gray-500 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptatem <br />doloribus accusamus neque, quam laboriosam fugiat ipsa distinctio similique cumque?</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-black text-xl font-semibold capitalize'>Download our App Aslam Eats!</h1>
            <div className='flex justify-center items-center gap-4'>
              <Image    src={google} alt="" />
              <Image    src={apple} alt="" />
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-delay='200'>
          <h1 className='text-black text-xl font-semibold capitalize'>useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
          </ul>

        </div>

        <div data-aos='zoom-in' data-aos-delay='200'>
          <h1 className='text-black text-xl font-semibold capitalize'>useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
          </ul>

        </div>

        <div data-aos='zoom-in' data-aos-delay='200'>
          <h1 className='text-black text-xl font-semibold capitalize'>useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Links</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Links</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Links</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Links</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Links</li>
          </ul>

        </div>
      </div>
      {/* 2nd box ends here*/}

      {/* 3rd box starts here*/}
      <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
        <hr className='border-t border-gray-300 py-3' />
        <div className='w-full flex 1g:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
            <Image    src={pay1} alt="" className='w-[50px] rounded-lg' />
            <Image    src={pay2} alt="" className='w-[50px] rounded-lg' />
            <Image    src={pay3} alt="" className='w-[50px] rounded-lg' />
            <Image    src={pay4} alt="" className='w-[50px] rounded-lg' />
          </div>
          <div className='lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'>
            <h1 className='text-black font-semibold text-2xl'>Subscribe FoodVlog</h1>
            <div>
              <input type="email" placeholder='Enter valid email'
                className='lg:w-auto w-full capitalize px-6 py-3 rounded-1-lg' />
              <button className='bg-themepurple lg:w-auto w-full text-white hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg font-semibold uppercase'>submit</button>
            </div>
          </div>
          <div className='lg:w-[20%] w-full'>
            <p className='text-gray-500 lg:text-end text-center'>2024 powered by Aslam Eats!</p>
          </div>
        </div>
      </div>
      {/* 3rd box ends here*/}

      {/* Scroll to top button*/}
      <div id='icon-box' className='bg-themepurple text-white p-3 rounded-full hover:bg-themeyellow ☐ hover: text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>




    </div>

  )
}

export default Footer