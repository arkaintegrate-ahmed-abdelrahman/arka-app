'use client';
import Button from '@/components/atoms/Button';
import Footer from '@/components/pages/home/Footer';
import Hero from '@/components/pages/home/Hero';
import OurWorkSection from '@/components/pages/home/OurWorkSection';
import QualitySection from '@/components/pages/home/QualitySection';
import Team from '@/components/pages/home/Team';
import AOSProvider from '@/config/AOSProvider';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className='min-h-screen  text-[#101010]'>
      {/* Card */}
			<AOSProvider />
			<Hero />

			<QualitySection />
      <Team />
			<OurWorkSection />

			<Footer />
    </main>
  );
}
