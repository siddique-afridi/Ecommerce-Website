import React from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-background px-6">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-bottle-200 opacity-40" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-brass-200 opacity-30" />

      <div className="relative z-10 max-w-3xl text-center">
        {/* Eyebrow */}
        <p className="mb-8 font-mono text-[10px] uppercase tracking-mega text-accent">
          Careers at Sphere
        </p>

        {/* Main Heading */}
        <h1 className="font-display text-6xl leading-[0.95] text-foreground sm:text-8xl">
          Something
          <br />
          <span className="italic text-bottle-500">
            is coming.
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto my-10 h-px w-16 bg-accent" />

        {/* Description */}
        <p className="mx-auto max-w-md text-sm leading-7 text-muted">
          We are building something worth joining. Our careers page is
          currently under development, but new opportunities will be available
          here soon.
        </p>

        {/* Action */}
        <button
          onClick={() => navigate("/")}
          className="mt-10 bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Return to store
        </button>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Sphere / More to come
        </p>
      </div>
    </main>
  );
};

export default Careers;