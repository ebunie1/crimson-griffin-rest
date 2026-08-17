import React from "react";
import { Music, Trophy, Gamepad2, Heart, Flame, Sparkles, Calendar, Clock, CheckCircle2, MessageCircle } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Delicacies Lineup Card with the real flyer poster on the side */}
          <div className="lg:col-span-7 bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-serif font-bold text-amber-300">
                  Featured Weekend Delicacy Lineup
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 mb-6">
                Specialty pots bubbling with exotic meats, native soups, and hot off-the-fire treats available all through Saturday & Sunday:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {WEEKEND_DELICACIES.map((delicacy, i) => (
                  <div
                    key={i}
                    className="bg-stone-950/80 border border-stone-800/90 rounded-xl p-3 hover:border-amber-500/40 transition-colors flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-200">
                        {delicacy.name}
                      </div>
                      <div className="text-[11px] text-stone-400">
                        {delicacy.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-stone-400">
                <span className="text-amber-400 font-semibold">Special:</span> Catfish Pepper Soup prepared on order!
              </div>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs">
                  Reserve Weekend Table
                </Button>
              </a>
            </div>
          </div>

          {/* Real Weekend Experience Poster & Highlights */}
          <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-amber-500/40 shadow-xl group">
                <img
                  src="/images/weekend-experience.jpg"
                  alt="Ezeji Weekend Experience official poster"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-stone-100">
                  <span className="text-[10px] font-bold bg-amber-500 text-stone-950 px-2 py-0.5 rounded uppercase tracking-wider">
                    Every Sat & Sun
                  </span>
                  <div className="font-serif font-bold text-sm mt-1">
                    Live Band • Bush Meat • Games & Prizes
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {experiences.map((exp, idx) => {
                  const Icon = exp.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 bg-stone-950/70 p-3 rounded-xl border border-stone-800/80">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-200">{exp.title}</h4>
                        <p className="text-[11px] text-stone-400 leading-snug">{exp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center">
              <div className="text-xs font-serif italic text-amber-300 font-semibold">
                “Good Food. Great Company. Lasting Memories. That’s the Ezeji Experience!”
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};