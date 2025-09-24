'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* simple class join */
function cn(...args) {
  return args.filter(Boolean).join(' ');
}

const VARIANTS = {
  primary: 'bg-[#4450A8] text-white ',
  secondary: 'bg-white text-[#4450A8] border border-[#4450A8]/20 hover:border-[#4450A8]/40 shadow-[0_6px_16px_rgba(0,0,0,0.06)]',
  outline: 'bg-transparent text-[#4450A8] border border-[#4450A8] hover:bg-[#4450A8]/10',
  ghost: 'bg-transparent text-black hover:bg-black/5',
  gradient: 'text-white bg-[linear-gradient(90deg,#4A55A6_0%,#6C78D6_50%,#4A55A6_100%)] bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_10px_26px_rgba(74,85,166,0.45)]',
  dark: 'bg-black text-white hover:bg-black/90 shadow-[0_8px_22px_rgba(0,0,0,0.4)]',
};

const SIZES = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

const spring = { type: 'spring', stiffness: 400, damping: 28, mass: 0.6 };

export default function Button({   href, onClick, children = 'Contact us', className = '', variant = 'primary', size = 'lg', fullWidth = false, disabled = false, loading = false, leftIcon = null, rightIcon = null, ariaLabel, type = 'button' }) {
  const base = 'relative inline-flex select-none items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4450A8] ring-offset-white';

  const content = (
    <>
      {/* Shine highlight */}
      <span className={cn('pointer-events-none absolute inset-0 overflow-hidden rounded-full', disabled && 'opacity-0')} aria-hidden='true'>
        <span className='absolute -top-1/2 left-0 h-[200%] w-1/3 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[85%]' />
      </span>

      {/* Loading overlay */}
      {loading && (
        <span className='absolute inset-0 grid place-items-center'>
          <span className='h-5 w-5 animate-spin rounded-full border-2 border-white/70 border-t-transparent' />
        </span>
      )}

      {/* Label + icons */}
      <span className={cn('inline-flex items-center gap-2', loading && 'opacity-0')}>
        {leftIcon ? <span className='shrink-0'>{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span className='shrink-0'>{rightIcon}</span> : null}
      </span>
    </>
  );

  const Comp = href ? motion(Link) : motion.button;

  return (
    <Comp href={href} type={href ? undefined : type} onClick={onClick} aria-label={ariaLabel || (typeof children === 'string' ? children : 'button')} disabled={disabled || loading} className={cn('group' , "h-[50px] max-md:h-[45px] max-w-[242px] w-full  " , base, VARIANTS[variant] || VARIANTS.primary , fullWidth ? 'w-full' : 'w-auto', disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer', className)} initial={{ y: 0, scale: 1, rotate: 0 }} whileHover={{ y: -2, scale: 1.02, rotate: 0.2 }} whileTap={{ scale: 0.98, y: 0 }} transition={spring}>
      {/* subtle glow on hover */}
      <span className={cn('absolute -z-10 inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300', !disabled && 'group-hover:opacity-60', variant === 'primary' || variant === 'gradient' ? 'bg-[#4A55A6]' : variant === 'dark' ? 'bg-black' : 'bg-black/20')} />
      {content}
    </Comp>
  );
}
