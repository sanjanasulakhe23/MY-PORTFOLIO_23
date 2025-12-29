import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "sanjanasulakhe23@gmail.com",
      href: "mailto:sanjanasulakhe23@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/sanjanasulakhe23",
      href: "https://github.com/sanjanasulakhe23",
      color: "from-gray-600 to-gray-700",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjana-sulakhe23",
      href: "https://linkedin.com/in/sanjana-sulakhe23",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Whether you have an opportunity, a question, or just want to say hi —
            my inbox is always open.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-4"
            >
              <div
                className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                {contact.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 mb-1">{contact.label}</p>
                <p className="text-white truncate group-hover:text-blue-400 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-xl text-white mb-6 text-center">
              Or send me a message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Send Message
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-center">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
