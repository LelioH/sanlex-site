import config from "../site.config";

export function waUrl(text?: string): string {
  const base = "https://wa.me/" + config.contact.whatsapp;
  return text ? base + "?text=" + encodeURIComponent(text) : base;
}

export const ig = {
  main: config.contact.instagramMain,
  secondary: config.contact.instagramSecondary
};
