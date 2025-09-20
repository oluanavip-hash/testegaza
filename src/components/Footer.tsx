import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, Globe, Shield, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleCertificationsClick = () => {
    navigate('/admin');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* UN Partnership Banner */}
        <div className="bg-blue-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Globe className="h-10 w-10 text-blue-200" />
              <div>
                <h3 className="text-lg font-bold text-white">Parceiro Oficial das Nações Unidas</h3>
                <p className="text-blue-200 text-sm">
                  Credenciado OCHA para operações humanitárias emergenciais
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-200" />
              <span className="text-blue-200 text-sm">Operações verificadas pela ONU</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-7 w-7 text-green-400" />
              <span className="ml-2 text-2xl font-bold text-white">doação</span>
            </div>
            <p className="text-gray-300 text-sm">
              Conectando corações brasileiros com causas humanitárias ao redor do mundo. 
              Parceiro oficial da ONU desde 2020.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Operações Humanitárias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operações Humanitárias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Globe className="h-3 w-3 mr-2" />
                  Ajuda para Gaza (ONU)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Refugiados Sírios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Fome na África
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Emergências Climáticas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Missões de Paz
                </a>
              </li>
            </ul>
          </div>

          {/* Parcerias e Certificações */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Parcerias e Certificações</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ONU - OCHA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  UNICEF Brasil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cruz Vermelha
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Médicos Sem Fronteiras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Jornal da Band
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato 24h</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">emergencia@doacao.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">(11) 4002-8922</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <span className="text-gray-300">Coordenação ONU</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors block">
                Relatórios ONU →
              </a>
              <button 
                onClick={handleCertificationsClick}
                className="text-xs text-gray-400 hover:text-white transition-colors block cursor-pointer"
              >
                Certificações →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Doação • Parceiro Oficial ONU • Em solidariedade ao povo palestino
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Auditoria ONU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
