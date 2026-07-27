import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } =
    useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full border border-border bg-surface p-6 sm:p-8">
      {/* Header */}
      <div className="mb-8 border-b border-border pb-5">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-mega text-accent">
          Order summary
        </p>

        <h2 className="font-display text-3xl text-foreground">
          Cart <span className="italic text-bottle-500">Totals</span>
        </h2>
      </div>

      {/* Breakdown */}
      <div className="space-y-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Subtotal</span>

          <span className="font-mono text-sm text-foreground">
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="h-px bg-border" />

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Shipping fee</span>

          <span className="font-mono text-sm text-foreground">
            {currency}
            {delivery_fee.toFixed(2)}
          </span>
        </div>

        <div className="h-px bg-border" />

        {/* Total */}
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Total
            </p>

            <p className="mt-1 font-display text-2xl text-foreground">
              Amount due
            </p>
          </div>

          <p className="font-mono text-lg font-medium text-bottle-600">
            {currency}
            {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;