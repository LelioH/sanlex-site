import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import config from "./site.config";

document.documentElement.lang = config.seo.lang;
document.title = config.seo.title;
document.querySelector('meta[name="description"]')?.setAttribute("content", config.seo.description);

const root = document.getElementById("root");
if (!root) throw new Error('Elemento #root não encontrado em index.html');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
