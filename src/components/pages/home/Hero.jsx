'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@/components/atoms/Button';

export default function Hero() {
  return (
    <section className='container  !mt-6'>
      <div className='bg-white rounded-xl md:rounded-[36px] p-5 sm:p-6  shadow-sm'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left column */}
          <div className=' ' data-aos='fade-up' data-aos-delay='100'>
            <h1 className='leading-[1.05] font-medium text-[35px] sm:text-[40px] md:text-[45px] xl:text-[55px] tracking-tight'>
              <span className='whitespace-nowrap'>Transform your</span>
              <br />
              <b className='font-extrabold text-primary'>IDEA</b> into <br />
              <span className='flex items-center flex-wrap gap-4 justify-between mt-2 md:mt-3'>
                <span className='bg-primary rounded-2xl px-4 py-1.5 text-white  '>Digital solution</span>

                <span className=' relative flex items-center'>
                  <img src='/home/logo-shape.png'  alt='Brand mark' className='md:h-[60px] h-[50px]  w-auto'   />
                </span>
              </span>
            </h1>

            {/* Quote */}
            <blockquote className='text-sm sm:text-lg md:text-xl leading-8 text-[#101010] mt-6 sm:mt-8 md:mt-10 italic max-w-xl' data-aos='fade-up' data-aos-delay='200'>
              “We don’t just build software—we build solutions that solve real problems, streamline operations, and create opportunities for growth. From concept to code, our team delivers digital experiences that matter.”
            </blockquote>
          </div>

          {/* Right column (image) */}
          <div className='relative  ' data-aos='zoom-in' data-aos-delay='150'>
            <div className='relative rounded-[30px]'>
              <Image src='/home/hero.png' alt='Developer coding on laptop' width={974} height={768} className='overflow-hidden rounded-[30px] w-full object-cover bg-white' priority />
							
              <span className='absolute top-[-10px] right-[-10px] bg-white z-[15] block rounded-[0_0_0_50px] w-[60px] h-[60px]' />
              <span className='absolute top-[0px] left-0 bg-white z-[15] block  w-full h-[2px] ' />
              <span className='absolute top-[-2px] right-[-3px] bg-white z-[15] block  w-[4px] h-full ' />
              <span className='absolute -top-px right-0 bg-white z-[10] block rounded-[0_0_0_30px] w-[50px] h-[50px]' />
              <b style={{ top: '0.3px' , right : "49.6px" }} className='block absolute  h-[25px] w-[25px] bg-white z-[11] path-shape' />
              <b style={{ top: '48.8px' }} className='block absolute right-0 h-[25px] w-[25px] bg-white z-[11] path-shape' />
            </div>

            {/* Floating CTA bubble */}
            <div className=' max-w-[280px] max-xl:max-w-[180px] w-full absolute right-0 -bottom-px bg-white p-3 rounded-tl-[15px] '>
              <Button href={'#contact-us'}  variant='primary' className='  ' >
                  Contact us
                </Button>

              {/* carve corners on bubble */}
              <b style={{ top: '-23px', right: '0' }} className='block absolute scale-y-[-1] h-[25px] w-[25px] bg-white path-shape' />
              <b style={{ bottom: '0', left: '-23px' }} className='block absolute scale-y-[-1] h-[25px] w-[25px] bg-white path-shape' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
