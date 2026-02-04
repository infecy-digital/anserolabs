import React from 'react';
import { AudioWaveform, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="max-w-xs">
            {/* Logo - Option 2 */}
            <div className="flex items-center gap-3 mb-6 select-none">
              <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full text-primary shadow-lg shadow-primary/20">
                <AudioWaveform size={20} />
              </div>
              <div className="flex flex-col justify-center h-10">
                <span className="text-xl font-extrabold text-slate-900 tracking-tighter leading-none">ANSERO</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] leading-none ml-0.5 mt-1">Labs</span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Helping businesses automate call answering using human-like AI voice agents for inbound and outbound calls.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#services" className="hover:text-primary">Inbound Reception</a></li>
                <li><a href="#services" className="hover:text-primary">Outbound Calls</a></li>
                <li><a href="#services" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#process" className="hover:text-primary">How it Works</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>infecy@gmail.com</span>
                </li>
                <li>
                  <a href="https://calendly.com" className="text-primary font-medium hover:underline">
                    Book a Call &rarr;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ansero Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy-policy" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;