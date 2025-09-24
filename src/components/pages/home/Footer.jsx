'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const Footer = () => {
  return (
    <section className='container !mb-4 !px-4 text-white'>
      <div className='bg-[#101010] rounded-[20px] container !pt-12 md:!pt-20 '>
        {/* Headline */}
        <div className='text-center mx-auto max-md:pt-6 ' data-aos='fade-up'>
          <h2 style={{ marginTop: '30px' }} className=' text-3xl sm:text-4xl font-bold leading-tight'>
            Let&apos;s Work Together To Grow Your Business
          </h2>
          <p className='mt-4 max-2xl:max-w-[700px] w-full mx-auto text-white/70 italic leading-7' data-aos='fade-up' data-aos-delay='100'>
            &quot;Let’s turn your idea into reality. Reach out today and let’s discuss how we can help your business thrive.&quot;
          </p>
        </div>

        {/* Form */}
        <form id='contact-us' className=' mt-10 max-w-3xl mx-auto space-y-[20px]' data-aos='fade-up' data-aos-delay='150'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[12px]'>
            <input type='text' placeholder='First Name' className='w-full rounded-md bg-white text-black px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F61D4]' />
            <input type='text' placeholder='Last Name' className='w-full rounded-md bg-white text-black px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F61D4]' />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-[12px]'>
            <input type='email' placeholder='Email Address' className='w-full rounded-md bg-white text-black px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F61D4]' />
            <input type='tel' placeholder='Phone Number' className='w-full rounded-md bg-white text-black px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F61D4]' />
          </div>
          <textarea placeholder='Description' rows='5' className='w-full rounded-md bg-white text-black px-4 py-3 outline-none focus:ring-2 focus:ring-[#4F61D4]' />
          <div className='text-center' data-aos='zoom-in' data-aos-delay='200'>
            <Button className=' !max-w-[242px] !w-full !px-10' size='md'>
              Contact us
            </Button>
          </div>
        </form>

        {/* Footer */}
        <footer className='border-t mt-[30px] pt-[50px] border-white/10 pb-[35px]' data-aos='fade-up' data-aos-delay='100'>
          <div className='flex flex-col md:flex-row items-center justify-between '>
            <div className='w-full flex flex-wrap justify-center md:justify-start gap-3'>
              {['Instagram', 'LinkedIn', 'Facebook', 'Github'].map(s => (
                <a key={s} href='#' className='rounded-full border border-white max-md:px-2  px-4 py-1.5 text-sm text-white/80 hover:bg-white/10 transition' data-aos='fade-up' data-aos-delay='150'>
                  {s}
                </a>
              ))}
              <div className='flex-1 border border-white rounded-full py-2 px-2 flex items-center justify-center  w-full gap-3 text-white/70 text-sm'>
                <Image src='/icons/arka-white.svg' alt='Logo' width={22} height={22} />
                <span>All Rights Reserved</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
