import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "../node_modules/@nextui-org/theme/dist/components/button.js",
  "../node_modules/@nextui-org/theme/dist/components/(button|switch|code|input|tab|tabs).js",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];