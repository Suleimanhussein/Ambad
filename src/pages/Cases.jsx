import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CaseSection from '../components/CaseSection';
import Footer from '../components/Footer';

export default function Cases({ casesList }) {
  const [searchParams] = useSearchParams();
  const statusParam = searchParams.get('status') || 'ALL';

  const filteredCases = useMemo(() => {
    return casesList.filter((item) => {
      const matchStatus = statusParam === 'ALL' || item.status === statusParam;
      return matchStatus;
    });
  }, [casesList, statusParam]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172033] flex flex-col font-sans">
      <Navbar />

      <div className="bg-[#07172B] text-white py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit">Present Cases Directory</h1>
          <p className="text-sm text-slate-300">
            Browse active missing person files and verified resolved cases.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <CaseSection cases={filteredCases} />
      </main>

      <Footer />
    </div>
  );
}
