import { CheckCircle, ShieldCheck, HeartHandshake, Coffee } from "lucide-react";

export default function About() {
  const features = [
    "100% Halal Certified Ingredients & Meats",
    "Traditional Arabic Coffee & Artisan Brews",
    "Cozy, Family-Friendly & Peaceful Ambience",
    "Expert Culinary Team with Years of Passion",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-zinc-900/40 border-t border-zinc-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Container (Properly Sized & Organized) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1000"
                alt="Cozy Cafe Interior"
                className="w-full h-[350px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Where Exceptional Coffee Meets{" "}
              <span className="text-amber-500">Halal Excellence</span>.
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Founded with a simple vision: to create a warm, welcoming
              sanctuary where families and friends can enjoy top-tier halal
              culinary creations, aromatic brews, and exquisite pastries in a
              peaceful environment.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-amber-500/10 text-amber-500">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-zinc-300 text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">100+</h4>
                  <p className="text-zinc-400 text-xs">Daily Fresh Brews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">100%</h4>
                  <p className="text-zinc-400 text-xs">Halal Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
