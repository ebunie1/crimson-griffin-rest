import React from "react";
import { Music, Trophy, Gamepad2, Heart, Flame, Sparkles, Calendar, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { WEEKEND_DELICACIES, RESTAURANT_INFO } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";

export const WeekendExperience: React.FC = () => {
  const experiences = [
    {
      icon: Music,
      title: "Live Band Performances",
      desc: "Soothing highlife, contemporary Afrobeat tunes, and energetic live music under the evening sky.",
    },
    {
      icon: Trophy,
      title: "Predict & Win Competitions",
      desc: "Exciting football predictions, cultural trivia, and fun challenges with free dishes & palm wine prizes.",
    },
    {
      icon: Gamepad2,
      title: "Interactive Games & Challenges",
      desc: "Ludo, Ayo/Drafts, card games, and engaging challenges for friends, couples, and dining groups.",
    },
    {
      icon: Heart,
      title: "Customer Appreciation Moments",
      desc: "Special loyalty discounts, complimentary tasting treats, and celebration shout-outs for guests.",
    },
  ];

  return (
    <section id="weekend" className="py-20 bg-stone-950 text-stone-100 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/30">
            <Calendar className="w-3.5 h-3.5" />
            Every Saturday & Sunday
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-100">
            The Ezeji <span className="text-amber-400">Weekend Experience</span>
          </h2>
          <p className="text-amber-200/90 font-serif italic text-base sm:text-lg">
            “Authentic Flavors. Good Vibes. Unforgettable Moments.”
          </p>
          <p className="text-stone-300 text-sm sm:text-base">
            Weekends at Ezeji are legendary. Join us every Saturday and Sunday for Coal City’s most entertaining cultural feast featuring live highlife music, games, prizes, and rare local delicacies prepared to order.
          </p>
        </div>

        {/* Big Weekend Showcase Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          
          {/* Full Flyer Display Container (Uncropped, Full Aspect Ratio) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md sm:max-w-lg w-full">
              {/* Outer Golden Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-orange-600/20 to-yellow-500/30 rounded-3xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
              
              <div className="relative bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden flex flex-col items-center">
                
                {/* Image element with object-contain and natural portrait aspect ratio */}
                <div className="w-full flex items-center justify-center rounded-2xl overflow-hidden bg-stone-950">
                  <img
                    src="/images/weekend-experience.jpg"
                    alt="Ezeji Weekend Experience official flyer featuring bush meat, roasted yam, live band, games, and competitions"
                    className="w-full h-auto max-h-[750px] object-contain rounded-xl shadow-inner transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Quick caption under flyer */}
                <div className="mt-3 flex items-center justify-between w-full px-2 text-xs text-stone-300">
                  <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Every Saturday & Sunday
                  </span>
                  <span className="text-stone-400 text-[11px]">
                    From 4:00 PM Till Midnight
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Delicacy Lineup */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Delicacies Lineup Card */}
            <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-serif font-bold text-amber-300">
                  Featured Weekend Delicacy Lineup
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-400">
                Authentic pots bubbling with exotic meats, native soups, and hot off-the-fire treats all weekend:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {WEEKEND_DELICACIES.map((delicacy, i) => (
                  <div
                    key={i}
                    className="bg-stone-950/80 border border-stone-800/90 rounded-xl p-2.5 hover:border-amber-500/40 transition-colors flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-stone-200">
                        {delicacy.name}
                      </div>
                      <div className="text-[10px] text-stone-400">
                        {delicacy.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Perks Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 bg-stone-900/90 p-3.5 rounded-2xl border border-stone-800/90">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-200">{exp.title}</h4>
                      <p className="text-[11px] text-stone-400 leading-snug mt-0.5">{exp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="bg-gradient-to-r from-amber-500/10 via-stone-900 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3.5">
              <div className="text-center sm:text-left">
                <div className="text-xs font-serif font-bold text-amber-300">
                  “Good Food. Great Company. Lasting Memories.”
                </div>
                <div className="text-[11px] text-stone-400">
                  Reserve your table before weekend seats fill up
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md">
                    <MessageCircle className="w-3.5 h-3.5 fill-stone-950" />
                    Reserve via WhatsApp
                  </Button>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full sm:w-auto"
                >
                  <Button size="sm" variant="outline" className="w-full sm:w-auto border-amber-500/40 text-amber-300 hover:bg-stone-800 rounded-xl text-xs flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Call
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