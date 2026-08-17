import React, { useState, useMemo } from "react";
import { Search, Utensils, Plus, Check, Sparkles, Flame, Wine, Soup, Coffee, ShoppingBag } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: { item: MenuItem; quantity: number }[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Items", icon: Utensils },
    { id: "dishes", label: "Local Dishes & Rice", icon: Flame },
    { id: "soups", label: "Native Soups", icon: Soup },
    { id: "sides", label: "BBQ & Shawarma", icon: Sparkles },
    { id: "drinks", label: "Palm Wine & Drinks", icon: Wine },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getItemQuantity = (id: string) => {
    const found = cartItems.find((c) => c.item.id === id);
    return found ? found.quantity : 0;
  };

  const formatNaira = (amount: number) => {
    return "₦" + amount.toLocaleString("en-NG");
  };

  return (
    <section id="menu" className="py-20 bg-stone-950 text-stone-100 relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            Fresh Native Kitchen & Grills
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-100">
            Ezeji Official <span className="text-amber-400">Food & Bar Menu</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            All meals are freshly prepared on order with premium local condiments, firewood aroma, and pure Igbo culinary mastery.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-bold"
                      : "bg-stone-900/90 text-stone-300 hover:text-amber-300 hover:bg-stone-800 border border-stone-800"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-stone-950" : "text-amber-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search yam, ugba, nkwobi, palm wine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900/90 border border-stone-800 focus:border-amber-500 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-stone-200 placeholder-stone-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-base">No dishes found matching "{searchQuery}".</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 border-amber-500/40 text-amber-300 text-xs"
            >
              Reset Search Filter
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => {
              const qty = getItemQuantity(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-stone-900/80 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group relative overflow-hidden"
                >
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                  <div>
                    {/* Tags row */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500/80 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                        {item.category === "dishes"
                          ? "Native Dish"
                          : item.category === "soups"
                          ? "Native Soup"
                          : item.category === "sides"
                          ? "Grill / Side"
                          : "Special Drink"}
                      </span>

                      {item.tag && (
                        <span className="text-[10px] font-bold bg-gradient-to-r from-amber-600 to-yellow-600 text-stone-950 px-2 py-0.5 rounded shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs sm:text-sm text-stone-400 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block font-light">Price</span>
                      <span className="text-lg sm:text-xl font-bold font-serif text-amber-400">
                        {formatNaira(item.price)}
                      </span>
                    </div>

                    <Button
                      onClick={() => onAddToCart(item)}
                      size="sm"
                      className={`rounded-xl text-xs font-bold transition-all ${
                        qty > 0
                          ? "bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md"
                          : "bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 border border-stone-700 hover:border-amber-400"
                      }`}
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          <span>Added ({qty})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 mr-1" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};