"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import order from "@/assets/order.jpg"
import bannerburger from "@/assets/bannerburger.jpg"
import AOS from "aos"
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div className="w-full lg:px-28 px-5 py-[88px]">
      <div data-aos="zoom-in" data-aos-delay="100" className="w-[100%] h-[600px] p-4 rounded-1g bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4" style={{ backgroundImage: `url(${bannerburger.src})`}} spy="true" smooth='true'  >
        <h1 className='text-white text-2xl  font-semibold'>Everyday Popular</h1>
        <h1 className='text-white font-extrabold text-[42px] leading-[58px] text-center'>Food of The Day</h1>
      </div>
    </div>
  )
}

export default Banner