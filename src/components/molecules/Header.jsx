'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../atoms/Button';

function cn(...a) {
  return a.filter(Boolean).join(' ');
}

const NAV = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact us', href: '#contact-us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden ? -88 : 0,
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 40, mass: 0.7 }}
      className={cn('sticky top-0 z-50 max-md:py-3 w-full')}>
      <div className={cn(' container ', 'transition-[padding] duration-300', scrolled ? '!py-3' : '!py-5')}>
        <div className={cn('flex items-center justify-between rounded-xl', 'transition-all duration-300', scrolled ? ' !py-3 !px-3   bg-white  border border-black/[.06] shadow-[0_8px_24px_rgba(0,0,0,.08)]' : '')}>
          {/* Left: Logo */}
          <Link href='/' className='flex items-center gap-2 px-3 py-2'>
            <Logo className='h-9 w-9 text-[#4A55A6]' />
            <span className=' text-[24px] font-[500] text-black '>Arka Integrate</span>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className='hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-medium text-black/70'>
            {NAV.map(item => (
              <Link key={item.label} href={item.href} className='relative hover:text-black transition'>
                {item.label}
                <span className='pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-[#4A55A6] transition-transform duration-300 group-hover:scale-x-100' />
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Burger */}
          <div className='flex md:max-w-[240px] md:w-full items-center gap-2 pr-2'>
            <Button href={'#contact-us'} className='max-md:hidden !px-10' size='md'>
              Contact us
            </Button>

            {/* Burger */}
            <button onClick={() => setOpen(true)} className='inline-flex md:hidden items-center justify-center h-11 w-11 rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition' aria-label='Open menu'>
              <BarsIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div className='fixed inset-0 z-40 bg-black/40' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />

            {/* Sheet */}
            <motion.aside className='fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-white shadow-2xl' initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 380, damping: 38 }}>
              <div className='flex items-center justify-between px-4 py-4 border-b'>
                <div className='flex items-center gap-2'>
                  <Logo className='h-8 w-8 text-[#4A55A6]' />
                  <span className='font-semibold'>Arka Integrate</span>
                </div>
                <button onClick={() => setOpen(false)} className='inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5' aria-label='Close menu'>
                  <CloseIcon />
                </button>
              </div>

              <nav className='px-4 py-3'>
                {NAV.map(item => (
                  <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className='block rounded-lg px-3 py-3 text-[15px] font-medium text-black/80 hover:bg-black/5'>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className='px-4 pt-2'>
                <Link href='#contact-us' onClick={() => setOpen(false)} className='inline-flex !w-[200px] items-center justify-center h-12 rounded-full bg-[#4A55A6] text-white font-semibold hover:opacity-95 transition'>
                  Contact us
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ===== Icons & Default Logo (optional) ===== */
function BarsIcon(props) {
  return (
    <svg viewBox='0 0 24 24' width='22' height='22' {...props}>
      <path d='M4 6h16M4 12h16M4 18h16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox='0 0 24 24' width='22' height='22' {...props}>
      <path d='M6 6l12 12M18 6l-12 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}

function Logo({ className = '' }) {
  return <img className={`${className}`} src='/icons/arka-move.svg' />;
}
