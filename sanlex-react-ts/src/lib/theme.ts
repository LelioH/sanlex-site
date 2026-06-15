import type { Theme, ThemeColors } from "../types";

const VARS: Record<keyof ThemeColors, string> = {
  wine: "--wine", wine2: "--wine-2", rose: "--rose", roseDeep: "--rose-deep",
  blush: "--blush", nude: "--nude", cream: "--cream", cream2: "--cream-2",
  ink: "--ink", inkSoft: "--ink-soft", gold: "--gold", line: "--line",
  white: "--white", ok: "--ok"
};

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  (Object.keys(theme.colors) as (keyof ThemeColors)[]).forEach((k) => {
    root.style.setProperty(VARS[k], theme.colors[k]);
  });
  root.style.setProperty("--font-display", `"${theme.fonts.display.name}", Georgia, serif`);
  root.style.setProperty("--font-body", `"${theme.fonts.body.name}", system-ui, sans-serif`);
  root.style.setProperty("--radius", theme.radius);
}

export function loadFonts(theme: Theme): void {
  const id = "sanlex-dynamic-fonts";
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  const families = [theme.fonts.display.query, theme.fonts.body.query];
  link.href =
    "https://fonts.googleapis.com/css2?" +
    families.map((f) => "family=" + f).join("&") +
    "&display=swap";
}
