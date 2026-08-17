import React from "react";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface FloatingProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsAppCTA: React.FC<FloatingProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Cart Pill if items added */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs border-2 border-stone-950 animate-bounce transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>View Tray ({cartCount})</span>
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white flex items-center justify-center shadow-2xl shadow-green-950/80 border-2 border-stone-950 transition-all hover:scale-110 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-stone-950 text-white text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-stone-800 pointer-events-none hidden sm:block">
          Chat / Order on WhatsApp
        </span>
      </a>
    </div>
  );
};