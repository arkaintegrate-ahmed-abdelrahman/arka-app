'use client';
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true, // animate only once
      offset: 80, // start a bit before
      mirror: false,
    });
  }, []);
  return null;
}
