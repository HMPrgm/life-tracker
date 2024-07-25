import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Pwhite: "#F8F9FA",
        Swhite: "#E9ECEF",
        Pblack: "#212529",
        Sblack: "#343A40",
        accent: "#EB5E28"
      },
    },
  },
  plugins: [],
};
export default config;
