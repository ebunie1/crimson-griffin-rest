import React, { useState, useEffect } from "react";
import { Phone, Utensils, Calendar, MapPin, MessageCircle, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Weekend Experience", href: "#weekend" },
    { label: "Tiger Nut", href: "#tigernut" },
    { label: "Payment Info", href: "#payment" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3"
          : "bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-300">
              <span className="font-serif font-black text-stone-950 text-xl tracking-tighter">
                EJ
              </span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors block leading-tight font-serif">
                EZEJI
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-amber-400/90 font-medium block">
                Local Kitchen & Grills
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Trigger */}
            <Button
              onClick={onOpenCart}
              variant="outline"
              size="sm"
              className="relative border-amber-500/40 bg-stone-900/80 hover:bg-amber-500 hover:text-stone-950 text-amber-300 rounded-full px-3 py-1.5 h-9"
            >
              <ShoppingBag className="w-4 h-4 mr-1.5 text-amber-400" />
              <span className="text-xs font-semibold hidden sm:inline">Order Tray</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-stone-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Quick WhatsApp Call / Chat */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 px-3 py-2 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-3.5 py-2 rounded-full shadow-md shadow-green-900/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg bg-stone-900 text-stone-200 border border-stone-800 hover:text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 border-b border-amber-500/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 font-medium py-2 border-b border-stone-800/60 flex items-center justify-between text-sm"
              >
                <span>{link.label}</span>
                <span className="text-amber-500/60 text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-2.5 rounded-xl shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat / Order on WhatsApp
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 border border-amber-500/30 text-amber-300 font-semibold py-2.5 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};