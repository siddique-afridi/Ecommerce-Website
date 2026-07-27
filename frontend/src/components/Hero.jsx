import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M2 7h11v9H2z" strokeLinejoin="round" />
    <path d="M13 10h4l3 3v3h-7z" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="16.5" cy="18" r="1.6" />
  </svg>
);

const RefreshIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M3 12a9 9 0 0 1 15.4-6.3L21 8" strokeLinecap="round" />
    <path d="M21 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12a9 9 0 0 1-15.4 6.3L3 16" strokeLinecap="round" />
    <path d="M3 20v-4h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <rect x="5" y="10.5" width="14" height="9" rx="1.5" strokeLinejoin="round" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
  </svg>
);

/* small L-shaped registration mark, reused at each frame corner */
const CornerMark = ({ className }) => (
  <span className={`absolute w-6 h-6 border-foreground/60 ${className}`} />
);

const Hero = () => {
  return (
    <section className="relative bg-background font-sans">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row lg:items-center">
        {/* left — editorial copy */}
        <div className="w-full lg:w-[44%] px-6 sm:px-10 lg:px-14 py-16 lg:py-24 order-2 lg:order-1">
          <div className="max-w-md">
            <p className="font-mono text-[11px] tracking-mega uppercase text-accent mb-5">
              Spring / Summer 2026
            </p>

            <h1 className="font-display text-[2.75rem] sm:text-6xl leading-[1.05] text-foreground font-normal">
              Elevate your
              <br />
              everyday look
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-muted max-w-sm">
              Considered essentials and standout pieces, cut from better
              fabrics and made to outlast a season. Curated for the way you
              actually get dressed.
            </p>

            <div className="mt-9 flex items-center gap-7">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-primary-hover transition-colors duration-200"
              >
                Shop the collection
              </Link>
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
              >
                Lookbook
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div className="flex flex-col items-start gap-2">
                <TruckIcon className="w-5 h-5 text-primary" />
                <p className="text-[11px] leading-snug text-muted">
                  Free shipping over $75
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <RefreshIcon className="w-5 h-5 text-primary" />
                <p className="text-[11px] leading-snug text-muted">
                  30-day easy returns
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <LockIcon className="w-5 h-5 text-primary" />
                <p className="text-[11px] leading-snug text-muted">
                  Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right — inset framed image, offset border + crop marks */}
        <div className="w-full lg:w-[56%] order-1 lg:order-2 flex items-center justify-center px-6 sm:px-10 lg:px-14 py-10 lg:py-20">
          <div className="relative w-full max-w-xl">
            {/* offset accent frame, sits behind the photo */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-accent" />

            {/* photo */}
            <div className="relative w-full aspect-[5/4] overflow-hidden bg-paper-200 shadow-card">
              <img
                src={assets.ecom}
                alt="Featured look from the new collection"
                className="w-full h-full"
              />
            </div>

            {/* print-style corner registration marks */}
            <CornerMark className="-top-3 -left-3 border-t border-l" />
            <CornerMark className="-top-3 -right-3 border-t border-r" />
            <CornerMark className="-bottom-3 -left-3 border-b border-l" />
            <CornerMark className="-bottom-3 -right-3 border-b border-r" />

            {/* signature element — die-cut price tag */}
            <div className="absolute -top-5 -right-5 lg:-top-6 lg:-right-6 rotate-6 z-10">
              <div className="relative bg-accent text-foreground px-6 py-4 [clip-path:polygon(14%_0,100%_0,100%_100%,14%_100%,0_50%)]">
                <span className="absolute left-[9%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background" />
                <p className="font-mono text-[10px] tracking-mega uppercase leading-none">
                  New season
                </p>
                <p className="font-display text-lg leading-none mt-1.5">SS 26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;