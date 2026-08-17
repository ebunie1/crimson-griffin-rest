import React from "react";
import { Star, Phone, MessageCircle, Utensils, Flame, Sparkles, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface HeroSectionProps {
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center bg-stone-950 overflow-hidden text-stone-100">
      {/* Background Ambience / Glow Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(234,88,12,0.12),transparent_50%)]" />
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop')`
        }}
      />
      {/* Subtle Nigerian geometric border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"
                    }`}
                  />
                ))}
              </div>
              <span className="text-amber-300 font-bold text-xs tracking-wide">
                4.4 STAR RATING
              </span>
              <span className="text-stone-400 text-xs hidden sm:inline">•</span>
              <span className="text-stone-300 text-xs hidden sm:inline">
                Enugu's Premier Native Grill & Kitchen
              </span>
            </div>

            {/* Main Title */}
            <div>
              <div className="text-amber-500 font-medium tracking-widest text-sm uppercase flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>GC Autocare Plaza, Trans Ekulu, Enugu</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight text-stone-100 leading-[1.1]">
                Ezeji Local Kitchen <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                  and Grills
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 font-medium max-w-xl mx-auto lg:mx-0">
              “Experience the Taste. Embrace the Culture.”
            </p>

            {/* Description Paragraph */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Feast on authentic roasted yam & ugba, spicy point-and-kill catfish pepper soup,
              cow leg nkwobi, abacha, smoky firewood jollof, and freshly tapped sweet palm wine 
              in a vibrant indoor & outdoor lounge with live weekend performances.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold px-7 py-6 rounded-2xl shadow-xl shadow-amber-500/20 text-base flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-stone-950" />
                  Order on WhatsApp
                </Button>
              </a>

              <a href={`tel:${RESTAURANT_INFO.phone}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-amber-500/50 bg-stone-900/80 hover:bg-stone-800 text-amber-200 font-semibold px-6 py-6 rounded-2xl text-base flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call to Reserve ({RESTAURANT_INFO.phone})
                </Button>
              </a>

              <Button
                variant="ghost"
                onClick={onExploreMenu}
                className="text-stone-300 hover:text-amber-400 hover:bg-stone-900/50 rounded-xl text-sm"
              >
                <Utensils className="w-4 h-4 mr-2 text-amber-400" />
                View Full Menu
              </Button>
            </div>

            {/* Quick Highlights Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-stone-800/80 text-stone-300 text-xs">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-medium text-stone-200">Open Daily Till Midnight</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium text-stone-200">Weekend Live Band</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-medium text-stone-200">Fresh Coal Grills</span>
              </div>
            </div>

          </div>

          {/* Right Visual Platter Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 via-orange-600 to-yellow-500 rounded-3xl opacity-30 blur-2xl animate-pulse" />
              
              {/* Main Dish Showcase Card */}
              <div className="relative rounded-3xl bg-stone-900/90 border border-amber-500/30 overflow-hidden shadow-2xl p-3 sm:p-4 backdrop-blur-md">
                <div className="relative h-72 sm:h-84 md:h-96 rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
                    alt="Ezeji grilled delicacies, roasted yam and fish platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Overlay Pill: Ezeji Special */}
                  <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md border border-amber-500/40 text-amber-300 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    Roasted Yam, Ugba & Fish
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-stone-100">
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                      Authentic Igbo Gastronomy
                    </div>
                    <div className="text-lg font-serif font-bold text-stone-100">
                      Fresh Firewood Jollof, Nkwobi & Coal Grills
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-700/60 text-xs text-stone-300">
                      <span>Platters from ₦5,400</span>
                      <span className="text-amber-400 font-semibold">Chilled Palm Wine on Tap</span>
                    </div>
                  </div>
                </div>

                {/* Mini Card Row below image */}
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shrink-0">
                      🌴
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-200">Fresh Palm Wine</div>
                      <div className="text-[10px] text-stone-400">Cups & Big Jugs</div>
                    </div>
                  </div>
                  <div className="bg-stone-950/80 p-2.5 rounded-xl border border-stone-800 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold shrink-0">
                      🌰
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-200">Ezeji Tiger Nut</div>
                      <div className="text-[10px] text-amber-400">100% Natural Bottle</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};