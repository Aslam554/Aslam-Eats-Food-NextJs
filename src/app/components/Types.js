"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import vg from '@/assets/veg.jpg'
import nvg from '@/assets/nonveg.jpg'
import swts from '@/assets/sweets.jpg'
import AOS from 'aos'
const Types = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])
  return (
    <div className='w-full lg:px-20 px-5 py-[88px] grid lg:grid-cols-3 grid-cols-1
justify-center items-start gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col
justify-center items-end gap-6 bg-cover bg-center p-[30px] rounded-lg"
         style={{backgroundImage:`url(${vg.src})`}}>
        <h1 className="text-themeyellow border rounded-lg border-themeyellow px-6
py-2 text-lg">60% Off</h1>
<h1 className="text-4x1 text-end text-white font-semibold">Pure Veg <br />
       Food Items</h1>
      <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ORDER NOW</button>
    </div>

    <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col
justify-center items-end gap-6 bg-cover bg-center p-[30px] rounded-lg"
         style={{backgroundImage:`url(${nvg.src})`}}>
        <h1 className="text-themeyellow border rounded-lg border-themeyellow px-6
py-2 text-lg">68% Offc</h1>
<h1 className="text-4x1 text-end text-white font-semibold">Non Veg <br />
        Food Items</h1>
      <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ORDER NOW</button>
    </div>

    <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col
justify-center items-end gap-6 bg-cover bg-center p-[30px] rounded-lg"
         style={{backgroundImage:`url(${swts.src})`}}>
        <h1 className="text-themeyellow border rounded-lg border-themeyellow px-6
py-2 text-lg">68% Offc</h1>
<h1 className="text-4x1 text-end text-white font-semibold">Sweets <br />
        Delicious</h1>
      <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ORDER NOW</button>
    </div>

    </div>
  )
}

export default Types