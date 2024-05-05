import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      x2s: "0.72rem",
      xs: "0.85rem",
    },
    extend: {
      transitionDuration: {
        "50": "50ms",
      },

      borderWidth: {
        "1": "1px",
        "3": "3px",
        "5": "5px",
        "6": "6px",
      },
      borderRadius: {
        full: "50%",
        lg: "35%",
        md: "20%",
        r05: "0.5rem",
      },
      colors: {
        subsColor: "#24ff24",
        cred: "#ff2222",
        gray: "#aaaaaa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
