import { useState } from "react";
import {
  ShoppingBag,
  UtensilsCrossed,
  Menu as MenuIcon,
  X,
} from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "አማ">("EN");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FAF7F2]/90 backdrop-blur-md z-50 border-b border-amber-900/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-zinc-900 tracking-tight font-serif italic">
                Ours
              </span>
              <span className="block text-[10px] tracking-widest text-orange-600 uppercase font-semibold">
                - RESTAURANT -
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-700">
            <a href="#home" className="hover:text-orange-600 transition-colors">
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-orange-600 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#menu"
              className="text-orange-600 border-b-2 border-orange-600 pb-1"
            >
              MENU
            </a>
            <a
              href="#gallery"
              className="hover:text-orange-600 transition-colors"
            >
              GALLERY
            </a>
            <a
              href="#contact"
              className="hover:text-orange-600 transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* Language Switcher & Checkout Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-zinc-200/60 p-1 rounded-full text-xs font-bold">
              <button
                onClick={() => setLang("EN")}
                className={`px-3 py-1 rounded-full transition-all ${lang === "EN" ? "bg-orange-500 text-white shadow-sm" : "text-zinc-600"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("አማ")}
                className={`px-3 py-1 rounded-full transition-all ${lang === "አማ" ? "bg-orange-500 text-white shadow-sm" : "text-zinc-600"}`}
              >
                አማ
              </button>
            </div>

            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-all shadow-md shadow-orange-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CHECKOUT ({cartCount})</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="p-2 text-orange-600 relative"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-800"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-amber-900/10 px-4 pt-2 pb-6 space-y-3 font-semibold text-zinc-800">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block py-2"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block py-2"
          >
            ABOUT
          </a>
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-orange-600"
          >
            MENU
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block py-2"
          >
            GALLERY
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
