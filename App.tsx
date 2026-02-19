
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ConceptPage from './components/ConceptPage';
import MethodPage from './components/MethodPage';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      // Split hash to handle potential section anchors (e.g., #method#section)
      // but here we use simple hash for pages.
      const hash = fullHash as Page;
      
      const validPages: Page[] = ['home', 'concept', 'method', 'mentions-legales', 'politique-confidentialite'];
      
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else if (hash === 'questionnaire') {
        // If it's the questionnaire anchor, we stay on home and let the browser scroll
        setCurrentPage('home');
        // We don't window.scrollTo(0,0) here
      } else if (!hash) {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'concept':
        return <ConceptPage />;
      case 'method':
        return <MethodPage />;
      case 'mentions-legales':
        return <MentionsLegales />;
      case 'politique-confidentialite':
        return <PolitiqueConfidentialite />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100">
      <Header currentPage={currentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
