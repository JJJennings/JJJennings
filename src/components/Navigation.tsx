
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800">
            Dr. Clinical Scientist
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              Career
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              Leadership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
