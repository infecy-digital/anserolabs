import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X, AudioWaveform } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Option 2: The Sonic Wave */}
        <div className="flex items-center gap-3 select-none">
          <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full text-primary shadow-lg shadow-primary/20">
            <AudioWaveform size={20} />
          </div>
          <div className="flex flex-col justify-center h-10">
            <span className="text-xl font-extrabold text-slate-900 tracking-tighter leading-none">ANSERO</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] leading-none ml-0.5 mt-1">Labs</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="https://calendly.com" className="!px-5 !py-2.5 text-sm shadow-md">
            Book a Discovery Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl h-screen">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-800 py-4 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4">
            <Button href="https://calendly.com" fullWidth className="py-4 text-lg">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;