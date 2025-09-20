import React from 'react';
import CampaignMedia from '../components/CampaignMedia';
import CampaignDetails from '../components/CampaignDetails';
import CampaignStory from '../components/CampaignStory';
import DonationForm from '../components/DonationForm';
import RecentDonations from '../components/RecentDonations';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-8">
            <CampaignMedia />
            <CampaignDetails />
            <CampaignStory />
          </div>

          {/* Sticky Donation Form Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <DonationForm />
            </div>
          </div>
        </div>
      </div>
      <RecentDonations />
    </>
  );
};

export default HomePage;
