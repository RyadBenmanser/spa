/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CBA590",
          secondary: "#54A292",
          accent: "#1F5B4F",
          neutral: "#7F7C76",
          "base-100": "#D9E8E5",
        },
      },
    ],
  },
  theme: {
    colors: {
      primary: "#CBA590",
      secondary: "#54A292",
      warm: "#1F5B4F",
      cool: "#7F7C76",
      complementary: "#D9E8E5",
    },
  },
};
