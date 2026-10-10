import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function CaseCard({ person }) {
  const navigate = useNavigate();
  const isMissing = person.status === 'MISSING';

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
