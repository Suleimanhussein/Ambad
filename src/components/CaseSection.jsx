import React, { useState } from 'react';
import CaseTabs from './CaseTabs';
import CaseGrid from './CaseGrid';
import { ArrowRight } from 'lucide-react';

export default function CaseSection({ cases }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredCases = cases.filter((c) => {
    if (activeTab === 'ALL') return true;
    return c.status === activeTab;
  });

  const totalCount = cases.length;
  const missingCount = cases.filter((c) => c.status === 'MISSING').length;
  const foundCount = cases.filter((c) => c.status === 'FOUND').length;

  return (
    <section className="bg-white py-10 px-4 sm:px-8 font-sans" id="cases-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Case Filter Tabs */}
        <CaseTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          totalCount={totalCount}
          missingCount={missingCount}
          foundCount={foundCount}
          displayedCount={filteredCases.length}
        />

        {/* 5-Column Responsive Card Grid */}
        <CaseGrid cases={filteredCases} />

        {/* Browse All Cases Button */}
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setActiveTab('ALL')}
            className="bg-[#07172B] hover:bg-[#0B1F35] text-white font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>Browse All Cases</span>
            <ArrowRight className="w-4 h-4 text-[#B7E600] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
