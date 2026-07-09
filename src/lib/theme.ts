import { siteConfig } from "./site";

export const theme = {
  colors: {
    background: "#F7F3EE",
    surface: "#FFFFFF",
    accent: "#B98E5F",
    dark: "#222222",
    muted: "#7A746C",
  },
} as const;

export const currencyFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: "currency",
  currency: siteConfig.currency,
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}
