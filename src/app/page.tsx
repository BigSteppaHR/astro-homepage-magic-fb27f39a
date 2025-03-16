
import React from 'react';
import { Hero } from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Pricing />
    </main>
  );
}
