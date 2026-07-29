import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const STATUS_OPTIONS = [
  "Order Placed",
  "Packing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );

      if (res.data.success) {
        setOrders(res.data.orders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );

      if (res.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl text-foreground">Orders</h1>
        <p className="mt-1 text-muted">
          {orders.length} order{orders.length !== 1 ? "s" : ""} to manage
        </p>
      </div>

      {orders.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center text-muted">
          No orders yet.
        </div>
      )}

      <div className="space-y-3">
        {orders.map((order) => (
          <details
            key={order._id}
            className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
          >
            {/* Summary row — always visible, this is the whole minimal view */}
            <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-100">
                  <img src={assets.parcel_icon} alt="" className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-foreground">
                    #{order._id.slice(-6).toUpperCase()}
                    <span className="ml-2 font-normal text-muted">
                      {order.address.firstName} {order.address.lastName}
                    </span>
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {new Date(order.date).toLocaleDateString()} ·{" "}
                    {order.items.length} item
                    {order.items.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pl-16 sm:pl-0">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    order.payment
                      ? "bg-success-subtle text-success"
                      : "bg-warning-subtle text-warning"
                  }`}
                >
                  {order.payment ? "Paid" : "Pending"}
                </span>

                <span className="font-mono text-sm text-bottle-700">
                  {currency}
                  {order.amount}
                </span>

                {/* Status select stays reachable without opening details */}
                <select
                  value={order.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => statusHandler(e, order._id)}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none transition focus:border-accent"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <svg
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </summary>

            {/* Details — only rendered once expanded */}
            <div className="grid gap-4 border-t border-border p-5 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Delivery address
                </h3>
                <p className="text-sm text-muted">{order.address.phone}</p>
                <div className="mt-1 space-y-0.5 text-sm text-muted">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state}
                  </p>
                  <p>
                    {order.address.country} {order.address.zipcode}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  Items
                </h3>
                <div className="space-y-1.5">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-background px-3 py-2 text-sm"
                    >
                      <span className="text-foreground">
                        {item.name}{" "}
                        <span className="text-muted">· {item.size}</span>
                      </span>
                      <span className="text-muted">× {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-background px-3 py-2 text-sm sm:col-span-2">
                <span className="text-muted">Payment method</span>
                <span className="font-medium text-foreground">
                  {order.paymentMethod}
                </span>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Orders;