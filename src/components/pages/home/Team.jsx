'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TAGS = ['Collaboration', 'Creative', 'Support', 'Communication', 'Innovating', 'Building together', 'Delivering as one', 'Shared vision'];

const TEAM = [
  { name: 'Nesma Nasser ', role: 'QC Engineer', img: '/team/2.png', badge: '+3 years experience' },
  { name: 'Yasser Elshabrawy ', role: 'Senior Frontend Developer', img: '/team/5.png', badge: '+3 years experience' },
  { name: 'Ahmed Abdelrhman', role: 'Full Stack Developer', img: '/team/3.png', badge: '+5 years experience' },
  { name: 'Ayat Tarek', role: 'Senior UI/UX Designer', img: '/team/1.png', badge: '- years experience' },
  { name: 'Hazem Elhosary', role: 'BA', img: '/team/4.png', badge: '+2 years experience' },
];

export default function Team() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Ensure refs exist before enabling Navigation (fixes mobile click issues)
  useEffect(() => {
    setSwiperReady(!!prevRef.current && !!nextRef.current);
  }, [prevRef.current, nextRef.current]);

  return (
    <section className='mb-12 mt-18 md:my-20 md:mt-28 '>
      <div className='container  '>
        <div className='grid lg:grid-cols-12 gap-10 items-start'>
          {/* Left: Title + chips */}
          <div className='lg:col-span-5' data-aos='fade-up'>
            <h2 className='text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-medium leading-[1.1]'>
              Your <span className='bg-primary text-white rounded-2xl px-4 py-1 inline-block'>Success</span>
              <br />
              <span className='text-black/80 font-semibold'>Our teamwork</span>
            </h2>

            <div className='mt-6   flex flex-wrap gap-[16px] max-w-lg overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible' data-aos='fade-up' data-aos-delay='120'>
              {TAGS.map(t => (
                <span key={t} className='select-none rounded-full border border-[#1D1D21] px-[12px]  md:px-[24px] py-2 text-sm sm:text-base text-[#1D1D21] shadow-sm hover:shadow transition'>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Swiper slider */}
          <div className='max-lg:w-[calc(100vw-50px)] lg:col-span-7  max-md:mt-[40px] relative'>
            {/* Controls */}
            <div className='absolute -top-16 right-0 z-20 flex gap-2 pointer-events-none' data-aos='fade-left' data-aos-delay='150'>
              {/* NOTE: pointer-events-none on wrapper + pointer-events-auto on buttons prevents slide layer from stealing taps on mobile */}
              <button
                ref={prevRef}
                aria-label='Previous'
                className='group h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-md transition hover:bg-white pointer-events-auto
                           [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:pointer-events-none'>
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                ref={nextRef}
                aria-label='Next'
                className='group h-10 w-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-md transition hover:bg-white pointer-events-auto
                           [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:pointer-events-none'>
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>

            <Swiper
              modules={[Navigation, A11y]}
              // Important: only pass navigation after refs are ready (fixes iOS/Android click issues)
              navigation={swiperReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
              onInit={swiper => {
                // Re-init navigation once refs become ready
                if (!swiper.params.navigation) return;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              a11y={{ enabled: true }}
              slidesPerView={1.05}
              spaceBetween={14}
              speed={550}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.05 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3.05 },
              }}
              className='!px-1 !pb-2 overflow-visible'>
              {TEAM.map((m, i) => (
                <SwiperSlide key={i} className='!h-auto'>
                  <TeamCard {...m} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, img, badge }) {
  return (
    <article className='h-full rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition'>
      <div className='relative p-3 '>
        {/* If you prefer Next/Image, swap back in; keeping <img> since that's how you had it */}
        <img src={img} alt={name} className='rounded-2xl aspect-square w-full object-contain' />
        {badge && <span className='absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-medium shadow'>{badge}</span>}

        <span style={{ top: '12px', left: '12px' }} className='absolute  bg-white z-[10] block rounded-[0_0_20px_0] w-[20px] h-[20px]' />
        <b style={{ top: '11.5px', left: '31px' }} className='block absolute scale-x-[-1]  h-[7px] w-[7px] bg-white z-[11] path-7' />
        <b style={{ top: '31px', left: '12px' }} className='block absolute rotate-[-90deg]  h-[7px] w-[7px] bg-white z-[11] path-7' />
      </div>

      <div className='px-4 pb-5 pt-2'>
        <h3 className='text-[18px] font-semibold text-black'>{name}</h3>
        <p className='text-sm text-black/60 mt-0.5'>{role}</p>
      </div>
    </article>
  );
}
