import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA({ onOpenReport }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 font-sans">
      <div className="bg-[#07172B] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        
        {/* Decorative glow */}
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#B7E600]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Text */}
        <div className="space-y-2 text-center md:text-left z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Ready to take the next step?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Start searching, reporting or joining as a volunteer.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 z-10">
          <Link
            to="/cases"
            className="px-6 py-3 rounded-xl bg-white text-[#07172B] hover:bg-slate-100 font-bold text-sm transition-all duration-200 shadow-md"
          >
            Browse all cases
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold text-sm shadow-md transition-all duration-200 active:scale-95"
          >
            Register
          </Link>
        </div>

      </div>
    </section>
  );
}
