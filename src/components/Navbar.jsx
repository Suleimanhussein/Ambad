import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, PlusCircle } from 'lucide-react';

export default function Navbar({ onOpenSearch, onOpenReport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orgDropdown, setOrgDropdown] = useState(false);
  const [casesDropdown, setCasesDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-[#07172B] text-white border-b border-slate-800 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#B7E600] text-[#07172B] font-extrabold flex items-center justify-center text-xl font-outfit shadow-md shadow-lime-500/10 group-hover:scale-105 transition-transform">
            AM
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-white font-outfit">
              Ambad <span className="text-[#B7E600]"></span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              {/* Global Missing Person Registry */}
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link 
            to="/" 
            className={`transition-colors py-1 ${isActive('/') ? 'text-[#B7E600] font-bold' : 'hover:text-[#B7E600]'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors py-1 ${isActive('/about') ? 'text-[#B7E600] font-bold' : 'hover:text-[#B7E600]'}`}
          >
            About Us
          </Link>



          {/* Present Cases Dropdown */}
          <div className="relative" onMouseEnter={() => setCasesDropdown(true)} onMouseLeave={() => setCasesDropdown(false)}>
            <Link to="/cases" className="flex items-center gap-1 hover:text-[#B7E600] transition-colors py-1">
              Present Cases
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${casesDropdown ? 'rotate-180 text-[#B7E600]' : 'text-slate-400'}`} />
            </Link>
            {casesDropdown && (
              <div className="absolute top-full left-0 w-48 bg-[#0B1F35] rounded-xl shadow-2xl border border-slate-700 py-2 z-50 animate-in fade-in duration-150 text-xs text-slate-200">
                <Link to="/cases" className="block px-4 py-2 hover:bg-slate-800 hover:text-[#B7E600]">All Present Cases</Link>
                <Link to="/cases?status=MISSING" className="block px-4 py-2 hover:bg-slate-800 text-orange-400 font-semibold">Active Missing Cases</Link>
                <Link to="/cases?status=FOUND" className="block px-4 py-2 hover:bg-slate-800 text-emerald-400 font-semibold">Resolved / Found Cases</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Authentication Actions */}
        <div className="flex items-center gap-3">
          {onOpenSearch && (
            <button 
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {/* {onOpenReport && (
            <button
              onClick={onOpenReport}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <PlusCircle className="w-4 h-4 text-[#B7E600]" />
              Report Case
            </button>
          )} */}

          <Link 
            to="/login"
            className="hidden sm:flex text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Log In
          </Link>

          <Link 
            to="/register"
            className="bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold px-4 py-2 text-sm rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95"
          >
            Register
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1F35] border-b border-slate-700 px-6 py-4 flex flex-col gap-3 shadow-xl text-sm">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[#B7E600] font-bold py-1">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-1 hover:text-[#B7E600]">About Us</Link>
          <Link to="/cases" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-1 hover:text-[#B7E600]">Present Cases</Link>
          
          <div className="pt-3 border-t border-slate-700 flex flex-col gap-2">
            {onOpenReport && (
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenReport(); }}
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-[#B7E600] font-bold py-2 rounded-lg border border-slate-700"
              >
                + Report Missing Person
              </button>
            )}
            <Link 
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-slate-200 font-semibold py-2 rounded-lg hover:bg-slate-800"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
