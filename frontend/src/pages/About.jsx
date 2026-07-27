import React from "react";
import { assets } from "../assets/assets";
import { useMeta } from "../hooks/useMeta";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  useMeta({
    title: "About Us | Sphere E-Commerce Store",
    description:
      "Learn about Sphere E-Commerce Store, our mission, story, and the principles behind what we create.",
    keywords:
      "about, Sphere E-Commerce Store, story, mission, quality, customer experience",
  });

  const values = [
    {
      number: "01",
      title: "Quality, considered",
      description:
        "We believe good products should feel right from the first interaction to the moment they become part of your everyday life.",
    },
    {
      number: "02",
      title: "Simple by design",
      description:
        "From discovering a product to receiving it at your door, we keep the experience clear, thoughtful, and free from unnecessary friction.",
    },
    {
      number: "03",
      title: "People first",
      description:
        "Behind every order is a real person. We are committed to providing support that is helpful, responsive, and genuinely human.",
    },
  ];

  return (
    <main className="mx-auto max-w-container px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      {/* Page Header */}{" "}
      <section className="border-b border-border pb-10">
        {" "}
        <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
          The Sphere story{" "}
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-foreground sm:text-7xl">
            More than a store.
            <br />
            <span className="italic text-bottle-500">
              A considered way to shop.
            </span>
          </h1>

          <p className="max-w-sm text-sm leading-6 text-muted">
            We believe the things we choose to bring into our lives should be
            useful, well-made, and worth keeping.
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Image */}
        <div className="relative min-h-[480px] overflow-hidden bg-paper-200 sm:min-h-[620px]">
          <img
            src={assets.about_img}
            alt="The Sphere story"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-5 left-5 bg-ink-950 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-100">
              Sphere / Since the beginning
            </p>
          </div>
        </div>

        {/* Story Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-mega text-accent">
            Why Sphere exists
          </p>

          <h2 className="font-display text-4xl leading-tight text-foreground">
            Better choices
            <span className="ml-2 italic text-bottle-500">matter.</span>
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-7 text-muted">
            <p>
              Sphere was created with a simple idea: shopping should feel more
              intentional. Instead of adding more noise to an already crowded
              world, we want to make discovering the right products feel
              considered and straightforward.
            </p>

            <p>
              We focus on bringing together products that offer a balance of
              quality, usefulness, and lasting appeal. Every part of the
              experience, from the products we present to the way we serve our
              customers, is shaped by that principle.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
              Our mission
            </p>

            <p className="font-display text-2xl leading-snug text-foreground">
              To make finding something worth owning feel simple.
            </p>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="pt-8">
        <div className="mb-10 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-mega text-accent">
              What guides us
            </p>

            <h2 className="font-display text-4xl text-foreground">
              Why choose
              <span className="ml-2 italic text-bottle-500">Sphere?</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted">
            Three principles shape how we choose products and build every
            customer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {values.map((value) => (
            <article
              key={value.number}
              className="px-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="mb-10 font-mono text-[10px] tracking-[0.15em] text-accent">
                {value.number}
              </p>

              <h3 className="font-display text-2xl text-foreground">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      {/* Newsletter */}
      <div className="mt-20">
        <NewsletterBox />
      </div>
    </main>
  );
};

export default About;
