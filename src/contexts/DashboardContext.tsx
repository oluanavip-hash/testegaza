import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { faker } from '@faker-js/faker';

interface Donation {
  id: string;
  name: string;
  amount: number;
  time: Date;
  message?: string;
  pixCode: string;
}

interface Analytics {
  totalVisits: number;
  todayVisits: number;
  donationClicks: number;
  shareClicks: number;
  avgTimeOnPage: number;
}

interface SiteConfig {
  mainImages: string[];
  title: string;
  description: string;
  goal: number;
}

interface DashboardContextType {
  donations: Donation[];
  analytics: Analytics;
  siteConfig: SiteConfig;
  livePopups: Donation[];
  addDonation: (donation: Omit<Donation, 'id' | 'time'>) => void;
  incrementClick: (type: 'visit' | 'donation' | 'share') => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  totalRaised: number;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [livePopups, setLivePopups] = useState<Donation[]>([]);
  const [initialRaised] = useState(157987.25);

  const [analytics, setAnalytics] = useState<Analytics>({
    totalVisits: 1234,
    todayVisits: 89,
    donationClicks: 156,
    shareClicks: 43,
    avgTimeOnPage: 4.2
  });
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    mainImages: [
      "https://i.ibb.co/4Z3pbG7r/104782733-palestinian-children-receive-food-at-a-united-nations-school-in-rafah-on-the-southern-gaza.jpg",
      "https://i.ibb.co/208pghp7/1.webp",
      "https://i.ibb.co/mVtyxM7F/tagreuters-com2024binary-LYNXMPEK560-RU-FILEDIMAGE.webp",
      "https://i.ibb.co/d4PzBR86/3.webp",
      "https://i.ibb.co/wF5DmRdf/2.webp",
      "https://i.ibb.co/Rkj8F2tY/4.webp"
    ],
    title: "Ajuda Humanitária para Gaza - Famílias em Crise",
    description: "A situação humanitária em Gaza é desesperadora. Mais de 2,3 milhões de pessoas vivem em condições extremas...",
    goal: 500000
  });

  const brazilianNames = [
    "Ana", "Carlos", "Maria", "João", "Fernanda", "Pedro", "Juliana", "Rafael", 
    "Camila", "Bruno", "Larissa", "Diego", "Gabriela", "Thiago", "Priscila", 
    "Lucas", "Amanda", "Rodrigo", "Beatriz", "Felipe"
  ];

  // Simulate real-time donations
  useEffect(() => {
    const interval = setInterval(() => {
      const newDonation: Donation = {
        id: faker.string.uuid(),
        name: faker.helpers.arrayElement(brazilianNames),
        amount: faker.number.float({ min: 15, max: 300, fractionDigits: 2 }),
        time: new Date(),
        message: faker.helpers.maybe(() => "Pela paz em Gaza", { probability: 0.5 }),
        pixCode: faker.string.alphanumeric(32)
      };
      
      setDonations(prev => [newDonation, ...prev]);
      
      // Add to popup queue and remove after some time
      setLivePopups(prev => [...prev, newDonation]);
      setTimeout(() => {
        setLivePopups(prev => prev.filter(p => p.id !== newDonation.id));
      }, 7000);

    }, 8000); // New donation every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Track page visits
  useEffect(() => {
    incrementClick('visit');
  }, []);

  const addDonation = (donationData: Omit<Donation, 'id' | 'time'>) => {
    const newDonation: Donation = {
      ...donationData,
      id: faker.string.uuid(),
      time: new Date()
    };
    setDonations(prev => [newDonation, ...prev]);
    
    // Also show a popup for manual donations
    setLivePopups(prev => [...prev, newDonation]);
    setTimeout(() => {
      setLivePopups(prev => prev.filter(p => p.id !== newDonation.id));
    }, 7000);
  };

  const incrementClick = (type: 'visit' | 'donation' | 'share') => {
    setAnalytics(prev => {
      switch (type) {
        case 'visit':
          return {
            ...prev,
            totalVisits: prev.totalVisits + 1,
            todayVisits: prev.todayVisits + 1
          };
        case 'donation':
          return { ...prev, donationClicks: prev.donationClicks + 1 };
        case 'share':
          return { ...prev, shareClicks: prev.shareClicks + 1 };
        default:
          return prev;
      }
    });
  };

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    setSiteConfig(prev => ({ ...prev, ...config }));
  };

  const totalRaised = initialRaised + donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <DashboardContext.Provider value={{
      donations,
      analytics,
      siteConfig,
      livePopups,
      addDonation,
      incrementClick,
      updateSiteConfig,
      totalRaised
    }}>
      {children}
    </DashboardContext.Provider>
  );
};
