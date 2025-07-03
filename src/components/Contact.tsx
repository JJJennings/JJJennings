
import { Mail, Linkedin, FileText, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">Open to discussing oncology clinical development opportunities</p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Professional Contact</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Experienced Clinical Scientist seeking opportunities for career development and advancement. 
                  Highly motivated to build on existing skills and develop processes at small to midsize biotech companies.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:JuliaJoyJennings@gmail.com" className="flex items-center space-x-3 text-foreground hover:text-teal-600 transition-colors group">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium">JuliaJoyJennings@gmail.com</span>
                </a>

                <a href="#" className="flex items-center space-x-3 text-foreground hover:text-teal-600 transition-colors group">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>

                <a href="/Resume_Jennings.pdf" download="Julia_Jennings_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-foreground hover:text-teal-600 transition-colors group">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Clinical Development Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Regulatory Submissions & Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Protocol Development & Review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Data Integrity & Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Cross-Functional Collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Medical Writing & Communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Risk Management & Safety Oversight</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Investigator Relations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
