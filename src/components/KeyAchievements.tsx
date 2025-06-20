
import { Award, BarChart3, Users, FileText, Microscope, Target, BookOpen, Presentation } from 'lucide-react';

const KeyAchievements = () => {
  const achievements = [
    {
      icon: Microscope,
      title: "Clinical Development Leadership",
      description: "Led clinical development plans and study protocols for innovative oncology therapeutics, including ripretinib and binimetinib combination protocols, working closely with Medical Directors and cross-functional teams."
    },
    {
      icon: FileText,
      title: "Regulatory Excellence",
      description: "Contributed to clinical sections of regulatory submissions and responses to regulatory queries, ensuring compliance and successful IND submissions with demonstrated expertise in regulatory documentation."
    },
    {
      icon: BarChart3,
      title: "Data Integrity & Analysis",
      description: "Performed high-level data cleaning activities requiring clinical judgment, interpreted complex data for regulatory submissions, and ensured study integrity through real-time monitoring and proactive oversight."
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Successfully collaborated with Medical Directors, Pharmacology, Translational Research, Discovery teams, CROs, vendors, and clinical sites to drive clinical development success across multiple therapeutic programs."
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Led development of master risk language for annual Investigator Brochure updates in partnership with Biostatistics, Medical, and Pharmacovigilance teams, ensuring comprehensive safety monitoring."
    },
    {
      icon: BookOpen,
      title: "Scientific Communication",
      description: "Contributed to preparation of abstracts, manuscripts, and presentations for external meetings. Actively participated in presenting study data and designs at various scientific and clinical forums."
    },
    {
      icon: Presentation,
      title: "Advisory & Investigator Engagement",
      description: "Presented data, protocol designs, and study information at advisory boards, investigator meetings, site initiation visits, and protocol review committee meetings to ensure successful study execution."
    },
    {
      icon: Award,
      title: "Therapeutic Area Expertise",
      description: "Recognized as clinical/scientific subject matter expert on oncology products and studies, with deep knowledge in cell therapy trials and traditional oncology drug development programs."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Key Achievements</h2>
          <p className="text-xl text-slate-600">Driving excellence in oncology clinical development and regulatory science</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-teal-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{achievement.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
