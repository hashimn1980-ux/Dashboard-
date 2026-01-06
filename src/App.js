import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroScreen from './pages/IntroScreen';
import ExecutiveView from './pages/ExecutiveView';
import ImplementationView from './pages/ImplementationView';
import RiskProtocolView from './pages/RiskProtocolView';
import Layout from './layouts/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/dashboard" element={<Layout><ExecutiveView /></Layout>} />
        <Route path="/implementation" element={<Layout><ImplementationView /></Layout>} />
        <Route path="/risk" element={<Layout><RiskProtocolView /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
