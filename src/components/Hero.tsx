import { ArrowRight, Sparkles, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Halal Dining & Artisan Coffee</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Crafted with <span className="text-amber-500">Halal Care</span>,
              Served with Warmth.
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the finest blend of traditional Arabic coffee, fresh
              dates, gourmet halal burgers, and artisan pastries in a serene,
              welcoming atmosphere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 text-zinc-950 font-extrabold hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#offers"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Coffee className="w-4 h-4 text-amber-500" />
                <span>Special Offers</span>
              </a>
            </div>
          </div>

          {/* Right Image Container (Properly Sized & Organized) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                alt="Halal Cafe & Restaurant Ambience"
                className="w-full h-[350px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
