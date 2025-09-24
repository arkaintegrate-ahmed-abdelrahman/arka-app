'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowDownRight } from 'lucide-react';

export default function QualitySection() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quart', once: true, offset: 80 });
  }, []);

  return (
    <section className='container  !my-8  '>
      <div className='bg-white rounded-xl sm:rounded-[36px] max-sm:p-5 sm:p-8 md:p-6 py-16 md:py-20 shadow-sm'>
        <div className='grid md:grid-cols-2 gap-3 xl:gap-12 items-center'>
          {/* ===== Left: Headline & sub ===== */}
          <div className='  max-w-full w-full' data-aos='fade-up'>
            <section className='flex flex-col items-start gap-6  '>
              {/* Main Heading */}
              <h1 className=' text-[30px] md:text-[35px] xl:text-[55px] font-[500] leading-snug text-black'>
                Deliver a <span className='font-[900]'>high-</span>
                <br />
                <span className='font-[900]'>quality </span>
                <span
                  className={`
									relative bg-[#D9DDF0] text-black px-4 py-2 rounded-[20px] inline-block
									after:absolute after:bg-[#D9DDF0] max-md:after:w-[38px] max-md:after:h-[35px] after:w-[40px] after:h-[40px]  after:bottom-[-20px] after:left-0
									`}>
                  <span className='absolute bg-[#D9DDF0]  w-[40px] h-[40px]  bottom-[-40px] max-md:left-[36px] left-[40px] ' style={{ clipPath: "path('M25 0 H0 V25 A25 25 0 0 1 25 0 Z')"  }}></span>
                  <span className='absolute bg-[#D9DDF0]  w-[40px] h-[40px]  max-sm:bottom-[-1px] max-sm:left-[-39px] bottom-0 left-[-40px] rotate-[-180deg] ' style={{ clipPath: "path('M25 0 H0 V25 A25 25 0 0 1 25 0 Z')"   }}></span>
                  Software
                </span>
                <br />
                <span className='bg-[#D9DDF0] text-black px-4 py-2 rounded-[20px] inline-block'>Solution </span>
                <span className='inline-flex align-middle mt-4'>
                  <img src='/home/arrow-shape.png' alt='' width={120} height={60} className=' mx-4 h-[46px] sm:h-[56px] w-auto inline-block' priority />
                </span>
              </h1>
            </section>

            <blockquote className='mt-6 sm:mt-8 max-w-2xl text-[#101010] text-xs sm:text-xl italic leading-8' data-aos='fade-up' data-aos-delay='150'>
              “We design, develop, and deliver scalable digital solutions that empower businesses to grow, innovate, and lead in their industries.”
            </blockquote>
          </div>

          {/* ===== Right: Mission / Vision cards ===== */}
          <div className=' w-full'>
            <div className='grid xl:grid-cols-2 gap-6'>
              {/* Mission (dark card) */}
              <div className='rounded-[28px] bg-[#101010] text-white p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]' data-aos='fade-right'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-semibold'>Mission</h3>
                  <p className='mt-3 text-white/80 leading-7'>"To empower businesses by creating smart, scalable, and user-friendly digital solutions that make a real difference."</p>
                </div>

                <div className='mt-10 sm:mt-12' data-aos='zoom-in' data-aos-delay='150'>
                  <Image src='/home/mission.png' alt='Mission illustration' width={560} height={240} className='w-full h-auto' />
                </div>
              </div>

              {/* Vision (primary card) */}
              <div className='rounded-[28px] bg-primary text-white p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[320px] md:min-h-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]' data-aos='fade-left' data-aos-delay='100'>
                <div>
                  <div className='mb-10 sm:mb-12' data-aos='zoom-in' data-aos-delay='200'>
                    <Image src='/home/vision.png' alt='Vision illustration' width={560} height={240} className='w-full h-auto' />
                  </div>

                  <h3 className='text-xl sm:text-2xl font-semibold'>Vision</h3>
                  <p className='mt-3 text-white/90 leading-7'>"To be a global technology partner that drives digital transformation and shapes the future of innovation."</p>
                </div>
              </div>
              {/* End Vision */}
            </div>
          </div>
          {/* ===== End right ===== */}
        </div>
      </div>
    </section>
  );
}
