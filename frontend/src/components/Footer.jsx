import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />

    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.5 3H11.5v6h-3v-6H7v-3h1.5v-2A4 4 0 0 1 12.5 5H15v3.5Z"
      strokeLinejoin="round"
    />
  </svg>
);

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-8 h-8 flex items-center justify-center border border-border text-muted hover:text-accent hover:border-accent transition-colors"
  >
    {children}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-muted hover:text-accent transition-colors">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 font-sans">
      {" "}
      <div className="max-w-container mx-auto grid grid-cols-2 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-x-8 gap-y-10 pb-14 text-sm">
        {" "}
        <div className="col-span-2 sm:col-span-1">
          {" "}
          <img src={assets.logo} className="mb-5 w-32" alt="Sphere logo" />
          <p className="w-full md:w-4/5 text-muted leading-relaxed">
            Considered essentials, made to outlast a season. Sphere brings
            better-made basics and standout pieces to your everyday wardrobe.
          </p>
          <div className="flex items-center gap-2.5 mt-6">
            <SocialLink href="#" label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </SocialLink>

            <SocialLink href="#" label="X">
              <XIcon className="w-4 h-4" />
            </SocialLink>

            <SocialLink href="#" label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </SocialLink>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-mega uppercase text-muted-foreground mb-5">
            Shop
          </p>

          <ul className="flex flex-col gap-2.5">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/collection">Collection</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-mega uppercase text-muted-foreground mb-5">
            Company
          </p>

          <ul className="flex flex-col gap-2.5">
            <FooterLink to="/about">About us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>

            <li className="text-muted-foreground/70">Delivery</li>
            <li className="text-muted-foreground/70">Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-mega uppercase text-muted-foreground mb-5">
            Get in touch
          </p>

          <ul className="flex flex-col gap-2.5 text-muted">
            <li>+1-243-7584</li>
            <li>iamhere@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-[4vw] md:-mx-[6vw] bg-foreground text-background/60">
        <p className="max-w-container mx-auto py-5 px-6 lg:px-10 text-[13px] text-center">
          © {year} Sphere E-Commerce Store — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
