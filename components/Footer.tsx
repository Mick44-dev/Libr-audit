
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logoblanc.png" 
                  alt="LIBR'AUDIT" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">LIBR’AUDIT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              L'accompagnement stratégique pour les dirigeants qui veulent transformer le chaos en clarté.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">Solution</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#concept" className="hover:text-white transition-colors">Le Concept</a></li>
              <li><a href="#method" className="hover:text-white transition-colors">La Méthode</a></li>
              <li><a href="#questionnaire" className="hover:text-white transition-colors">Diagnostic Gratuit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">Entreprise</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#mentions-legales" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="mailto:michael.delhommeau@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">Nous suivre</h4>
            <p className="text-slate-400 text-xs mb-4">Suivez l'actualité de Libr'Audit sur LinkedIn.</p>
            <a 
              href="https://www.linkedin.com/in/micha%C3%ABl-delhommeau/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl transition-all border border-white/10 group"
            >
              <img 
                src="logolinkedin.png" 
                alt="LinkedIn" 
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} LIBR’AUDIT. Tous droits réservés.</p>
          <p>Imaginé pour les dirigeants de TPE/PME.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
