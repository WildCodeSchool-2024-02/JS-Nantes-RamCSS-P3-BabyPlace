import { nextui } from "@nextui-org/react";

const importNextUi = process.env.NODE_ENV === "production" ?
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" :
  "../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    importNextUi
  ],
  darkMode: "class",
  theme: {},
  plugins: [nextui()],
};
export default config;
