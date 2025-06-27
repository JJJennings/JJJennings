
import { Calendar, MapPin, TrendingUp, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const CareerTimeline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const positions = [
    {
      period: "May 2025 – Present",
      title: "Senior Director, Clinical Science",
      company: "Deciphera Pharmaceuticals, Waltham, MA",
      description: "Works closely with Medical Directors, Pharmacology, Translational Research, Discovery, external experts, and investigators to accumulate scientific and medical knowledge necessary to support clinical development plans. Assists Medical Directors in development of concept sheets for clinical studies and contributes to authoring of clinical study protocols, amendments and related documents.",
      highlights: [
        "Monitors real time study data to ensure study integrity",
        "Responsible for high level data cleaning activities requiring clinical judgment", 
        "Contributes to clinical sections of study-related regulatory submissions",
        "Clinical/scientific subject matter expert on products and studies in the therapeutic area"
      ],
      type: "current"
    },
    {
      period: "October 2023 – May 2025",
      title: "Director, Clinical Science (Early Development)",
      company: "Deciphera Pharmaceuticals, Waltham, MA",
      description: "Returned to Deciphera in an elevated role to provide strategic clinical science leadership on global oncology trials with focus on early development programs.",
      highlights: [
        "Presents data, protocol designs and information at advisory boards and investigator meetings",
        "Attends scientific meetings to remain abreast of new developments",
        "Involved in analysis of complex data for regulatory submissions, publications and design of studies"
      ],
      type: "recent"
    },
    {
      period: "December 2022 – October 2023",
      title: "Director, Clinical Development (Clinical Scientist)",
      company: "SQZ Biotechnologies, Watertown, MA",
      description: "Led clinical development strategy for innovative cell therapy programs in oncology, working in a fast-paced biotech environment focused on cutting-edge therapeutic approaches.",
      highlights: [
        "Drove accumulation of essential scientific and medical knowledge supporting clinical development plans",
        "Provided oversight for medical aspects of key regulatory and communication documents",
        "Guided development of concept sheets and protocols for clinical studies",
        "Engaged in critical data cleaning and complex data analysis for regulatory submissions"
      ],
      type: "growth"
    },
    {
      period: "November 2021 – December 2022", 
      title: "Associate Director, Clinical Scientist",
      company: "SQZ Biotechnologies, Watertown, MA",
      description: "Promoted to associate director role, taking on increased responsibilities in clinical development planning and execution for cell therapy trials in oncology.",
      highlights: [
        "Led clinical contributions to regulatory responses and submissions",
        "Ensured study and data integrity through proactive monitoring",
        "Actively participated in presenting study data at scientific and clinical forums"
      ],
      type: "growth"
    },
    {
      period: "January 2021 – November 2021",
      title: "Senior Manager, Clinical Research",
      company: "Deciphera Pharmaceuticals, Waltham, MA",
      description: "Advanced to senior management role, leading clinical research activities across multiple oncology programs with increased strategic oversight responsibilities.",
      highlights: [
        "Led development of master risk language for annual IB updates in partnership with Biostatistics, Medical, and Pharmacovigilance",
        "Drafted clinical responses to regulatory queries",
        "Interpreted analysis of complex data for regulatory submissions and publications"
      ],
      type: "development"
    },
    {
      period: "January 2020 – December 2020",
      title: "Manager, Clinical Research", 
      company: "Deciphera Pharmaceuticals, Waltham, MA",
      description: "Promoted to management position, overseeing clinical research operations and data integrity across Phase 1-3 oncology trials.",
      highlights: [
        "Presented data, protocol designs at site initiation visits and protocol review committee meetings",
        "Assisted Medical Directors in clinical study concept and protocol development",
        "Contributed to preparation of abstracts, manuscripts, and presentations for external meetings"
      ],
      type: "development"
    },
    {
      period: "January 2019 – December 2019",
      title: "Clinical Research Associate II",
      company: "Deciphera Pharmaceuticals, Waltham, MA", 
      description: "Continued progression in clinical research role with expanded responsibilities in protocol development and data review for oncology drug development programs.",
      highlights: [
        "Worked with investigative sites to answer protocol related questions and resolve study conduct issues",
        "Relieved study MD of some medical monitoring duties",
        "Assisted in writing and concept development of ripretinib and binimetinib combination protocol"
      ],
      type: "development"
    },
    {
      period: "February 2018 – December 2018",
      title: "Clinical Trial Associate",
      company: "Deciphera Pharmaceuticals, Waltham, MA",
      description: "Entry-level position at Deciphera focused on supporting clinical trial operations and gaining expertise in pharmaceutical clinical research processes.",
      highlights: [
        "Drafted, reviewed, and revised clinical documents including protocols and informed consents",
        "Participated in study start up activities and maintained study reference materials",
        "Supported study specific trial master file management and electronic document systems",
        "Collaborated with CROs, vendors and clinical sites on day-to-day trial activities"
      ],
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
          <p className="text-xl text-slate-600 mb-8">A decade of progressive growth in oncology clinical research</p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center justify-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow mx-auto">
              <span className="text-slate-700 font-medium">
                {isOpen ? 'Hide Career Details' : 'View Career Details'}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-8">
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-slate-400"></div>
                
                <div className="space-y-12">
                  {positions.map((position, index) => (
                    <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
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
                          <p className="text-slate-600 leading-relaxed mb-4">{position.description}</p>
                          
                          {position.highlights && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-700 text-sm">Key Accomplishments:</h4>
                              <ul className="space-y-1">
                                {position.highlights.map((highlight, idx) => (
                                  <li key={idx} className="text-sm text-slate-600 flex items-start">
                                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
