import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

/* ---------------------------------------------------------
   Inline icon set — plain stroke SVG, no icon package needed.
--------------------------------------------------------- */
const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
  </svg>
);

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c1.6-3.6 4.6-5.5 7.5-5.5s5.9 1.9 7.5 5.5" strokeLinecap="round" />
  </svg>
);

const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M6 8h12l-1 12.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 8Z" strokeLinejoin="round" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
  </svg>
);

const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navLinkClass = ({ isActive }) =>
  `relative py-2 text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-200
   after:absolute after:-bottom-[3px] after:left-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300
   ${isActive ? "text-foreground after:w-full" : "text-muted-foreground after:w-0 hover:text-foreground hover:after:w-full"}`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowSearch, getCartCount, token, navigate, setToken, setCartItems } =
    useContext(ShopContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 font-sans">
      {/* announcement strip */}
      <div className="hidden sm:block bg-foreground text-background">
        <div className="max-w-container mx-auto px-6 lg:px-10 py-2 flex items-center justify-center gap-2 text-[11px] tracking-mega uppercase">
          <span className="text-accent">Free shipping</span>
          <span className="text-background/60">on every order over $75</span>
          <span className="text-background/30">·</span>
          <span className="text-background/60">30-day returns, no questions asked</span>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`bg-background/95 backdrop-blur border-b border-border transition-all duration-300 ${
          scrolled ? "py-3 shadow-card" : "py-5"
        }`}
      >
        <div className="max-w-container mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img src={assets.logo} alt="Store logo" className="w-28 sm:w-32" />
          </Link>

          <nav className="hidden sm:flex items-center gap-9">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/collection" className={navLinkClass}>
              Collection
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-5 sm:gap-6">
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Search"
              className="text-foreground hover:text-accent transition-colors"
            >
              <SearchIcon className="w-[19px] h-[19px]" />
            </button>

            <div className="group relative hidden sm:block">
              <button
                onClick={() => (token ? null : navigate("/login"))}
                aria-label="Account"
                className="text-foreground hover:text-accent transition-colors"
              >
                <UserIcon className="w-[19px] h-[19px]" />
              </button>

              {token && (
                <div className="hidden group-hover:block absolute right-0 pt-4 z-20">
                  <div className="w-44 rounded-xs border border-border bg-surface shadow-dropdown py-2">
                    <p className="px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-paper-200 cursor-pointer transition-colors">
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("/orders")}
                      className="px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-paper-200 cursor-pointer transition-colors"
                    >
                      Orders
                    </p>
                    <div className="my-1 border-t border-border" />
                    <p
                      onClick={logout}
                      className="px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-paper-200 cursor-pointer transition-colors"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Link to="/cart" className="relative text-foreground hover:text-accent transition-colors">
              <BagIcon className="w-[19px] h-[19px]" />
              {getCartCount() > 0 && (
                <span className="absolute -right-2 -top-2 flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] leading-none">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setVisible(true)}
              aria-label="Open menu"
              className="sm:hidden text-foreground"
            >
              <MenuIcon className="w-[21px] h-[21px]" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${
          visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div onClick={() => setVisible(false)} className="absolute inset-0 bg-foreground/40" />
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-foreground text-background transition-transform duration-300 ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-background/10">
            <span className="text-[11px] tracking-mega uppercase text-accent">Menu</span>
            <button onClick={() => setVisible(false)} aria-label="Close menu">
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/collection", label: "Collection" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                onClick={() => setVisible(false)}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 border-b border-background/10 text-lg font-display ${
                    isActive ? "text-accent" : "text-background"
                  }`
                }
              >
                {item.label}
                <ChevronIcon className="w-4 h-4 -rotate-90 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="px-6 mt-4 flex flex-col gap-4">
            {token ? (
              <>
                <p
                  onClick={() => {
                    setVisible(false);
                    navigate("/orders");
                  }}
                  className="text-sm tracking-wide uppercase text-background/70 cursor-pointer"
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    setVisible(false);
                    logout();
                  }}
                  className="text-sm tracking-wide uppercase text-background/70 cursor-pointer"
                >
                  Logout
                </p>
              </>
            ) : (
              <p
                onClick={() => {
                  setVisible(false);
                  navigate("/login");
                }}
                className="text-sm tracking-wide uppercase text-background/70 cursor-pointer"
              >
                Sign in
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;