
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const CareerTimeline = () => {
  const positions = [
    {
      period: "May 2025 – Present",
      title: "Senior Director, Clinical Science",
      company: "Deciphera Pharmaceuticals",
      description: "Elevated to senior director to lead strategic clinical development efforts across oncology programs. Provide scientific leadership, mentor clinical scientists, and guide study execution and data integrity at a portfolio level.",
      type: "current"
    },
    {
      period: "2023 – May 2025",
      title: "Director, Clinical Science",
      company: "Deciphera Pharmaceuticals",
      description: "Returned to Deciphera to provide high-impact clinical science support on global oncology trials. Led data review strategies, protocol deviation oversight, and cross-functional study team collaboration.",
      type: "recent"
    },
    {
      period: "2021 – 2023",
      title: "Associate Director → Director, Clinical Development",
      company: "SQZ Biotechnologies",
      description: "Oversaw early-phase cell therapy trials in oncology. Developed clinical development plans, guided biomarker strategy, and played a key leadership role in a lean, fast-paced biotech environment.",
      type: "growth"
    },
    {
      period: "2018 – 2021",
      title: "Clinical Trial Associate → Senior Manager, Clinical Research",
      company: "Deciphera Pharmaceuticals",
      description: "Progressively promoted while supporting oncology drug development across Phases 1–3. Led clinical operations activities, data review planning, and site management in collaboration with cross-functional teams.",
      type: "development"
    },
    {
      period: "2015 – 2018",
      title: "Clinical Administrative Support Specialist → Clinical Research Coordinator II",
      company: "Dana-Farber Cancer Institute",
      description: "Coordinated clinical trials in oncology, gaining frontline exposure to patient care, data entry, and protocol compliance. Developed foundational expertise in trial execution and clinical data workflows.",
      type: "foundation"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'from-teal-500 to-teal-600';
      case 'recent': return 'from-slate-700 to-slate-800';
      case 'growth': return 'from-rust-500 to-rust-600';
      case 'development': return 'from-slate-600 to-slate-700';
      case 'foundation': return 'from-slate-500 to-slate-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Career Journey</h2>
          <p className="text-xl text-slate-600">A decade of progressive growth in oncology clinical research</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-slate-400"></div>
          
          <div className="space-y-12">
            {positions.map((position, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br ${getTypeColor(position.type)} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-2 text-teal-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{position.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{position.title}</h3>
                    <div className="flex items-center space-x-2 text-slate-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{position.company}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{position.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
