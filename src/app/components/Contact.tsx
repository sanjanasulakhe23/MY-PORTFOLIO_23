import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Want to collaborate or have an opportunity? Send me a message 👇
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">

            <h3 className="text-xl text-white mb-6 text-center">
              Send me a message
            </h3>

            {submitted ? (
              <p className="text-green-400 text-center text-lg">
                ✅ Message sent successfully! I’ll get back to you soon.
              </p>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Bot protection */}
                <p className="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                >
                  Send Message
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
