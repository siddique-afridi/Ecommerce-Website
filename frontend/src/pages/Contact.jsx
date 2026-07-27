import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";
import { useMeta } from "../hooks/useMeta";

const Contact = () => {
  const { navigate } = useContext(ShopContext);

  useMeta({
    title: "Contact | Sphere E-Commerce Store",
    description:
      "Get in touch with Sphere E-Commerce Store for support, inquiries, or partnership opportunities.",
    keywords:
      "contact, Sphere E-Commerce Store, support, inquiries, partnership",
  });

  return (
    <main className="mx-auto max-w-container px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      {/* Header */}
      <section className="border-b border-border pb-10">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
          Get in touch
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-2xl font-display text-4xl leading-none text-foreground sm:text-6xl">
            We would love to
            <span className="ml-3 italic text-bottle-500">
              hear from you.
            </span>
          </h1>

          <p className="max-w-sm text-sm leading-6 text-muted">
            Whether you have a question about an order, need assistance, or
            want to work with us, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Image */}
        <div className="relative min-h-[420px] overflow-hidden bg-paper-200 sm:min-h-[560px]">
          <img
            src={assets.contact_img}
            alt="Sphere store"
            className="h-full w-full object-cover"
          />

          {/* Image Label */}
          <div className="absolute bottom-5 left-5 bg-ink-950 px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper-100">
              Sphere / Pakistan
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          {/* Store */}
          <div className="border-t border-border py-7">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-mega text-accent">
              Visit us
            </p>

            <h2 className="font-display text-3xl text-foreground">
              Our Store
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              Street 2, Building 117
              <br />
              Bahria Town, Rawalpindi
              <br />
              Pakistan
            </p>
          </div>

          {/* Contact */}
          <div className="border-t border-border py-7">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-mega text-accent">
              Contact
            </p>

            <div className="space-y-3 text-sm text-muted">
              <p>
                <span className="text-muted-foreground">Tel:</span>{" "}
                +92 337 908 xxxx
              </p>

              <p>
                <span className="text-muted-foreground">Email:</span>{" "}
                clientmail@sphere.com
              </p>
            </div>
          </div>

          {/* Careers */}
          <div className="border-y border-border py-7">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-mega text-accent">
              Join the team
            </p>

            <h2 className="font-display text-3xl text-foreground">
              Build something
              <span className="ml-2 italic text-bottle-500">
                meaningful.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              We are always looking for thoughtful, curious people who want to
              help shape what comes next.
            </p>

            <button
              onClick={() => navigate("/careers")}
              className="mt-7 bg-primary px-7 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Explore jobs
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBox />
    </main>
  );
};

export default Contact;