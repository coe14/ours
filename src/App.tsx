import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleOpenCart = () => {
    alert("Cart drawer will open here once built!");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar cartCount={cartCount} onOpenCart={handleOpenCart} />

      {/* Temporary Main Section for Testing */}
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-amber-500 mb-4">
          Welcome to OURS CAFÉ 🍕☕
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Navbar is live! Test clicking the cart button or resizing your browser
          window to check the mobile hamburger menu.
        </p>

        {/* Temporary button to simulate adding items to cart */}
        <button
          onClick={() => setCartCount((prev) => prev + 1)}
          className="px-6 py-3 bg-amber-500 text-zinc-950 font-bold rounded-lg hover:bg-amber-400 transition-colors"
        >
          Test Add Item (+1 Cart Badge)
        </button>
      </main>
    </div>
  );
}
