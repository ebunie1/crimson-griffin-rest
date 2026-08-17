import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { TigerNutFeature } from "@/components/TigerNutFeature";
import { WeekendExperience } from "@/components/WeekendExperience";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HoursAndLocation } from "@/components/HoursAndLocation";
import { PaymentSection } from "@/components/PaymentSection";
import { ContactAndReservation } from "@/components/ContactAndReservation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingWhatsAppCTA } from "@/components/FloatingWhatsAppCTA";
import { MenuItem } from "@/data/restaurantData";
import { toast } from "sonner";

const Index: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    toast.success(`Added ${item.name} to your tray!`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as { item: MenuItem; quantity: number }[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((c) => c.item.id !== itemId));
    toast.info("Item removed from tray");
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, c) => sum + c.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Sticky Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 1. Hero Section */}
      <HeroSection onExploreMenu={scrollToMenu} />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Categorized Menu Section with Live Filter and Cart additions */}
      <MenuSection
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />

      {/* Bottled Ezeji Tiger Nut Spotlight */}
      <TigerNutFeature />

      {/* 4. Weekend Experience Section */}
      <WeekendExperience />

      {/* 5. Testimonials Section (4.4 Star reputation) */}
      <TestimonialsSection />

      {/* 6. Hours & Location Section (Trans Ekulu, Enugu + Map) */}
      <HoursAndLocation />

      {/* 8. Official Payment Section (Moniepoint) */}
      <PaymentSection />

      {/* 7. Contact & Table Reservation Form */}
      <ContactAndReservation />

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Quick Ordering Action */}
      <FloatingWhatsAppCTA
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
};

export default Index;