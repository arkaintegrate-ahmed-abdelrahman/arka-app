'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

export default function OurWorkSection() {
  return (
    <section className='my-10 max-md:hidden'>
      <div className='container'>
        {/* ======= Top row ======= */}
        <div className='  grid lg:grid-cols-[400px,1fr] gap-8 items-start' >
          <div className=' max-lg:hidden relative' data-aos='fade-right' data-aos-delay='50'>
            <div className='rounded-[28px] p-6 sm:p-7 md:p-8'>
              <p className='italic leading-7 max-w-md'>"We’ve partnered with startups, enterprises, and organizations across industries to build custom digital solutions. Our portfolio reflects the creativity, innovation, and dedication we bring to every project. Explore some of our success stories and see how we turn ideas into impactful software."</p>
              <Button href={"#contact-us"} className='mt-6 !px-12' size='md'>
                Contact us
              </Button>
            </div>
          </div>

          {/* Right: award chip + purple bar */}
          <div className='bg-white rounded-[20px_20px_0_0] flex flex-col justify-center h-full p-6' >
            <h2 className='text-[56px] max-md:text-[40px] font-[500] leading-[1.05]' data-aos='fade-left' data-aos-delay='100' >
              Our work <img src='/home/tag-shape.png' className=' max-sm:!mt-4 inline-block h-[60px] align-middle' />
              <br />
              <span className='bg-primary inline-block !mt-4 rounded-2xl py-2 px-4 text-white'>Our Success </span>
            </h2>
          </div>
        </div>

        {/* ======= Bottom row ======= */}
        <div className=' max-lg:rounded-[0_0_20px_20px] lg:rounded-[20px_0_20px_20px] bg-white py-12 px-8 grid lg:grid-cols-[500px,1.05fr] gap-8 '>
          {/* Left: two client cards */}
          <div className='space-y-6'>
            {/* Card 1 */}
            <div    className='rounded-[18px] bg-[#ededed] p-5 border border-[#1D1D21] shadow-[0_2px_0_#0000000d]' data-aos='zoom-in' data-aos-delay='200'>
              <div className='flex items-center gap-3'>
                <Image src='/icons/arka-move.svg' alt='Arka Integrate' width={36} height={36} className='rounded-[10px]' />
                <div className='text-base text-[#000]'>Arka Integrate</div>
              </div>
              <div className='text-xl text-[#1D1D21] font-semibold mt-4 mb-4'>ARKA integrate</div>
              <p className='mt-1 text-[#1D1D21] leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.</p>
            </div>

            {/* Card 2 */}
            <div  className='rounded-[18px] bg-white p-5 border border-[#EDEDED] shadow-[0_2px_0_#0000000d]' data-aos='zoom-in' data-aos-delay='260'>
              <div className='flex items-center gap-3'>
                <Image src='/home/rh.png' alt='RH-NYC' width={40} height={40} />
                <div className='text-base text-[#000]'>RH-NYC</div>
              </div>
              <div className='text-xl text-[#1D1D21] font-semibold mt-4 mb-4 '>RH-NYC</div>
              <p className='mt-1 text-[#1D1D21] leading-7'>Lead customers to a sale through recommended purchases and tailored offerings.</p>
            </div>
          </div>

          {/* Right: big lilac panel with laptop */}
          <div className='relative rounded-[28px] bg-[#4451A333] p-4 sm:p-6 md:px-8 md:py-2 overflow-hidden' data-aos='fade-left' data-aos-delay='220'>
            <div className='relative py-12 mx-auto w-full max-w-[820px]'>
              <Image src='/home/mockup.png' alt='App preview on laptop' width={1200} height={700} className='w-full h-auto select-none' priority={false} />
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
