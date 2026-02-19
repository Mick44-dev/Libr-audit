
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'Concept', href: '#concept', id: 'concept' },
    { name: 'Méthode', href: '#method', id: 'method' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src="/logobleu.png" 
              alt="LIBR'AUDIT" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#2b3e63]">
            LIBR’AUDIT
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/sasdelhommeau/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b3e63] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
          >
            Prendre un rdv téléphonique
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${currentPage === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://calendly.com/sasdelhommeau/30min" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#2b3e63] text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-slate-800 transition-all"
            >
              Prendre un rdv téléphonique
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
