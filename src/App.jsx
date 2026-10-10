import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cases from './pages/Cases';
import CaseDetails from './pages/CaseDetails';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

import { initialCases } from './data/cases';

export default function App() {
  const [casesList, setCasesList] = useState(initialCases);

  const handleAddCase = (newCase) => {
    setCasesList((prev) => [newCase, ...prev]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home casesList={casesList} onAddCase={handleAddCase} />} />
        <Route path="/cases" element={<Cases casesList={casesList} />} />
        <Route path="/cases/:id" element={<CaseDetails casesList={casesList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
