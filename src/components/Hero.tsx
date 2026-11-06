import {
  ShoppingBag,
  ArrowRight,
  Star,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-zinc-950"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span>Premium Dining & Artisan Coffee</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Crafted with Passion, Served with{" "}
              <span className="text-amber-500">Love.</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the finest blend of artisanal sourdough pizzas, gourmet
              burgers, fresh sandwiches, and hand-crafted specialty coffee right
              at OURS CAFÉ.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 text-zinc-950 font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#offers"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold hover:border-amber-500/50 hover:text-amber-500 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Special Offers</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 font-bold text-lg sm:text-xl">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">1,200+ Reviews</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-white font-bold text-lg sm:text-xl">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>25 min</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Average Prep Time
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-white font-bold text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>100%</span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Fresh Ingredients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
                alt="OURS CAFÉ Gourmet Spread"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

              {/* Floating Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
                    Featured Today
                  </p>
                  <h3 className="text-sm font-bold text-white">
                    Truffle & Mushroom Artisan Pizza
                  </h3>
                </div>
                <span className="text-amber-500 font-bold text-base">
                  $18.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
