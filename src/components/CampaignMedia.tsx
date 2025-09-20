import React, { useState, useEffect } from 'react';
import { Heart, Play } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';
import { motion, AnimatePresence } from 'framer-motion';

const CampaignMedia: React.FC = () => {
  const { siteConfig } = useDashboard();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reportagemUrl = "https://www.youtube.com/watch?v=086gAclTwss";

  useEffect(() => {
    if (siteConfig.mainImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % siteConfig.mainImages.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [siteConfig.mainImages.length]);

  return (
    <div className="relative">
      <div className="relative w-full h-64 sm:h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={siteConfig.mainImages[currentIndex]}
            alt="Cena da crise humanitária em Gaza"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      
      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {siteConfig.mainImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Badge do Jornal da Band */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-700">Jornal da Band</span>
        </div>
      </div>

      {/* Botão de Favoritar */}
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-2 z-10">
        <button className="text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Botão Ver Reportagem */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={reportagemUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
          title="Ver reportagem completa do Jornal da Band"
        >
          <Play className="h-4 w-4" />
          <span>Ver Reportagem</span>
        </a>
      </div>
    </div>
  );
};

export default CampaignMedia;
