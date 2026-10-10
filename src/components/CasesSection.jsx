import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function CaseCard({ person }) {
  const navigate = useNavigate();
  const isMissing = person.status?.toUpperCase() === 'MISSING';

  return (
    <div 
      onClick={() => navigate(`/cases/${person.id}`)}
      className="group bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer font-sans"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        {/* Status Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span 
            className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md text-white shadow-xs ${
              isMissing ? 'bg-[#ea580c]' : 'bg-[#16a34a]'
            }`}
          >
            {person.status}
          </span>
        </div>

        {/* Person Photo */}
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div>
          <h3 className="text-sm font-extrabold text-[#172033] group-hover:text-lime-700 transition-colors line-clamp-1 font-outfit">
            {person.name}
          </h3>

          {/* Details Table */}
          <div className="mt-2 grid grid-cols-2 gap-y-1 gap-x-2 text-[11px] text-slate-600">
            <div>
              <span className="text-slate-400 font-medium">Age:</span>{' '}
              <span className="font-semibold text-slate-800">{person.age}</span>
            </div>

            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate font-medium">{person.region}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium">Gender:</span>{' '}
              <span className="font-semibold text-slate-800">{person.gender}</span>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate text-[10px] font-medium">{person.date}</span>
            </div>
          </div>
        </div>

        {/* Proceed Action Button */}
        <div className="pt-2 border-t border-[#E5E7EB]">
          <button 
            className="w-full py-1.5 px-3 rounded-lg bg-slate-50 group-hover:bg-[#07172B] text-slate-700 group-hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1"
          >
            <span>Proceed</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function CaseGrid({ cases }) {
  if (!cases || cases.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <p className="text-slate-500 font-medium text-sm">
          No missing person record matching your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5">
      {cases.map((person) => (
        <CaseCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export function CaseTabs({
  activeTab,
  setActiveTab,
  totalCount,
  missingCount,
  foundCount,
  displayedCount
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-[#E5E7EB] font-sans">
      {/* Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
        <button
          onClick={() => setActiveTab('ALL')}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === 'ALL'
              ? 'bg-[#07172B] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All Cases ({totalCount})
        </button>
        <button
          onClick={() => setActiveTab('MISSING')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'MISSING'
              ? 'bg-[#ea580c] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          Missing ({missingCount})
        </button>
        <button
          onClick={() => setActiveTab('FOUND')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'FOUND'
              ? 'bg-[#16a34a] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Found ({foundCount})
        </button>
      </div>

      {/* Entry Count */}
      <div className="text-xs text-slate-500 font-medium">
        Showing <span className="font-bold text-[#172033]">{displayedCount}</span> entries
      </div>
    </div>
  );
}

export function CaseSection({ cases }) {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredCases = cases.filter((c) => {
    if (activeTab === 'ALL') return true;
    return c.status?.toUpperCase() === activeTab;
  });

  const totalCount = cases.length;
  const missingCount = cases.filter((c) => c.status?.toUpperCase() === 'MISSING').length;
  const foundCount = cases.filter((c) => c.status?.toUpperCase() === 'FOUND').length;

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

export default CaseSection;
