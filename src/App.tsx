import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleOpenCart = () => {
    alert("Cart drawer will open here once built!");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar cartCount={cartCount} onOpenCart={handleOpenCart} />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
