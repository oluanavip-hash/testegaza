import React from 'react';
import { Heart } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';

const RecentDonations: React.FC = () => {
  const { donations } = useDashboard();

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 5) return 'agora mesmo';
    if (diffInSeconds < 60) return `há ${diffInSeconds}s`;
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `há ${diffInMinutes}min`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `há ${diffInHours}h`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `há ${diffInDays} dia(s)`;
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Doações Recentes para Gaza
          </h2>
          <p className="text-lg text-gray-600">
            Veja quem está ajudando as famílias palestinas em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.slice(0, 12).map((donation) => (
            <div key={donation.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-gray-600">
                  {donation.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {donation.name}
                    </p>
                    <div className="flex items-center text-red-500">
                      <Heart className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-blue-600 mb-1">
                    R$ {donation.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {formatTimeAgo(donation.time)}
                  </p>
                  {donation.message && (
                    <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 italic">
                      &quot;{donation.message}&quot;
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 mb-2">892</div>
            <div className="text-sm text-gray-600">Pessoas mobilizadas</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-2">1.247</div>
            <div className="text-sm text-gray-600">Refeições garantidas</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-purple-600 mb-2">156</div>
            <div className="text-sm text-gray-600">Famílias atendidas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDonations;
