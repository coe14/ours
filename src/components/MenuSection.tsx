import { useState } from "react";
import { menuItems, categories } from "../data/menuData";
import type { Category, MenuItem } from "../types";
import { Star, Plus, ShoppingBag } from "lucide-react";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-wide">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Our Delicious Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Our Crafted <span className="text-amber-500">Menu</span>
          </h2>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-amber-500/50 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-zinc-900/60 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-amber-500 text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-zinc-500 block">Price</span>
                  <span className="text-2xl font-extrabold text-white">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
