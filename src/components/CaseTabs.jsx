import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CaseTabs({
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
