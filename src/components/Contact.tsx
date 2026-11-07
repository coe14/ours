import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Visit Us or Reserve a{" "}
                <span className="text-amber-500">Table</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Have questions or want to book a private event? Reach out to us
                or drop by OURS CAFÉ today. We would love to serve you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Location</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    Bole Road, Near Friendship Building, Addis Ababa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Phone Number
                  </h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    +251 911 234 567 / +251 922 345 678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Email Address
                  </h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    info@ourscafe.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reservation / Contact Form */}
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-8 border border-zinc-800 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Received!
                </h3>
                <p className="text-zinc-400 text-sm">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Send Us a Message
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rehima Yusuf"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rehima@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Your Message / Reservation Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Table reservation for 2 people this Friday evening..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
