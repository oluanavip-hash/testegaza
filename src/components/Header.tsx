import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, User, Globe, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-green-600 font-medium transition-colors ${isActive ? 'text-green-600' : ''}`;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <Heart className="h-7 w-7 text-green-500" />
              <span className="ml-2 text-2xl font-bold text-gray-800">doação</span>
            </div>
            <div className="ml-4 flex items-center">
              <Globe className="h-4 w-4 text-blue-600 mr-1" />
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Parceiro ONU
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass} end>Início</NavLink>
            <NavLink to="/campanhas" className={navLinkClass}>Campanhas</NavLink>
            <NavLink to="/ajuda-humanitaria" className={navLinkClass}>Ajuda Humanitária</NavLink>
            <NavLink to="/como-funciona" className={navLinkClass}>Como Funciona</NavLink>
            <NavLink to="/contato" className={navLinkClass}>Contato</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Criar Campanha
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <NavLink to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Início</NavLink>
              <NavLink to="/campanhas" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Campanhas</NavLink>
              <NavLink to="/ajuda-humanitaria" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Ajuda Humanitária</NavLink>
              <NavLink to="/como-funciona" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Como Funciona</NavLink>
              <NavLink to="/contato" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contato</NavLink>
              <div className="border-t pt-4">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium mb-2">
                  Criar Campanha
                </button>
                <button className="w-full text-gray-600 hover:text-gray-900 px-4 py-2 border border-gray-300 rounded-lg">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
