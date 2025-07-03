
import { Heart, Lightbulb, Users2, Target } from 'lucide-react';

const Leadership = () => {
  const principles = [
    {
      icon: Users2,
      title: "Collaborative Leadership",
      description: "Leads through collaboration, mentorship, and scientific integrity rather than hierarchical authority."
    },
    {
      icon: Lightbulb,
      title: "Subject Matter Expertise",
      description: "Builds influence through deep scientific knowledge and expertise rather than direct reporting lines."
    },
    {
      icon: Target,
      title: "Cross-Functional Alignment",
      description: "Encourages cross-functional alignment and critical thinking within study teams for optimal outcomes."
    },
    {
      icon: Heart,
      title: "Mentorship Focus",
      description: "Serves as a mentor to clinical scientist peers, fostering growth and development across the organization."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Leadership Philosophy</h2>
          <p className="text-xl text-slate-300">Building excellence through collaboration and scientific integrity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-8 hover:border-teal-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl italic text-white mb-4">
              "True leadership in clinical science comes from building trust through expertise, fostering collaboration across functions, and maintaining unwavering commitment to scientific integrity."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
