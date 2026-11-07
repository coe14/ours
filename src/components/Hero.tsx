import {
  ArrowRight,
  UtensilsCrossed,
  Sparkles,
  Utensils,
  Heart,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Subtitle with Line */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-600">
                GOOD FOOD · GREAT COMPANY · MEMORABLE MOMENTS
              </span>
              <span className="w-12 h-[1px] bg-orange-400/50"></span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
              Delicious Food <br />
              <span className="font-serif italic font-normal text-orange-600">
                for Every Mood
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-zinc-600 text-sm sm:text-base max-w-lg leading-relaxed">
              Experience a perfect blend of taste, quality, and ambiance. Every
              dish is crafted with love and passion to bring joy to your table.
            </p>

            {/* Explore Menu Button */}
            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 hover:bg-orange-700 transition-all transform hover:-translate-y-0.5"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom 3 Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-amber-900/10 text-xs font-bold text-zinc-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-orange-600" />
                <span>Expert Chefs</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-orange-600" />
                <span>Made with Love</span>
              </div>
            </div>
          </div>

          {/* Right Image Banner Section */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Background Orange Brush / Shape Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-3xl transform rotate-3 scale-95 opacity-20 blur-lg" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl p-3 border border-amber-900/5">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200"
                  alt="Delicious Gourmet Burger & Drinks"
                  className="w-full h-[380px] sm:h-[460px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
