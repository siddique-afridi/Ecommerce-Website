import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";
import { useMeta } from "../hooks/useMeta";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useMeta({
    title: "Cart | Sphere E-Commerce Store",
    description:
      "Review the products in your cart before completing your order at Sphere E-Commerce Store.",
    keywords:
      "cart, shopping, Sphere E-Commerce Store, checkout, products",
  });

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <main className="mx-auto max-w-container px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      {/* Page Header */}
      <div className="mb-12 border-b border-border pb-8">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
          Your selection
        </p>

        <h1 className="font-display text-4xl text-foreground sm:text-5xl">
          Shopping <span className="italic text-bottle-500">Cart</span>
        </h1>

        <p className="mt-4 text-sm text-muted">
          Review your selected pieces before continuing to checkout.
        </p>
      </div>

      {/* Empty Cart */}
      {cartData.length === 0 ? (
        <div className="border border-border bg-surface px-6 py-20 text-center">
          <p className="font-display text-3xl text-foreground">
            Your cart is empty
          </p>

          <p className="mt-3 text-sm text-muted">
            Discover something worth bringing home.
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="mt-8 bg-primary px-7 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
          {/* Cart Items */}
          <section>
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Your items
              </p>

              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {cartData.length}{" "}
                {cartData.length === 1 ? "item" : "items"}
              </p>
            </div>

            <div>
              {cartData.map((item) => {
                const productData = products.find(
                  (product) => product._id === item._id
                );

                if (!productData) return null;

                return (
                  <div
                    key={`${item._id}-${item.size}`}
                    className="group grid grid-cols-[auto_1fr_auto] gap-4 border-b border-border py-6 sm:grid-cols-[120px_1fr_auto] sm:gap-6"
                  >
                    {/* Product Image */}
                    <div className="aspect-[4/5] w-24 overflow-hidden bg-paper-200 sm:w-[120px]">
                      <img
                        src={productData.image[0]}
                        alt={productData.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex min-w-0 flex-col justify-between py-1">
                      <div>
                        <p className="font-display text-lg leading-tight text-foreground sm:text-xl">
                          {productData.name}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs text-muted">
                            {currency}
                            {productData.price.toFixed(2)}
                          </span>

                          <span className="h-3 w-px bg-border" />

                          <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                            Size: {item.size}
                          </span>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="mt-5 flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          Quantity
                        </span>

                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) => {
                            const value = e.target.value;

                            if (value === "") return;

                            updateQuantity(
                              item._id,
                              item.size,
                              Math.max(1, Number(value))
                            );
                          }}
                          className="h-8 w-14 border border-border bg-transparent px-2 text-center font-mono text-xs text-foreground outline-none transition-colors focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex flex-col items-end justify-between py-1">
                      <p className="font-mono text-sm text-foreground">
                        {currency}
                        {(productData.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, 0)
                        }
                        className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Order Summary */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <CartTotal />

            <button
              onClick={() => navigate("/place-order")}
              className="mt-5 w-full bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Proceed to checkout
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
              Shipping and final taxes are calculated during checkout.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;