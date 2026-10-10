import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';

export default function Introduction() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-10 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Main Text Content */}
        <div className="text-center space-y-2">
          <p className="text-sm sm:text-base text-[#172033] leading-relaxed font-medium">
            <strong className="font-bold text-[#07172B]">TheMissingPeople.com</strong> is a global AI platform created to unite individuals and organizations on a journey to share information about missing persons and found individuals. The platform is designed to increase visibility, organize data, and raise awareness across communities and public networks. Be part of the public response, submit info, and respond to information requests directly.{' '}
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-[#84cc16] font-bold underline hover:text-lime-700 transition-colors inline-block"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </p>

          {expanded && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-600 text-left space-y-2 animate-in fade-in duration-200">
              <p>
                Our vision is to leave no missing person behind by leveraging automated facial recognition technology, cross-agency coordination tools, and crowdsourced community reports.
              </p>
              <p>
                Every report submitted is verified through standardized protocols, ensuring that family members and NGOs can manage missing person files with privacy and full accuracy.
              </p>
            </div>
          )}
        </div>


      </div>
    </section>
  );
}
