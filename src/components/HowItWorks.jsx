import React from 'react';
import { Megaphone, Search, Users } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Report',
      description: 'Publish details of a missing person, age, location, photo and contacts, so the search can begin.',
      icon: Megaphone
    },
    {
      num: '02',
      title: 'Search',
      description: 'Search our growing database by region, name, date, or facial recognition.',
      icon: Search
    },
    {
      num: '03',
      title: 'Connect',
      description: 'Connect with families, organizations, and law enforcement to share vital information.',
      icon: Users
    }
  ];

  return (
    <section className="bg-slate-50/60 py-16 px-4 sm:px-8 border-t border-b border-[#E5E7EB] font-sans" id="how-it-works">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-lime-800 bg-[#EFF8D8] px-3.5 py-1 rounded-full inline-block border border-[#B7E600]/40">
            HOW THE PLATFORM WORKS
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172B] font-outfit tracking-tight">
            Built to help find missing people
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            The Missing People gives power to families, communities, and organizations — to keep data visible, searchable and actionable.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div 
                key={step.title}
                className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3 hover:border-lime-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF8D8] text-lime-900 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-outfit">{step.num}</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#07172B] font-outfit">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
