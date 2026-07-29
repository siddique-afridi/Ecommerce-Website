import React from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  const logout = () => {
    setToken("");
    toast.success("Logged out");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-container items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Sphere Admin"
          className="h-9 w-auto select-none"
        />

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden text-right md:block">
            <p className="font-mono text-[10px] uppercase tracking-mega text-muted-foreground">
              Admin Panel
            </p>

            <p className="text-sm text-muted">
              Store Management
            </p>
          </div>

          <button
            onClick={logout}
            className="border border-primary bg-primary px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;