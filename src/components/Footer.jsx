import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07172B] text-slate-300 font-sans border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info & Emergency Notice */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B7E600] text-[#07172B] font-extrabold flex items-center justify-center text-xl font-outfit shadow-md shadow-lime-500/10">
                AM
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-outfit">
                Ambad <span className="text-[#B7E600]"></span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              A global platform to help reunite families about missing and found persons — connecting families, communities, and organizations.
            </p>

            
          </div>

          {/* EXPLORE */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-outfit">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/" className="hover:text-[#B7E600] transition-colors">Home</Link></li>
              <li><Link to="/cases" className="hover:text-[#B7E600] transition-colors">Browse cases</Link></li>
              <li><a href="#search-panel" className="hover:text-[#B7E600] transition-colors">Advanced search</a></li>
              <li><Link to="/about" className="hover:text-[#B7E600] transition-colors">About us</Link></li>
              <li><Link to="/about" className="hover:text-[#B7E600] transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* ACCOUNT */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-outfit">
              ACCOUNT
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/login" className="hover:text-[#B7E600] transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-[#B7E600] transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-outfit">
              LEGAL
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#terms" className="hover:text-[#B7E600] transition-colors">Terms and conditions</a></li>
              <li><a href="#privacy" className="hover:text-[#B7E600] transition-colors">Privacy policy</a></li>
              <li><a href="#impression" className="hover:text-[#B7E600] transition-colors">Impression policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            © 2026 Missing People. Created by Suleiman. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Follow us:</span>
            <a href="#facebook" className="hover:text-white transition-colors" title="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#twitter" className="hover:text-white transition-colors" title="Twitter / X">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#linkedin" className="hover:text-white transition-colors" title="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
