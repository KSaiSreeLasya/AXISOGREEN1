import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        solar: {
          50: "hsl(45, 100%, 97%)",
          100: "hsl(45, 100%, 90%)",
          200: "hsl(45, 100%, 80%)",
          300: "hsl(45, 100%, 70%)",
          400: "hsl(45, 100%, 60%)",
          500: "hsl(45, 100%, 50%)",
          600: "hsl(42, 100%, 45%)",
          700: "hsl(39, 100%, 40%)",
          800: "hsl(36, 100%, 35%)",
          900: "hsl(33, 100%, 30%)",
        },
        energy: {
          50: "hsl(25, 100%, 97%)",
          100: "hsl(25, 100%, 90%)",
          200: "hsl(25, 100%, 80%)",
          300: "hsl(25, 100%, 70%)",
          400: "hsl(25, 100%, 60%)",
          500: "hsl(25, 100%, 50%)",
          600: "hsl(22, 100%, 45%)",
          700: "hsl(19, 100%, 40%)",
          800: "hsl(16, 100%, 35%)",
          900: "hsl(13, 100%, 30%)",
        },
        sky: {
          50: "hsl(210, 100%, 97%)",
          100: "hsl(210, 100%, 90%)",
          200: "hsl(210, 100%, 80%)",
          300: "hsl(210, 100%, 70%)",
          400: "hsl(210, 100%, 60%)",
          500: "hsl(210, 100%, 50%)",
          600: "hsl(210, 100%, 45%)",
          700: "hsl(210, 100%, 40%)",
          800: "hsl(210, 100%, 35%)",
          900: "hsl(210, 100%, 30%)",
        },
        earth: {
          50: "hsl(60, 30%, 96%)",
          100: "hsl(60, 25%, 90%)",
          200: "hsl(60, 20%, 80%)",
          300: "hsl(60, 15%, 70%)",
          400: "hsl(60, 10%, 60%)",
          500: "hsl(60, 8%, 50%)",
          600: "hsl(60, 6%, 40%)",
          700: "hsl(60, 4%, 30%)",
          800: "hsl(60, 2%, 20%)",
          900: "hsl(60, 1%, 10%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
