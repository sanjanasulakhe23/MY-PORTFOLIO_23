import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../assets/pic.jpg";

export function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75" />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-gray-900">
                <img
                  src={profileImg}
                  alt="Sanjana Sulakhe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-400 mb-3">Hi, I’m</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Sanjana Sulakhe
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              Data Analyst | Aspiring Data Engineer
            </h2>

            <p className="text-gray-400 max-w-xl mb-8">
              Final-year B.Tech CSE student with strong foundations in data analysis,
              Python, SQL, and data visualization. Passionate about transforming raw
              data into meaningful insights and building data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewProjects}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
