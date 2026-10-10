import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchPanel from '../components/SearchPanel';
import Introduction from '../components/Introduction';
import CaseSection from '../components/CaseSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import AdvancedSearchModal from '../components/AdvancedSearchModal';
import ReportModal from '../components/ReportModal';

export default function Home({ casesList, onAddCase }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  // Modals
  const [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Real-time filtering
  const filteredCases = useMemo(() => {
    return casesList.filter((item) => {
      const matchName = searchTerm.trim() === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchRegion = selectedRegion === 'All Regions' || selectedRegion === 'All regions' || 
        item.region?.toLowerCase() === selectedRegion.toLowerCase();

      const matchGender = selectedGender === 'ALL' ||
        item.gender === selectedGender;

      const matchStatus = selectedStatus === 'ALL' ||
        item.status === selectedStatus;

      return matchName && matchRegion && matchGender && matchStatus;
    });
  }, [casesList, searchTerm, selectedRegion, selectedGender, selectedStatus]);

  const handleResetSearch = () => {
    setSearchTerm('');
    setSelectedRegion('All Regions');
    setSelectedGender('ALL');
    setSelectedStatus('ALL');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172033] flex flex-col font-sans selection:bg-[#B7E600] selection:text-[#07172B]">
      {/* NAVBAR */}
      <Navbar 
        onOpenSearch={() => setAdvancedSearchOpen(true)}
        onOpenReport={() => setReportModalOpen(true)}
      />

      {/* HERO */}
      <Hero />

      {/* SEARCH PANEL */}
      <SearchPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        onResetSearch={handleResetSearch}
        onOpenAdvancedSearch={() => setAdvancedSearchOpen(true)}
      />

      {/* INTRODUCTION */}
      <Introduction />

      {/* CASE SECTION */}
      <CaseSection cases={filteredCases} />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* FEATURES */}
      <Features />

      {/* CTA */}
      <CTA onOpenReport={() => setReportModalOpen(true)} />

      {/* FOOTER */}
      <Footer />

      {/* Interactive Modals */}
      <AdvancedSearchModal
        isOpen={advancedSearchOpen}
        onClose={() => setAdvancedSearchOpen(false)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        onResetSearch={handleResetSearch}
      />

      <ReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onAddCase={onAddCase}
      />
    </div>
  );
}
