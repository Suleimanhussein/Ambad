import React from 'react';
import { 
  FileText, Sliders, HeartHandshake, Building2, Globe2, Target 
} from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      title: 'Easy reporting',
      desc: 'Instantly submit a missing person report with essential details so communities can act right away.',
      icon: FileText
    },
    {
      title: 'Advanced search',
      desc: 'Filter by location, age, gender, date, or use image search to find matching records.',
      icon: Sliders
    },
    {
      title: 'Community reach',
      desc: 'Share entries easily to amplify awareness across social platforms and networks.',
      icon: HeartHandshake
    },
    {
      title: 'Organization portal',
      desc: 'NGOs and law enforcement can manage cases, verify reports and coordinate with families.',
      icon: Building2
    },
    {
      title: 'Multilingual access',
      desc: 'Open and accessible in multiple languages and regions for global reach.',
      icon: Globe2
    },
    {
      title: 'One clear mission',
      desc: 'Technology and collaboration working together to bring missing people home.',
      icon: Target
    }
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-8 font-sans" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={feat.title}
                className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-4 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF8D8] text-lime-800 flex items-center justify-center shrink-0 border border-[#B7E600]/40">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#07172B] font-outfit">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
