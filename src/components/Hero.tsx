
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToTimeline = () => {
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Senior Director,
                <span className="text-teal-400 block">Clinical Science</span>
              </h1>
              <p className="text-xl text-slate-300">
                Oncology Drug Development Expert
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-slate-200">
              <p>
                Experienced Clinical Scientist specializing in oncology drug development with over a decade of expertise across both large biotech and small startup environments.
              </p>
              <p>
                <span className="text-teal-400 font-semibold">Key Strengths:</span> Clinical trial leadership, strategic data review, protocol deviation oversight, scientific storytelling, and cross-functional collaboration.
              </p>
              <p>
                Adept at ensuring scientific and operational integrity in complex clinical trials while serving as a subject matter expert and mentor to clinical scientist peers.
              </p>
            </div>

            <button 
              onClick={scrollToTimeline}
              className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors group"
            >
              <span>Explore My Journey</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-400 to-slate-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-teal-500/30 to-slate-700/30 rounded-full border border-teal-400/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-teal-400">10+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
