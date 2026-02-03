import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;