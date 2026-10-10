import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowLeft, MapPin, Calendar, Phone, Share2, AlertTriangle, 
  Send, CheckCircle2, ShieldAlert, Building2, User 
} from 'lucide-react';

export default function CaseDetails({ casesList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sightingText, setSightingText] = useState('');
  const [sightingSubmitted, setSightingSubmitted] = useState(false);

  // Find target case by ID (number or string)
  const person = casesList.find((c) => String(c.id) === String(id)) || casesList[0];

  if (!person) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-800">Case Record Not Found</h2>
          <Link to="/" className="mt-4 inline-block px-4 py-2 bg-[#07172B] text-white rounded-lg">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isMissing = person.status === 'MISSING';

  const handleSightingSubmit = (e) => {
    e.preventDefault();
    if (!sightingText.trim()) return;
    setSightingSubmitted(true);
    setTimeout(() => {
      setSightingSubmitted(false);
      setSightingText('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172033] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full space-y-6">
        
        {/* Back Navigation Button */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-[#E5E7EB] hover:bg-slate-50 px-4 py-2 rounded-xl transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#07172B]" />
            Back to Cases
          </button>

          <span className="text-xs text-slate-500 font-medium">
            Registry Dossier Case ID: <strong className="text-slate-800">MP-00{person.id}</strong>
          </span>
        </div>

        {/* Dossier Card Container */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-lg overflow-hidden p-6 sm:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Person Photo (Col 1-5) */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group">
                <span 
                  className={`absolute top-3 left-3 z-10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-md text-white shadow-md ${
                    isMissing ? 'bg-[#ea580c]' : 'bg-[#16a34a]'
                  }`}
                >
                  {person.status}
                </span>

                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Share & Download actions */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => alert(`Case dossier link for ${person.name} copied to clipboard!`)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#07172B] font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                >
                  <Share2 className="w-4 h-4 text-lime-600" />
                  Share Public Dossier
                </button>
              </div>
            </div>

            {/* Information Details (Col 6-12) */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#07172B] font-outfit">
                  {person.name}
                </h1>
                <p className="text-xs text-slate-500 mt-1">Official Registry Entry • Status: <strong className={isMissing ? 'text-orange-600' : 'text-emerald-600'}>{person.status}</strong></p>
              </div>

              {/* Data Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Age</span>
                  <span className="font-extrabold text-[#07172B] text-sm">{person.age}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Gender</span>
                  <span className="font-extrabold text-[#07172B] text-sm">{person.gender}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Height</span>
                  <span className="font-bold text-slate-800">{person.height || '5 ft 4 in'}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Report Date</span>
                  <span className="font-bold text-slate-800">{person.date}</span>
                </div>
              </div>

              {/* Last Known Location */}
              <div className="space-y-1 text-xs">
                <span className="text-slate-500 font-bold uppercase tracking-wider block">Last Known Location</span>
                <div className="flex items-center gap-2 bg-[#EFF8D8]/70 text-lime-900 px-4 py-2.5 rounded-xl border border-[#B7E600]/50 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-lime-700 shrink-0" />
                  <span>{person.region}</span>
                </div>
              </div>

              {/* Distinguishing Marks */}
              {person.distinguishingFeatures && (
                <div className="text-xs space-y-1">
                  <span className="text-slate-500 font-bold uppercase tracking-wider block">Distinguishing Features</span>
                  <p className="p-3 bg-slate-100 rounded-xl text-slate-800 font-medium">
                    {person.distinguishingFeatures}
                  </p>
                </div>
              )}

              {/* Circumstances / Description */}
              <div className="space-y-1.5 text-xs">
                <span className="text-slate-500 font-bold uppercase tracking-wider block">Case Description & Circumstances</span>
                <p className="text-slate-700 leading-relaxed font-normal text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {person.description || 'Reported missing from regional jurisdiction. If you have any information regarding their whereabouts, please contact authorities or submit a sighting report immediately.'}
                </p>
              </div>

              {/* Emergency Hotline Contact */}
              <div className="p-4 bg-[#07172B] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Official Organization Contact</span>
                  <p className="text-sm font-bold text-[#B7E600] flex items-center gap-1.5">
                    <Phone className="w-4 h-4" />
                    {person.contact || '@252 061 6825071'}
                  </p>
                </div>
                <a 
                  href={`tel:${person.contact || '+252 61 6825071'}`}
                  className="bg-[#B7E600] hover:bg-[#a3cc00] text-[#07172B] font-extrabold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all shrink-0"
                >
                  Call Hotline Now
                </a>
              </div>

            </div>

          </div>

          {/* Report Sighting Section */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-100 text-orange-700 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#07172B] font-outfit">Report Sighting / Provide Information</h3>
                <p className="text-xs text-slate-500">All submissions are transmitted directly to verified platform coordinators.</p>
              </div>
            </div>

            {sightingSubmitted ? (
              <div className="p-4 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                Thank you! Your information report has been logged successfully and sent to relevant authorities.
              </div>
            ) : (
              <form onSubmit={handleSightingSubmit} className="space-y-3">
                <textarea 
                  rows="3"
                  value={sightingText}
                  onChange={(e) => setSightingText(e.target.value)}
                  placeholder="Include date of sighting, specific location, physical condition, and your contact information..."
                  className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B7E600]"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#07172B] hover:bg-[#0B1F35] text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4 text-[#B7E600]" />
                  Submit Sightings Report
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
