import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";
import { i18n } from "./configs/i18n";

export default defineConfig({
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    ["hstack", "flex items-center"],
    ["text-c", "text-gray-600 dark:text-gray-300"],
    ["text-light-c", "text-gray-500 dark:text-gray-400"],
    ["text-lighter-c", "text-gray-400 dark:text-gray-500"],
    ["text-dark-c", "text-black dark:text-white"],
    ["text-brand", "text-red-500 dark:text-rose-400"],
    ["bg-c", "bg-white dark:bg-slate-700"],
    ["bg-dark-c", "bg-gray-100 dark:bg-slate-600"],
    ["bg-darker-c", "bg-gray-200 dark:bg-slate-500"],
    ["bg-brand", "bg-red-400 dark:bg-rose-400"],
    ["border-c", "border-gray-300 dark:border-gray-500"],
    ["border-dark-c", "border-gray-500 dark:border-gray-400"],
    ["border-darker-c", "border-black dark:border-gray-200"],
    ["border-light-c", "border-gray-200 dark:border-slate-500"],
    ["hide-on-mobile", "lt-md:hidden"],
    ["shadow-c", "shadow shadow-slate-300 dark:shadow-slate-800"],
    [
      "dropdown-container",
      "bg-c border border-c rounded shadow-c overflow-x-hidden overflow-y-scroll"
    ],
    ["dropdown-li", "hstack px-3 h-8 truncate cursor-pointer hover:bg-dark-c"],
    ["circle", "rounded-full flex-center"],
    ["round-btn", "circle size-7 md:size-8 hover:bg-darker-c"],
    ["rect-btn", "hstack space-x-1.5 px-2.5 py-1.5 rounded"],
    [
      "resume-card",
      "cursor-pointer mx-auto overflow-hidden rounded-md duration-150 hover:(-translate-y-3 drop-shadow-xl)"
    ]
  ],
  theme: {
    breakpoints: {
      sm: "641px",
      md: "769px",
      lg: "1025px"
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block"
      }
    }),
    presetWebFonts({
      fonts: {
        ui: "Lato:400,700"
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // @ts-expect-error icon is a customized key
  safelist: i18n.locales.map((item) => item.icon)
});
