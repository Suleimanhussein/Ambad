import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172033] flex flex-col font-sans">
      <Navbar />

      <div className="bg-[#07172B] text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#B7E600] uppercase tracking-wider">About Our Platform</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit">About Missing People</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            A global platform to help reunite families about missing and found persons — connecting families, communities, and humanitarian organizations worldwide.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <HowItWorks />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
