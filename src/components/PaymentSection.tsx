import React, { useState } from "react";
import { CreditCard, Copy, Check, ShieldCheck, ArrowRight, Building2, User, Hash, MessageCircle } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.payment.accountNumber);
    setCopied(true);
    toast.success("Moniepoint Account Number copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="payment" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase bg-stone-900 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <CreditCard className="w-3.5 h-3.5" />
            Official Payment Channel
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-100">
            Seamless & Verified <span className="text-amber-400">Payment</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm">
            For online orders, table reservations, and catering deposits, please use our official Moniepoint account below.
          </p>
        </div>

        {/* Bank Transfer Card */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Official Account
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Account Details */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold block mb-1">
                  Bank Transfer / USSD / POS
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-100">
                  Pay via Moniepoint
                </h3>
              </div>

              <div className="space-y-3">
                
                {/* Account Number Box */}
                <div className="bg-stone-950 border border-amber-500/30 p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-stone-400 uppercase font-medium flex items-center gap-1">
                      <Hash className="w-3 h-3 text-amber-400" /> Account Number
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400 tracking-wider mt-0.5">
                      {RESTAURANT_INFO.payment.accountNumber}
                    </div>
                  </div>
                  <Button
                    onClick={handleCopyAccount}
                    variant="outline"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs h-10 px-4 flex items-center gap-1.5 transition-all shadow-md shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-stone-950" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-stone-950" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Account Name & Bank Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-xl">
                    <div className="text-[10px] text-stone-400 uppercase font-medium flex items-center gap-1">
                      <User className="w-3 h-3 text-amber-400" /> Account Name
                    </div>
                    <div className="text-sm font-bold text-stone-100 mt-0.5">
                      {RESTAURANT_INFO.payment.accountName}
                    </div>
                  </div>

                  <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-xl">
                    <div className="text-[10px] text-stone-400 uppercase font-medium flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-amber-400" /> Bank
                    </div>
                    <div className="text-sm font-bold text-stone-100 mt-0.5">
                      {RESTAURANT_INFO.payment.bank}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Instruction Side Box */}
            <div className="md:col-span-5 bg-stone-950/90 border border-stone-800 p-5 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-stone-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                How to Complete Payment
              </h4>

              <ol className="space-y-2.5 text-xs text-stone-400 list-decimal list-inside leading-relaxed">
                <li>Copy the Moniepoint account number <strong>5923000307</strong>.</li>
                <li>Transfer exact amount for your order or table reservation.</li>
                <li>Ensure the recipient name is <strong>Val Link Native Food</strong>.</li>
                <li>Share proof of transfer to our WhatsApp (<strong>08081111636</strong>) for instant kitchen processing.</li>
              </ol>

              <a
                href={`https://wa.me/2348081111636?text=${encodeURIComponent(
                  "Hello Ezeji Local Kitchen, I have made a payment to your Moniepoint account (Val Link Native Food). Here is my receipt:"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs py-2 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Send Proof via WhatsApp
                </Button>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};