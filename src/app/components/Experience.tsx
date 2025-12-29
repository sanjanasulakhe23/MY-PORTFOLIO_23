import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Veridia.io",
      role: "SDE Intern (Full Stack)",
      duration: "Oct 2025 - Nov 2025",
      location: "Remote",
      responsibilities: [
        "Worked on both frontend and backend development tasks, contributing to feature implementation and overall application functionality",
        "Handled API-driven data rendering and improved UI components for better usability and clarity",
        "Assisted in debugging issues and improving data flow between frontend and backend services",
        "Gained exposure to real-world development workflows, version control, and collaborative coding practices"
      ]
    },
    {
      company: "Cognifyz Technologies",
      role: "Intern",
      duration: "Aug 2025 - Sep 2025",
      location: "Remote",
      responsibilities: [
        "Explored full-stack web development concepts including HTML, CSS, JavaScript, and backend integration",
        "Practiced working with structured data through basic APIs and dynamic content rendering",
        "Strengthened understanding of Git, GitHub, and collaborative development practices",
        "Applied learned concepts through self-driven mini projects and hands-on coding exercises"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-1">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="pl-0 md:pl-16">
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
