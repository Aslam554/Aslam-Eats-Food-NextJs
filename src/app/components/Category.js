"use client"
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image';
import cat1 from "@/assets/cat1.jpg"
import cat2 from "@/assets/cat2.jpg"
import cat3 from "@/assets/cat3.jpg"
import cat4 from "@/assets/cat4.jpg"
import burger from "@/assets/burger.jpg"
import i1 from "@/assets/1.jpg"
import i2 from "@/assets/2.jpg"
import i9 from "@/assets/9.jpg"
import i10 from "@/assets/10.jpg"
import bir from "@/assets/biryani.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div id='category' className="w-full bg-gray-100 lg:px-28 px-5 pt-[138px] pb- [80px] flex lg:flex-row flex-col justify-center items-center gap-20">
      <div data-aos='zoom-in' data-aos-delay="50" className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]">
        <h1 className="text-themepurple text-xl font-semibold text-center">Favorite Dishes</h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center">Popular Items</h1>
        <button className="bg-themepurple hover:bg-themeyellow text-white hover: text-black px-8 py-3 rounded-lg font-semibold mt-[60px]"> VIEW ALL</button>
        </div>

        <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
          <div data-aos="zoom-in" data-aos-delay="100"className="flex flex-col
 justify-center items-center gap-6 ">
          <Image     src={burger} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Burger</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="200"className="flex flex-col
 justify-center items-center gap-6">
          <Image    src={i1} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Margherita Pizza</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="300"className="flex flex-col
 justify-center items-center gap-6">
          <Image    src={i10} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Chocolate Lava Cake</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="400"className="flex flex-col
 justify-center items-center gap-6">
          <Image    src={i9} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover: text-themepurple
         cursor-pointer">Butter Chicken</h1>
         </div>

         <div data-aos="zoom-in" data-aos-delay="500"className="flex flex-col
 justify-center items-center gap-6">
          <Image    src={burger} alt="" className="rounded-lg w-[300px] h-[200px] cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple
         cursor-pointer">Burger</h1>
         </div>

         
       </div>
    </div>
  )
}

export default Category