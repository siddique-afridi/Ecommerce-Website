import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    backendUrl,
    navigate,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod": {
          const res = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );

          if (res.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(res.data.message);
          }

          break;
        }

        case "stripe": {
          const resStripe = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );

          if (resStripe.data.success) {
            window.location.replace(resStripe.data.session_url);
          } else {
            toast.error(resStripe.data.message);
          }

          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const inputClass =
    "w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  const paymentMethods = [
    {
      id: "stripe",
      label: "Stripe",
      image: assets.stripe_logo,
    },
    {
      id: "razorpay",
      label: "Razorpay",
      image: assets.razorpay_logo,
    },
    {
      id: "cod",
      label: "Cash on delivery",
    },
  ];

  return (
    <main className="mx-auto max-w-container px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      {/* Page Header */}
      <div className="mb-12 border-b border-border pb-8">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
          Final step
        </p>

        <h1 className="font-display text-4xl text-foreground sm:text-5xl">
          Complete your{" "}
          <span className="italic text-bottle-500">order.</span>
        </h1>

        <p className="mt-4 text-sm text-muted">
          Enter your delivery details and select your preferred payment method.
        </p>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
          {/* Delivery Information */}
          <section>
            <div className="mb-8 flex items-end justify-between border-b border-border pb-5">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-mega text-accent">
                  Step 01
                </p>

                <h2 className="font-display text-3xl text-foreground">
                  Delivery information
                </h2>
              </div>

              <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
                Required fields
              </span>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="First name"
                />

                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="Last name"
                />
              </div>

              {/* Email */}
              <input
                required
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                className={inputClass}
                type="email"
                placeholder="Email address"
              />

              {/* Street */}
              <input
                required
                name="street"
                value={formData.street}
                onChange={onChangeHandler}
                className={inputClass}
                type="text"
                placeholder="Street address"
              />

              {/* City + State */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="City"
                />

                <input
                  required
                  name="state"
                  value={formData.state}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="State / Province"
                />
              </div>

              {/* Zip + Country */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="ZIP / Postal code"
                />

                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="text"
                  placeholder="Country"
                />
              </div>

              {/* Phone */}
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
                className={inputClass}
                type="tel"
                placeholder="Phone number"
              />
            </div>

            {/* Payment */}
            <div className="mt-16">
              <div className="mb-8 border-b border-border pb-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-mega text-accent">
                  Step 02
                </p>

                <h2 className="font-display text-3xl text-foreground">
                  Payment method
                </h2>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((payment) => (
                  <button
                    key={payment.id}
                    type="button"
                    onClick={() => setMethod(payment.id)}
                    className={`flex w-full items-center justify-between border px-5 py-4 text-left transition-colors ${
                      method === payment.id
                        ? "border-primary bg-primary/[0.04]"
                        : "border-border bg-surface hover:border-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Radio */}
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          method === payment.id
                            ? "border-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {method === payment.id && (
                          <span className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </span>

                      {payment.image ? (
                        <img
                          src={payment.image}
                          alt={payment.label}
                          className="h-5 max-w-[100px] object-contain"
                        />
                      ) : (
                        <span className="font-mono text-xs uppercase tracking-wider text-muted">
                          {payment.label}
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      {method === payment.id ? "Selected" : "Select"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <CartTotal />

            <button
              type="submit"
              className="mt-5 w-full bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Place order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
              By placing your order, you agree to our terms and conditions.
            </p>
          </aside>
        </div>
      </form>
    </main>
  );
};

export default PlaceOrder;