import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: { sm: "100%", md: "100%", lg: "100%", xl: "1200px" },
      },
      fontFamily: {
        // sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        // mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
};

export default config;
