import React from 'react';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-orange-600 rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-orange-500/30 relative overflow-hidden">
          
          {/* Decor */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to explore an AI Voice solution for your business?
            </h2>
            <p className="text-lg text-orange-100 mb-10 leading-relaxed">
              If you’re ready to stop missing calls and start capturing every opportunity, schedule a discovery call with us today. It takes 15 minutes to see if we're a fit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="https://calendly.com" 
                variant="secondary" 
                className="!bg-white !text-primary hover:!bg-orange-50 font-bold px-10 py-4 text-lg"
              >
                Book a Discovery Call
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-orange-200 opacity-80">
              No pressure. No cold calling spam. Just solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;