import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Donation {
  id: string;
  name: string;
  amount: number;
  time: Date;
  message?: string;
  pixCode: string;
}

interface LiveDonationPopupProps {
  donation: Donation;
}

const LiveDonationPopup: React.FC<LiveDonationPopupProps> = ({ donation }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      transition={{ duration: 0.4, type: 'spring' }}
      className="bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4 border border-gray-200 w-72"
    >
      <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
        <Heart className="h-5 w-5 text-green-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">
          <span className="font-bold text-gray-800">{donation.name}</span> acabou de doar
        </p>
        <p className="font-bold text-lg text-green-600">
          R$ {donation.amount.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default LiveDonationPopup;
