import React from "react";
import { X, Trash2, Plus, Minus, MessageCircle, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";
import { MenuItem, RESTAURANT_INFO } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { item: MenuItem; quantity: number }[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, c) => sum + c.item.price * c.quantity,
    0
  );

  const formatNaira = (amount: number) => "₦" + amount.toLocaleString("en-NG");

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*🍽️ New Order - Ezeji Local Kitchen & Grills*\n\n`;
    cartItems.forEach((c, index) => {
      message += `${index + 1}. *${c.item.name}* (x${c.quantity}) — ${formatNaira(
        c.item.price * c.quantity
      )}\n`;
    });

    message += `\n*Total Amount:* ${formatNaira(totalAmount)}\n`;
    message += `*Payment Channel:* Moniepoint (5923000307 / Val Link Native Food)\n\n`;
    message += `Please confirm my order and share delivery / pick-up timeframe!`;

    const url = `https://wa.me/2348081111636?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-950 border-l border-amber-500/30 text-stone-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/90">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <div>
                <h2 className="text-base font-serif font-bold text-stone-100">
                  Your Ezeji Food Tray
                </h2>
                <p className="text-xs text-stone-400">
                  {cartItems.reduce((acc, c) => acc + c.quantity, 0)} item(s) selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 mx-auto flex items-center justify-center text-amber-400 text-2xl">
                  🥣
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-stone-200">Your Tray is Empty</h3>
                  <p className="text-xs text-stone-400 max-w-xs mx-auto">
                    Browse our roasted yam, nkwobi, native soups, and fresh palm wine to start your order.
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl"
                >
                  Explore Menu
                </Button>
              </div>
            ) : (
              cartItems.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-stone-200 truncate">
                      {item.name}
                    </h4>
                    <div className="text-xs text-amber-400 font-serif font-semibold mt-0.5">
                      {formatNaira(item.price)} each
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-stone-950 rounded-xl border border-stone-800 p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-stone-200">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-stone-500 hover:text-red-400 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-900/95 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-stone-400">
                  <span>Subtotal:</span>
                  <span>{formatNaira(totalAmount)}</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold font-serif text-stone-100 pt-1 border-t border-stone-800">
                  <span>Total Due:</span>
                  <span className="text-amber-400">{formatNaira(totalAmount)}</span>
                </div>
              </div>

              {/* Payment notification reminder */}
              <div className="bg-stone-950 p-2.5 rounded-xl border border-amber-500/30 text-[11px] text-stone-300 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pay via Moniepoint: <strong>5923000307</strong> (Val Link Native Food)</span>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={onClearCart}
                  variant="outline"
                  size="sm"
                  className="border-stone-700 text-stone-400 hover:text-stone-200 text-xs rounded-xl"
                >
                  Clear
                </Button>

                <Button
                  onClick={handleWhatsAppCheckout}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl text-xs py-3 flex items-center justify-center gap-2 shadow-lg shadow-green-900/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp ({formatNaira(totalAmount)})
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};