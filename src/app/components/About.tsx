export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a final-year B.Tech Computer Science student aspiring to build a career in data analytics.
              I enjoy working with data — cleaning it, analyzing patterns, and transforming raw information
              into meaningful insights that support decision-making.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I have hands-on experience building data-driven applications and dashboards, where I worked with
              structured data, APIs, filtering, aggregation, and visualization. Alongside frontend development,
              I actively use Python and SQL for exploratory data analysis and problem-solving.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I am continuously learning and focused on strengthening my fundamentals in data analysis,
              data visualization, and efficient data handling. My goal is to grow into a role where I can
              contribute to real-world data projects while continuously improving my analytical skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
