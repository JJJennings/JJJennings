
import { Award, BarChart3, Users, FileText } from 'lucide-react';

const KeyAchievements = () => {
  const achievements = [
    {
      icon: BarChart3,
      title: "Global Oncology Trials",
      description: "Led global oncology clinical trials with high scientific and operational complexity across multiple therapeutic areas."
    },
    {
      icon: FileText,
      title: "Data Review Frameworks",
      description: "Developed and implemented comprehensive data review frameworks across multiple clinical programs to ensure data integrity."
    },
    {
      icon: Award,
      title: "Process Improvements",
      description: "Championed process improvements to enhance trial execution and data quality, resulting in more efficient study operations."
    },
    {
      icon: Users,
      title: "Regulatory Contributions",
      description: "Contributed to regulatory submissions and internal decision-making milestones, supporting successful drug development programs."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Key Achievements</h2>
          <p className="text-xl text-slate-600">Driving excellence in oncology clinical development</p>
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
