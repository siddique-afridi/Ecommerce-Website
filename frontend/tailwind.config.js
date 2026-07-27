import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* ---------------------------------------------------
           Brand scales — each ships as a full 50–900 ramp so
           you can shade anything (hover, disabled, tints)
           without ever writing a raw hex in a component.
        --------------------------------------------------- */
        ink: {
          50: "#F5F5F3",
          100: "#E8E7E3",
          200: "#C7C5BD",
          300: "#9C9A8F",
          400: "#6F6D62",
          500: "#46453C",
          600: "#302F29",
          700: "#232219",
          800: "#1C1B14",
          900: "#14140F",
          950: "#0A0A07",
          DEFAULT: "#14140F",
        },
        paper: {
          50: "#FDFCFA",
          100: "#F7F4EE",
          200: "#F1ECE1",
          300: "#E7DFCF",
          400: "#D8CDB5",
          500: "#C4B695",
          600: "#A8976F",
          700: "#8A774F",
          800: "#6B5A38",
          900: "#4A3D25",
          DEFAULT: "#F7F4EE",
        },
        stone: {
          50: "#F4F3EF",
          100: "#E5E2D9",
          200: "#C9C2B2",
          300: "#A8A196",
          400: "#857E6F",
          500: "#5B5648",
          600: "#494537",
          700: "#38352A",
          800: "#27251D",
          900: "#1A1811",
          DEFAULT: "#5B5648",
        },
        bottle: {
          50: "#EDF3EF",
          100: "#D3E4D9",
          200: "#A8C9B3",
          300: "#7AAD8C",
          400: "#4F8E68",
          500: "#326B4B",
          600: "#24503A",
          700: "#1F3D31",
          800: "#172E25",
          900: "#10201A",
          DEFAULT: "#1F3D31",
        },
        brass: {
          50: "#FBF6EE",
          100: "#F3E6CC",
          200: "#E6CC9C",
          300: "#D8B26C",
          400: "#C89B54",
          500: "#A9814B",
          600: "#8A6A3C",
          700: "#6B522F",
          800: "#4C3A22",
          900: "#2E2314",
          DEFAULT: "#A9814B",
        },

        /* status colors — muted/earthy so they sit inside the
           same palette instead of looking like a generic UI kit */
        success: { DEFAULT: "#3F7D5C", subtle: "#EAF3EE" },
        warning: { DEFAULT: "#C98A2C", subtle: "#FBF3E4" },
        danger: { DEFAULT: "#B23A2E", subtle: "#F8EAE8" },
        info: { DEFAULT: "#3D6A8A", subtle: "#EAF1F5" },

        /* ---------------------------------------------------
           Semantic aliases — use THESE in components. If the
           brand palette ever changes, edit only the block above.
        --------------------------------------------------- */
        background: "#F7F4EE", // paper.100
        surface: "#FBFAF7", // card / dropdown / modal backgrounds
        foreground: "#14140F", // ink.900 — primary text
        muted: "#5B5648", // stone.500 — secondary text
        "muted-foreground": "#857E6F", // stone.400 — tertiary/placeholder text
        border: "#DAD4C7", // hairline rules, dividers, input borders
        primary: {
          DEFAULT: "#1F3D31", // bottle.700 — CTAs, links, active states
          hover: "#14140F",
          foreground: "#F7F4EE",
        },
        accent: {
          DEFAULT: "#A9814B", // brass.500 — badges, tags, highlights
          hover: "#8A6A3C",
          foreground: "#14140F",
        },
      },

      fontFamily: {
        // body copy, nav, UI chrome
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        // headlines, product names, hero copy
        display: ["Fraunces", "Georgia", "serif"],
        // eyebrows, prices, SKUs, labels
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      },

      letterSpacing: {
        mega: "0.2em", // eyebrow labels / all-caps micro copy
      },

      boxShadow: {
        card: "0 1px 2px 0 rgba(20, 20, 15, 0.06), 0 1px 0 0 #DAD4C7",
        dropdown: "0 12px 24px -8px rgba(20, 20, 15, 0.18)",
        "focus-ring": "0 0 0 3px rgba(169, 129, 75, 0.35)",
      },

      borderRadius: {
        xs: "2px", // this brand stays mostly square-edged on purpose
      },

      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};