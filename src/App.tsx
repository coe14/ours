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
    alert(`Added "${item.name}" to cart!`);
  };

  const handleOpenCart = () => {
    alert("Cart drawer will open here once built!");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar cartCount={cartCount} onOpenCart={handleOpenCart} />
      <main>
        <Hero />
        <About />
        <MenuSection onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}
