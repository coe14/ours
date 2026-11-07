import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import SpecialOffers from "./components/SpecialOffers";
import Contact from "./components/Contact";
import CartDrawer from "./components/CartDrawer";
import type { MenuItem, CartItem } from "./types";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const handleAddToCart = (product: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.product.id === id) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as CartItem[],
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="animate-fade-in">
        <Hero />
        <About />
        <MenuSection onAddToCart={handleAddToCart} />
        <SpecialOffers onAddToCart={handleAddToCart} />
        <Contact />
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <footer className="py-8 bg-zinc-900 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>
          © {new Date().getFullYear()} OURS CAFÉ. All rights reserved. Crafted
          with passion.
        </p>
      </footer>
    </div>
  );
}
