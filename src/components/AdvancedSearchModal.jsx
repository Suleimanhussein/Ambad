import React from 'react';
import { X, Filter, RotateCcw } from 'lucide-react';
import { regions } from '../data/cases';

export default function AdvancedSearchModal({
  isOpen,
  onClose,
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
  selectedGender,
  setSelectedGender,
  selectedStatus,
  setSelectedStatus,
  onResetSearch
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#07172B] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#B7E600]/20 text-[#B7E600] rounded-xl">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-outfit">Advanced Search & Filters</h2>
              <p className="text-[11px] text-slate-400">Refine search criteria across registry entries</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Form */}
        <div className="p-6 space-y-4 text-xs">
          
          <div>
            <label className="block font-bold text-slate-700 mb-1">Search by Person Name</label>
            <input 
              type="text" 
              placeholder="e.g. Asad, Fatima, Kamran..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#B7E600]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
              >
                <option value="ALL">All Statuses</option>
                <option value="MISSING">Missing Only</option>
                <option value="FOUND">Found Only</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Gender</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
              >
                <option value="ALL">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Region / City</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={onResetSearch}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold py-2.5 px-4 rounded-xl text-center shadow-md transition-all"
            >
              Apply Filters
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
