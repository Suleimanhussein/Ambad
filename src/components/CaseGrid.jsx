import React from 'react';
import CaseCard from './CaseCard';

export default function CaseGrid({ cases }) {
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
