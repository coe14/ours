import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import type { MenuItem } from "./types";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item: MenuItem) => {
    setCartCount((prev) => prev + 1);
    alert(`Added "${item.name}" to your cart!`);
  };

  const handleOpenCart = () => {
    alert(`Your cart has ${cartCount} item(s).`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar cartCount={cartCount} onOpenCart={handleOpenCart} />
      <main>
        <Hero />
        <About />
        <MenuSection onAddToCart={handleAddToCart} />
      </main>
      <footer className="py-8 bg-zinc-900 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} OURS CAFÉ. All rights reserved.</p>
      </footer>
    </div>
  );
}
