import React, { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Connect this later to your newsletter API/service
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="relative mx-auto max-w-container overflow-hidden bg-ink-950 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper-800/40" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-bottle-700/40" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Eyebrow */}
        <p className="mb-5 font-mono text-[10px] uppercase tracking-mega text-brass-400">
          Stay in the loop
        </p>

        {/* Heading */}
        <h2 className="font-display text-4xl leading-tight text-paper-100 sm:text-5xl">
          Good things,
          <span className="ml-2 italic text-brass-300">
            delivered.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-stone-300">
          Be the first to discover new collections, thoughtful stories, and
          occasional offers from Sphere.
        </p>

        {/* Form */}
        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="min-w-0 flex-1 border border-ink-600 bg-ink-800 px-5 py-4 text-sm text-paper-100 outline-none placeholder:text-stone-400 transition-colors focus:border-brass-400"
          />

          <button
            type="submit"
            className="bg-brass-500 px-8 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-950 transition-colors hover:bg-brass-400"
          >
            Subscribe
          </button>
        </form>

        {/* Small Note */}
        <p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-stone-500">
          No noise. Just the good stuff.
        </p>
      </div>
    </section>
  );
};

export default NewsletterBox;