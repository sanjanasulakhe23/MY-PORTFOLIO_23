import { Award, ExternalLink } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "Data Analyst",
      issuer: "IBM",
      date: "Apr 2025",
      url: "https://credentials.edx.org/credentials/ffed9c77c4f74a588edc91f7f2027743/"
    },
    {
      title: "Data Science Foundations – Level 2",
      issuer: "IBM",
      date: "Nov 2025",
      url: "https://www.credly.com/badges/e63704e7-8970-45ce-92c0-2432211d4abf/linked_in_profile"
    },
    {
      title: "Data Science 101",
      issuer: "IBM SkillsBuild",
      date: "Nov 2025",
      url: "https://courses.yl-ptech.skillsnetwork.site/certificates/597928c021094c82a6a8df8fa388d8ff"
    },
    {
      title: "Analyzing Data with Python",
      issuer: "edX",
      date: "Apr 2025",
      url: "https://courses.edx.org/certificates/6a21d14dceda4b2ba3c8850cc3075930"
    },
    {
      title: "SQL for Data Science",
      issuer: "edX",
      date: "Mar 2025",
      url: "https://courses.edx.org/certificates/dfc6862f7f524144be41505c732ad7e3"
    },
    {
      title: "Visualizing Data with Python",
      issuer: "edX",
      date: "Apr 2025",
      url: "https://courses.edx.org/certificates/16df87430f7d4aeb8b9bd44e1c8c6424"
    },
    {
      title: "Analyzing & Visualizing Data with Power BI",
      issuer: "edX",
      date: "Apr 2025",
      url: "#"
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn Learning",
      date: "Jun 2025",
      url:"https://courses.edx.org/certificates/228724109ba741e896da35ad5338e954"
    },
    {
      title: "AWS Academy Graduate – Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      date: "Oct 2025",
      url: "https://www.credly.com/badges/99561353-fc1c-4670-9839-d4fc6f4733bc/linked_in_profile"
    },
    {
      title: "Foundations of Data Structures & Algorithm Analysis",
      issuer: "Packt",
      date: "Oct 2025",
      url: "https://www.coursera.org/account/accomplishments/verify/BOOUG5OJNQLF"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-gray-500 mt-1">{cert.date}</p>
                </div>
              </div>

              <a
                href={cert.url}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2 group"
              >
                View Certificate
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
