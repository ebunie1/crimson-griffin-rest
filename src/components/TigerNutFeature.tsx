import React from "react";
import { Sparkles, Heart, ShieldCheck, Leaf, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export const TigerNutFeature: React.FC = () => {
  return (
    <section id="tigernut" className="py-16 sm:py-20 bg-stone-900 relative overflow-hidden border-y border-amber-500/20 text-stone-100">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Visual Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 to-yellow-600 rounded-3xl opacity-25 blur-xl group-hover:opacity-40 transition-opacity" />
                
                <div className="relative bg-stone-950 border border-amber-500/40 rounded-3xl p-4 overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900 flex items-center justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
                      alt="Bottled creamy chilled Ezeji Tiger Nut Drink"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                    
                    {/* Bottle Label Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-stone-950/90 backdrop-blur-md border border-amber-500/50 rounded-xl p-3 text-center">
                      <div className="text-amber-400 font-serif font-bold text-base">Eze Ji Tiger Nut</div>
                      <div className="text-[11px] text-amber-200/80 uppercase tracking-widest font-semibold">
                        Naturally Prepared • Drink Healthy • Live Healthy
                      </div>
                      <div className="text-xs text-stone-300 mt-1">
                        Chilled Bottle • ₦1,500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                House Signature Bottled Drink
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100 leading-tight">
                  Eze Ji <span className="text-amber-400">Tiger Nut Drink</span>
                </h2>
                <p className="text-lg text-amber-200/90 font-serif italic mt-1">
                  “Drink Healthy, Live Healthy”
                </p>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Carefully crafted and naturally extracted from fresh tiger nuts, dry dates (dabino), and coconut milk. 
                100% natural, lactose-free, rich in essential minerals, and chilled to perfection. Perfect companion 
                for hot grills, roasted yam, or as a wholesome daily refreshment.
              </p>

              {/* Benefit Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <Leaf className="w-4 h-4 text-emerald-400 mb-1.5" />
                  <div className="text-xs font-bold text-stone-200">100% Natural</div>
                  <div className="text-[11px] text-stone-400">No chemical additives</div>
                </div>
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <Heart className="w-4 h-4 text-rose-400 mb-1.5" />
                  <div className="text-xs font-bold text-stone-200">Heart & Vitality</div>
                  <div className="text-[11px] text-stone-400">Rich in fibers & vitamins</div>
                </div>
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mb-1.5" />
                  <div className="text-xs font-bold text-stone-200">Fresh Daily</div>
                  <div className="text-[11px] text-stone-400">Hygienically bottled</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={`https://wa.me/2348081111636?text=${encodeURIComponent(
                    "Hello Ezeji Kitchen, I would like to order the bottled Ezeji Tiger Nut Drink!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl px-5 py-2.5 flex items-center gap-2 text-sm shadow-lg shadow-emerald-900/30">
                    <MessageCircle className="w-4 h-4" />
                    Order Tiger Nut on WhatsApp
                  </Button>
                </a>

                <a href={`tel:${RESTAURANT_INFO.phone}`}>
                  <Button
                    variant="outline"
                    className="border-amber-500/40 text-amber-300 hover:bg-stone-800 rounded-xl text-sm"
                  >
                    <Phone className="w-4 h-4 mr-2 text-amber-400" />
                    Call for Bulk Packs
                  </Button>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};