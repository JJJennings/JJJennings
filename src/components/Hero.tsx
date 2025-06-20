
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
                Julia Joy Jennings
                <span className="text-teal-400 block text-3xl md:text-4xl mt-2">Senior Director, Clinical Science</span>
              </h1>
              <p className="text-xl text-slate-300">
                Oncology Drug Development Expert
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-slate-200">
              <p>
                <span className="text-teal-400 font-semibold">Objective:</span> Experienced Clinical Scientist with oncology experience seeking an opportunity for career development and advancement. Highly motivated to build on existing skills, and develop and implement processes at a small to midsize biotech.
              </p>
              <p>
                <span className="text-teal-400 font-semibold">Core Expertise:</span> Clinical development planning, regulatory submissions, data integrity oversight, protocol development, cross-functional collaboration, and scientific mentorship in oncology therapeutics.
              </p>
              <p>
                Expert in working closely with Medical Directors, Pharmacology, Translational Research, Discovery teams, and external investigators to drive clinical development success.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-300">
              <div>📍 Boston, MA</div>
              <div>📧 JuliaJoyJennings@gmail.com</div>
              <div>📞 (508) 423-4853</div>
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
