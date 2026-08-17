import React from "react";
import { Sparkles, Utensils, Music, Flame, HeartHandshake } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Experience banner strip */}
        <div className="mt-12 bg-gradient-to-r from-amber-950/80 via-stone-950 to-orange-950/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
              Indoor Comfort & Breezy Outdoor Relaxation
            </h4>
            <p className="text-sm text-stone-300 max-w-xl">
              Located conveniently at GC Autocare Plaza, opposite Skyvilla Hotel, Trans Ekulu. Come unwind after work or celebrate with family.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
            >
              Call 08081111636
            </a>
            <a
              href="#location"
              className="bg-stone-900 border border-amber-500/40 hover:bg-stone-800 text-amber-300 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};