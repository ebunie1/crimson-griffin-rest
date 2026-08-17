import React, { useState } from "react";
import { MessageCircle, Phone, Send, Calendar, Clock, Users, Utensils, CheckCircle2 } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ContactAndReservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    requestType: "reservation", // 'reservation' | 'order' | 'general'
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Please provide at least your Name and Phone Number.");
      return;
    }

    const typeText =
      formData.requestType === "reservation"
        ? "Table Reservation Request"
        : formData.requestType === "order"
        ? "Food Delivery / Pick-Up Order"
        : "General Inquiry";

    const text = `*New Request from Ezeji Website*\n\n` +
      `*Type:* ${typeText}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.guests ? `*Guests:* ${formData.guests} people\n` : "") +
      (formData.date ? `*Date:* ${formData.date}\n` : "") +
      (formData.time ? `*Time:* ${formData.time}\n` : "") +
      (formData.message ? `*Notes/Meal Requests:* ${formData.message}\n` : "");

    const url = `https://wa.me/2348081111636?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Redirecting to WhatsApp to send your request!");
  };

  return (
    <section id="contact" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <MessageCircle className="w-3.5 h-3.5" />
            Get in Touch / Reserve
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100">
            Book a Table or <span className="text-amber-400">Order Directly</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Planning a weekend hangout, family dinner, birthday, or need prompt delivery in Enugu? Reach us below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-serif font-bold text-stone-100">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone Call Box */}
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center gap-4 bg-stone-950 p-4 rounded-2xl border border-stone-800 hover:border-amber-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase font-medium">Direct Phone Call</div>
                    <div className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                      {RESTAURANT_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Chat Box */}
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-stone-950 p-4 rounded-2xl border border-stone-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 uppercase font-medium">WhatsApp Chat & Orders</div>
                    <div className="text-base font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp (08081111636)
                    </div>
                  </div>
                </a>
              </div>

              {/* Perks list */}
              <div className="space-y-2 pt-2 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Indoor air-conditioned & breezy outdoor lounge seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Takeout packaging & fast city delivery available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Live band reservations for Saturday & Sunday evenings</span>
                </div>
              </div>

            </div>
          </div>

          {/* Reservation / Order Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-amber-300 mb-2">
                Send a Fast Reservation / Order Request
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Fill this quick form and send directly to our official WhatsApp manager for instant response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Request Type Selector */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "reservation", label: "Table Reserve" },
                    { id: "order", label: "Food Order" },
                    { id: "general", label: "General Inquiry" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, requestType: type.id })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.requestType === type.id
                          ? "bg-amber-500 text-stone-950 border-amber-400"
                          : "bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Obinna Eze"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0808 111 1636"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {formData.requestType === "reservation" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Guests */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-stone-100 outline-none"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="10">10+ Group / Party</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-100 outline-none"
                      >
                      </input>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-100 outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Special Request / Favorite Meals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Roasted Yam & Ugba platter, 2 bottles of Tiger Nut, outdoor seating near live band..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-600 outline-none transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-stone-950 font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 fill-stone-950" />
                  Send Request via WhatsApp
                </Button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};