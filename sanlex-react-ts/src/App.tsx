import { useEffect, useState, useCallback } from "react";
import config, { themes } from "./site.config";
import { applyTheme, loadFonts } from "./lib/theme";
import { StoreProvider } from "./store/StoreContext";

import Header from "./components/Header";
import { Announcement, Marquee } from "./components/Bars";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Catalog from "./components/Catalog";
import { Atacado, About, FollowCTA } from "./components/Sections";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import { WhatsAppFloat, Toast, ThemeSwitcher } from "./components/Overlays";

export default function App() {
  const [themeId, setThemeId] = useState<string>(config.activeTheme);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const theme = themes[themeId] ?? themes[config.activeTheme];
    loadFonts(theme);
    applyTheme(theme);
  }, [themeId]);

  const pickCategory = useCallback((id: string) => {
    setFilter(id);
    requestAnimationFrame(() => {
      document.getElementById("colecao")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <StoreProvider>
      <span id="top" />
      <Announcement />
      <Header />
      <Hero />
      <Marquee />
      <Categories onPick={pickCategory} />
      <Catalog filter={filter} setFilter={setFilter} />
      <Atacado />
      <About />
      <FollowCTA />
      <Footer />

      <WhatsAppFloat />
      <Drawer />
      <Toast />
      <ThemeSwitcher value={themeId} onChange={setThemeId} />
    </StoreProvider>
  );
}
