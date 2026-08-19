import type { GlyphId } from "../types";

const GLYPHS: Record<GlyphId, string> = {
  sutia: '<path d="M3 7c2 5 6 5 9 5s7 0 9-5M3 7c0 6 4 9 9 9s9-3 9-9M3 7l2-2M21 7l-2-2"/>',
  calc: '<path d="M3 7h18l-2 5c-2 0-3 1-7 5-4-4-5-5-7-5L3 7z"/>',
  set: '<path d="M4 6c1.5 3 4 3 8 3s6.5 0 8-3M5 13h14l-1.5 4c-1.5 0-2.5 1-5.5 4-3-3-4-4-5.5-4L5 13z"/>',
  shape: '<path d="M8 4h8l-1 6c2 1 3 3 3 6a4 4 0 0 1-8 0 4 4 0 0 1-8 0c0-3 1-5 3-6L8 4z"/>',
  sleep: '<path d="M7 4h10l-1 4 1 12H7L8 8 7 4zM9 4v4M15 4v4"/>',
  plus: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'
};

interface GlyphProps {
  id?: GlyphId;
  className?: string;
}

export default function Glyph({ id = "set", className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: GLYPHS[id] }}
    />
  );
}
