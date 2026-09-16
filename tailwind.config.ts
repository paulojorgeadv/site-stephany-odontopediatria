import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F4",
        shell: "#F5EDE7",
        blush: "#F0D9D6",
        rose: "#D9A7A2",
        sage: "#BFD3C6",
        mint: "#E6F0EA",
        ink: "#3A3A38",
        muted: "#7B7470",
        gold: "#C9A66B",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(58,58,56,0.25)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        rise: "rise .8s cubic-bezier(.2,.7,.3,1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
