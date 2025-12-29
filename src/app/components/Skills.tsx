import { Code, LayoutGrid, Server, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <LayoutGrid size={24} />,
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: ["Git", "Docker", "AWS", "Firebase", "Postman"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50 hover:border-blue-400/50 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}