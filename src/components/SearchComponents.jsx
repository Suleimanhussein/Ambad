import React from 'react';
import { Search, Filter, ChevronDown, RefreshCw } from 'lucide-react';
import { regions } from '../data/cases';

export function SearchPanel({
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
  onResetSearch,
  onOpenAdvancedSearch
}) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 -mt-20 z-30 font-sans" id="search-panel">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-[#E5E7EB] p-5 md:p-6 transition-all duration-300">
        
        {/* Top Input Controls Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* NAME Field */}
          <div className="md:col-span-6 relative">
            <label className="block text-[11px] font-bold text-[#172033] uppercase tracking-wider mb-1">
              NAME
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter person name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3.5 pr-8 py-2.5 bg-slate-50 border border-[#E5E7EB] rounded-xl text-sm font-medium text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#B7E600] focus:border-transparent transition-all placeholder:text-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* REGION Field */}
          <div className="md:col-span-4 relative">
            <label className="block text-[11px] font-bold text-[#172033] uppercase tracking-wider mb-1">
              REGION
            </label>
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full appearance-none pl-3.5 pr-9 py-2.5 bg-slate-50 border border-[#E5E7EB] rounded-xl text-sm font-medium text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#B7E600] focus:border-transparent transition-all cursor-pointer"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2 md:self-end">
            <button
              onClick={() => {}}
              className="w-full bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </div>

        </div>

        {/* Bottom Sub-Actions Row */}
        <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Left: Advanced Search */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenAdvancedSearch}
              className="flex items-center gap-1.5 text-[#07172B] font-bold hover:text-lime-700 transition-colors"
            >
              <Filter className="w-3.5 h-3.5 text-lime-600" />
              <span>Advanced Search</span>
            </button>

            {(searchTerm || (selectedRegion !== 'All regions' && selectedRegion !== 'All Regions')) && (
              <button
                onClick={onResetSearch}
                className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors border-l border-slate-200 pl-3"
              >
                <RefreshCw className="w-3 h-3" />
                Clear filters
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default SearchPanel;
