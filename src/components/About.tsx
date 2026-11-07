import { CheckCircle2, Heart, Coffee, Utensils } from "lucide-react";

export default function About() {
  const highlights = [
    "100% Organic & Locally Sourced Ingredients",
    "Artisanal Sourdough & Hand-Crafted Coffee",
    "Cozy, Modern Ambience for Work & Relaxation",
    "Dedicated Chef Team with Years of Experience",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-zinc-900/50 border-t border-zinc-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                alt="OURS CAFÉ Interior & Coffee Bar"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wide uppercase">
              <Heart className="w-3.5 h-3.5 fill-amber-500" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Where Exceptional Coffee Meets Culinary{" "}
              <span className="text-amber-500">Excellence.</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Founded with a simple vision: to create a sanctuary where people
              can enjoy top-tier culinary creations and exquisite coffee in a
              warm, inviting atmosphere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm font-medium text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
