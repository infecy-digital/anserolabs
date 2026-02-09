import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RevenueCalculator from './components/RevenueCalculator';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#privacy-policy':
        return <PrivacyPolicy />;
      case '#terms-of-service':
        return <TermsOfService />;
      default:
        return (
          <main className="flex-grow">
            <Hero />
            <RevenueCalculator />
            <About />
            <Services />
            <Testimonials />
            <Process />
            <FAQ />
            <CTA />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 relative">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;