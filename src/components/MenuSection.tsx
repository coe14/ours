import { useState } from "react";
import { menuItems, categories, MenuItem } from "../data/menuData";
import { Search, ChevronDown, Filter, Star, Plus } from "lucide-react";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Explore By Category Section (Matches screenshot 782c5c) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-orange-600"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              EXPLORE BY
            </span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-zinc-900">
            Category
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedCategory === cat.id
                    ? "bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/20"
                    : "bg-white border-amber-900/5 text-zinc-800 hover:border-orange-300"
                }`}
              >
                <div className="h-20 rounded-xl bg-zinc-100 overflow-hidden mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=300"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xs">{cat.name}</h4>
                <p
                  className={`text-[10px] ${selectedCategory === cat.id ? "text-orange-100" : "text-zinc-500"}`}
                >
                  {cat.count} dishes
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Top Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-amber-900/10 text-xs text-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-amber-900/10 text-xs font-bold text-zinc-700 shadow-sm hover:bg-zinc-50">
              <Filter className="w-4 h-4 text-orange-600" />
              <span>Filters (1)</span>
            </button>

            <div className="relative flex-1 md:flex-initial">
              <select className="w-full appearance-none px-6 py-3 rounded-full bg-white border border-amber-900/10 text-xs font-bold text-zinc-700 pr-10 shadow-sm focus:outline-none">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <h3 className="font-serif font-bold text-2xl text-zinc-900">
              Results
            </h3>
            <span className="w-8 h-[2px] bg-orange-600"></span>
            <span className="text-xs text-zinc-500 font-medium">
              {filteredItems.length} dishes found
            </span>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-4 border border-amber-900/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-48 rounded-2xl overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif font-bold text-sm text-zinc-900 leading-snug">
                    {item.name}
                  </h4>
                  <span className="text-xs font-bold text-orange-600 whitespace-nowrap">
                    ETB {item.price}
                  </span>
                </div>

                <p className="text-zinc-500 text-[11px] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-zinc-100 mt-3">
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{item.rating} (0)</span>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="px-4 py-2 rounded-full bg-orange-600 text-white text-[11px] font-bold hover:bg-orange-700 transition-all shadow-sm flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
