import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import LiveDonationPopup from './LiveDonationPopup';
import { useDashboard } from '../contexts/DashboardContext';

const MainLayout: React.FC = () => {
  const { livePopups } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Live Donation Popups */}
      <div className="fixed bottom-4 left-4 z-50 space-y-3">
        <AnimatePresence>
          {livePopups.map((donation) => (
            <LiveDonationPopup key={donation.id} donation={donation} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainLayout;
