import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      number: "01",
      icon: assets.exchange_icon,
      title: "Easy exchanges",
      description:
        "Simple, hassle-free exchanges when something isn't quite right.",
    },
    {
      number: "02",
      icon: assets.quality_icon,
      title: "7-day returns",
      description:
        "Return eligible products within 7 days with a straightforward process.",
    },
    {
      number: "03",
      icon: assets.support_img,
      title: "Personal support",
      description:
        "Our team is here to help whenever you need us.",
    },
  ];

  return (
    <section className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-mega text-accent">
            The Sphere standard
          </p>

          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Shopping with
            <span className="ml-2 italic text-bottle-500">
              confidence.
            </span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-muted">
          Thoughtful service from the moment you discover something to the
          moment it arrives.
        </p>
      </div>

      {/* Policies */}
      <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {policies.map((policy) => (
          <div
            key={policy.number}
            className="group relative px-0 py-8 sm:px-8 sm:py-6 first:sm:pl-0 last:sm:pr-0"
          >
            {/* Number */}
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                {policy.number}
              </span>

              <div className="flex h-10 w-10 items-center justify-center border border-border bg-surface transition-colors group-hover:border-accent">
                <img
                  src={policy.icon}
                  className="h-5 w-5 object-contain"
                  alt=""
                />
              </div>
            </div>

            {/* Content */}
            <h3 className="font-display text-xl text-foreground">
              {policy.title}
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;