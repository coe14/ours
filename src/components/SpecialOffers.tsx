import { menuItems } from "../data/menuData";
import type { MenuItem } from "../types";
import { Tag, Plus, Star, Sparkles } from "lucide-react";

interface SpecialOffersProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function SpecialOffers({ onAddToCart }: SpecialOffersProps) {
  // Filter items that have special offers or discounts
  const offerItems = menuItems.filter(
    (item) => item.isSpecialOffer || item.discountPrice,
  );

  return (
    <section
      id="offers"
      className="py-24 bg-zinc-900/60 border-t border-b border-zinc-800/80 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wide">
            <Tag className="w-3.5 h-3.5" />
            <span>Limited Time Deals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Exclusive <span className="text-amber-500">Special Offers</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Grab your favorite artisan meals and coffees at unbeatable
            promotional prices today!
          </p>
        </div>

        {/* Promo Banner */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-amber-500/20 via-zinc-900 to-zinc-900 border border-amber-500/30 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Weekend Combo Deal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get 20% OFF On Your First Specialty Coffee & Dessert Combo
            </h3>
            <p className="text-zinc-400 text-sm max-w-lg">
              Use promo code{" "}
              <span className="text-amber-500 font-mono font-bold">OURS20</span>{" "}
              at checkout to claim your discount.
            </p>
          </div>
          <a
            href="#menu"
            className="shrink-0 px-8 py-4 rounded-2xl bg-amber-500 text-zinc-950 font-extrabold hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 z-10"
          >
            Claim Offer Now
          </a>
        </div>

        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-amber-500 text-zinc-950 text-xs font-black uppercase tracking-wider shadow-lg">
                SPECIAL DEAL
              </div>

              <div>
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between mt-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-amber-500">
                      ${item.discountPrice?.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-zinc-500 line-through">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-sm hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Deal</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
