import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './contexts/DashboardContext';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignsPage';
import HumanitarianAidPage from './pages/HumanitarianAidPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <DashboardProvider>
      <Router>
        <Routes>
          {/* Routes with Header and Footer */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="campanhas" element={<CampaignsPage />} />
            <Route path="ajuda-humanitaria" element={<HumanitarianAidPage />} />
            <Route path="como-funciona" element={<HowItWorksPage />} />
            <Route path="contato" element={<ContactPage />} />
          </Route>
          
          {/* Admin Route without MainLayout */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;
