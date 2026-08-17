import React from "react";
import { Phone, MapPin, MessageCircle, Clock, Heart, Sparkles, CreditCard } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-12 relative text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-600 flex items-center justify-center text-stone-950 font-serif font-black text-xl shadow-lg border border-amber-300">
                EJ
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-stone-100 tracking-tight block">
                  EZEJI
                </span>
                <span className="text-[10px] tracking-wider uppercase text-amber-400 font-semibold block">
                  Local Kitchen & Grills
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Experience the taste, embrace the culture. Enugu's favorite native kitchen and grill lounge for authentic roasted yam & ugba, firewood jollof, nkwobi, and vibrant weekend live entertainment.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>4.4-Star Rated Dining in Trans Ekulu</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Contact & Order
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Call: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {RESTAURANT_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div>
                <span className="block text-stone-400 font-semibold">Monday – Saturday:</span>
                <span>8:00 AM – 12:00 AM (Midnight)</span>
              </div>
              <div>
                <span className="block text-stone-400 font-semibold">Sunday:</span>
                <span>9:00 AM – 12:00 AM (Midnight)</span>
              </div>
              <div className="text-amber-300/90 pt-1 text-[11px]">
                Live Band every Saturday & Sunday
              </div>
            </div>
          </div>

          {/* Payment info quick card */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-stone-100 uppercase tracking-wider text-amber-400">
              Official Payment
            </h4>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Moniepoint MFB</span>
              </div>
              <div className="font-mono text-stone-100 font-bold text-sm tracking-wider">
                5923000307
              </div>
              <div className="text-[11px] text-stone-400">
                Val Link Native Food
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Ezeji Local Kitchen and Grills. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with pride for Coal City's finest local gastronomy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};