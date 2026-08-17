import React from "react";
import { Clock, MapPin, Navigation, Phone, ExternalLink, Calendar } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";

export const HoursAndLocation: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-stone-900 text-stone-100 relative border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-950 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <MapPin className="w-3.5 h-3.5" />
            Find Us in Coal City
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100">
            Operating Hours & <span className="text-amber-400">Location</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Conveniently situated in Trans Ekulu before Nowas Junction, right opposite Skyvilla Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Hours Block */}
            <div className="bg-stone-950/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-100">Opening Hours</h3>
                  <p className="text-xs text-amber-400">Open 7 days a week</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400 font-medium">Monday – Saturday:</span>
                  <span className="font-bold text-stone-200">8:00 AM – 12:00 AM (Midnight)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400 font-medium">Sunday:</span>
                  <span className="font-bold text-stone-200">9:00 AM – 12:00 AM (Midnight)</span>
                </div>
                <div className="text-[11px] text-amber-300/80 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 flex items-center gap-2">
                  <Calendar className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Weekend Live Band & Delicacy Fest: Every Sat & Sun from 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Address Block */}
            <div className="bg-stone-950/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-100">Restaurant Address</h3>
                  <p className="text-xs text-orange-400">Trans Ekulu, Enugu</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                {RESTAURANT_INFO.address}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    "GC Autocare Plaza, opposite Skyvilla Hotel, Trans Ekulu, Enugu"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="sm" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </Button>
                </a>

                <a href={`tel:${RESTAURANT_INFO.phone}`} className="w-full sm:w-auto">
                  <Button size="sm" variant="outline" className="w-full sm:w-auto border-stone-700 text-stone-300 hover:bg-stone-800 rounded-xl text-xs">
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                    Call for Directions
                  </Button>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map / Visual Embed Container */}
          <div className="lg:col-span-7 bg-stone-950 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl relative min-h-[350px] sm:min-h-[420px] flex flex-col justify-between p-2">
            
            {/* Embedded Google Map Iframe for Trans Ekulu Enugu */}
            <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-stone-900">
              <iframe
                title="Ezeji Local Kitchen Location Map"
                src="https://maps.google.com/maps?q=Trans+Ekulu+Enugu+Skyvilla+Hotel&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
              
              {/* Overlay card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-stone-950/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Ezeji Local Kitchen & Grills
                </div>
                <p className="text-[11px] text-stone-300 leading-snug">
                  GC Autocare Plaza, Opp. Skyvilla Hotel, Trans Ekulu (before Nowas Junction)
                </p>
                <div className="mt-2 text-[10px] text-amber-300 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Indoor & Outdoor Parking Available
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};