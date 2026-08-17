import React from "react";
import { Star, Quote, Sparkles, CheckCircle } from "lucide-react";
import { TESTIMONIALS, RESTAURANT_INFO } from "@/data/restaurantData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 relative border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-950 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Enugu Diners
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100">
            Loved by Enugu Foodies & Locals
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-stone-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-amber-300">4.4 / 5.0 Average Rating</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400">Over 180+ happy patrons</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl relative group"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4 group-hover:text-amber-500/40 transition-colors" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <Star className="w-3.5 h-3.5 fill-amber-400/50 text-amber-400" />
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-200 font-serif">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-amber-400/80">
                    {review.role}
                  </p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};