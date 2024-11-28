"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import payment from "@/assets/payment.png"
import shipping from "@/assets/shipping.png"
import refund from '@/assets/return.png'
import gift from '@/assets/gift.png'
import AOS from "aos";
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div className='w-full lg:px-28 px-5 pt-[8px] pb-[80px] grid lg:grid-cols-4
grid-cols-1 justify-center items-center gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
        <Image    src={shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1 className='text-x1 text-black font-semibold'>All Over India</h1> <p className="text-[17px] text-gray-500"> Lorem ipsum dolor sit amet.</p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
        <Image    src={payment} alt="" className="mb-[20px] w-[60px]" />
        <h1 className='text-x1 text-black font-semibold'>Get Cashback </h1> <p className="text-[17px] text-gray-500"> Lorem ipsum dolor sit amet.</p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
        <Image    src={gift} alt="" className="mb-[20px] w-[60px]" />
        <h1 className='text-x1 text-black font-semibold'>Amazing Gifts & Vouchers</h1> <p className="text-[17px] text-gray-500"> Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Services