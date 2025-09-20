import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Share2, Heart, Shield, Globe, Play, ExternalLink } from 'lucide-react';
import { useDashboard } from '../contexts/DashboardContext';
import { motion, AnimatePresence } from 'framer-motion';

const CampaignHero: React.FC = () => {
  const { siteConfig, totalRaised, incrementClick } = useDashboard();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const progress = Math.min((totalRaised / siteConfig.goal) * 100, 100);
  const supporters = 892;
  const daysLeft = 35;
  const reportagemUrl = "https://www.youtube.com/watch?v=086gAclTwss";

  useEffect(() => {
    if (siteConfig.mainImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % siteConfig.mainImages.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [siteConfig.mainImages.length]);

  const handleShareClick = () => {
    incrementClick('share');
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagem Principal - Carousel */}
          <div className="relative">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
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

          {/* Campaign Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  Operação Humanitária Oficial ONU
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {siteConfig.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Gaza, Palestina</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{daysLeft} dias restantes</span>
              </div>
              <button 
                onClick={handleShareClick}
                className="flex items-center text-green-600 hover:text-green-700"
              >
                <Share2 className="h-4 w-4 mr-1" />
                <span>Compartilhar</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm text-gray-600">
                    de R$ {siteConfig.goal.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                  <span>{progress.toFixed(1)}% arrecadado</span>
                  <span>{supporters} apoiadores</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-800 font-semibold text-sm">SITUAÇÃO CRÍTICA</span>
              </div>
              <p className="text-red-700 text-sm">
                Cada minuto conta. Famílias inteiras dependem da nossa ajuda para sobreviver.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-semibold text-sm">PARCERIA OFICIAL ONU</span>
              </div>
              <p className="text-blue-700 text-sm">
                Somos parceiros oficiais das Nações Unidas para operações humanitárias em Gaza. 
                Todos os recursos são rastreados e coordenados com agências da ONU.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Play className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-800 font-semibold text-sm">FONTE: JORNAL DA BAND</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Documentação exclusiva sobre a situação humanitária em Gaza, produzida pela equipe 
                de jornalismo do Jornal da Band.
              </p>
              <a
                href={reportagemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-yellow-700 hover:text-yellow-800 font-medium text-sm mt-2"
              >
                <span>Ver documentação completa</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                alt="Criador da campanha"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">Organização Humanitária Internacional</p>
                <p className="text-sm text-gray-600">Parceiro oficial da ONU • Credenciado OCHA</p>
              </div>
              <div className="ml-auto flex flex-col space-y-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Verificado
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  ONU
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHero;
