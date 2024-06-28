import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {},
  plugins: [nextui()],
};
export default config;
