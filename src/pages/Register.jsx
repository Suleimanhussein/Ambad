import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172033] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 my-8">
        <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl w-full max-w-md space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#B7E600] text-[#07172B] font-extrabold flex items-center justify-center text-2xl mx-auto font-outfit">
              MP
            </div>
            <h2 className="text-2xl font-bold font-outfit text-[#07172B]">Join Platform</h2>
            <p className="text-xs text-slate-500">Register as an individual, volunteer, or verified NGO</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Registration successful (Demo)'); }} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Name / Organization</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Edhi Foundation Volunteer"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#B7E600]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="contact@domain.org"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#B7E600]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#B7E600]"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold rounded-xl text-xs shadow-md transition-all"
            >
              Create Platform Account
            </button>
          </form>

          <div className="text-center text-xs text-slate-500">
            Already registered?{' '}
            <Link to="/login" className="text-[#07172B] font-bold underline">Sign in</Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
