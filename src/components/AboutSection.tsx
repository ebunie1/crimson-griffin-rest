import React from "react";
import { Sparkles, Utensils, Music, Flame, HeartHandshake, Package } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: "Authentic Fire & Charcoal Grills",
      desc: "Fresh point-and-kill catfish, whole chicken, spicy pork, and roasted yam infused with native Igbo spices and real smoke aroma.",
    },
    {
      icon: Utensils,
      title: "Native Soups & Delicacies",
      desc: "Rich Oha, Bitterleaf (Onugbo), Egusi, Ofe Akwu, Cow Leg Nkwobi, and spicy goat meat pepper soup prepared by master local cooks.",
    },
    {
      icon: Music,
      title: "Vibrant Weekend Atmosphere",
      desc: "Lively live band performances, indoor & outdoor canopy seating, interactive party games, and customer appreciation moments.",
    },
    {
      icon: HeartHandshake,
      title: "Warm Igbo Hospitality",
      desc: "Generous portions, ice-cold fresh palm wine, friendly servers, and seamless Moniepoint instant payments in Trans Ekulu.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-900/90 text-stone-100 relative border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-950/80 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Our Heritage & Story
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100">
            Authentic Local Flavors, <br className="hidden sm:inline" />
            <span className="text-amber-400">Unmatched Coal City Warmth</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            Ezeji Local Kitchen and Grills is an authentic local Nigerian kitchen and grill in Enugu offering 
            both relaxed indoor and breezy outdoor canopy dining. We are renowned for our signature coal-grilled 
            specialties, hearty native soups, fresh sweet palm wine, and an electrifying weekend atmosphere featuring 
            live band performances, party games, and genuine cultural hospitality.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-950/70 border border-amber-500/20 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Takeaway Packaging & Dining Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
            <img
              src="/images/takeaway-pack.jpg"
              alt="Eze Ji authentic takeaway packaging and freshly prepared fish sauce"
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <Package className="w-3.5 h-3.5" />
              Dine-In, Takeaway & Swift Delivery
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-100">
              Freshly Sealed & Delivered Piping Hot Across Enugu
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Whether dining under our open-air canopy in Trans Ekulu or ordering takeaway meal packs to your home or office, every dish is prepared with fresh ingredients and packed securely to maintain that firewood-grilled aroma.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md"
              >
                Call {RESTAURANT_INFO.phone}
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 border border-amber-500/40 hover:bg-stone-800 text-amber-300 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
              >
                Order Takeaway on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};