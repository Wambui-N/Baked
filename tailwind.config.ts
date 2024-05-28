import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'transparent': 'transparent',
        'primary': '#3F37D2',
        'white': '#EFEFFA',
        'black': '#090722',
      },
      screens: {
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
    },
  },
};
export default config;
