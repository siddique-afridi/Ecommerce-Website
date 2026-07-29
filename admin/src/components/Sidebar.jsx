import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const navItems = [
  {
    to: "/add",
    label: "Add Product",
    icon: assets.add_icon,
  },
  {
    to: "/list",
    label: "Products",
    icon: assets.order_icon,
  },
  {
    to: "/orders",
    label: "Orders",
    icon: assets.order_icon,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-surface md:block">
      <div className="sticky top-[72px] px-6 py-8">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-mega text-muted-foreground">
          Navigation
        </p>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 border px-4 py-3 transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-card"
                    : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
                }`
              }
            >
              <img
                src={item.icon}
                alt=""
                className={`h-5 w-5 ${
                  item.to === "/add" ? "" : "opacity-80"
                }`}
              />

              <span className="text-sm font-medium">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;