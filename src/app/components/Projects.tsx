import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Cartoon Task Dashboard",
      description:
        "A cartoon-style task manager built with vanilla JavaScript to practice DOM manipulation, event handling, localStorage persistence, and interactive UI behavior.",
      tags: ["JavaScript", "HTML", "CSS", "DOM", "LocalStorage"],
      liveUrl: "https://fluffy-choux-5cf655.netlify.app/",
      githubUrl: "https://github.com/sanjanasulakhe23/TASK-DASHBOARD",
    },
    {
      title: "Sales Data Analysis (In Progress)",
      description:
        "Exploratory data analysis project focused on cleaning raw sales data, identifying trends, and generating actionable business insights using Python and SQL.",
      tags: ["Python", "Pandas", "SQL", "Data Analysis"],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "Data Engineering Pipeline (Planned)",
      description:
        "A beginner-friendly data pipeline to ingest raw CSV data, transform it using Python, and store structured data in a relational database for analysis.",
      tags: ["Python", "SQL", "ETL", "Data Engineering"],
      liveUrl: null,
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            A selection of projects showcasing my learning and hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl text-white mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex-1 px-4 py-2 text-center text-gray-500 italic border border-gray-600 rounded-lg">
                    Coming Soon
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-white transition"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
