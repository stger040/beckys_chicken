import type { CSSProperties } from "react";

export function getHexagonPattern(): CSSProperties {
  const svgPattern = `<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M4 0 L8 4 L4 8 L0 4 Z' fill='rgba(255,215,0,0.07)' stroke='none'/></svg>`;
  const encoded =
    typeof btoa !== "undefined"
      ? btoa(svgPattern)
      : Buffer.from(svgPattern).toString("base64");

  return {
    backgroundImage: `url("data:image/svg+xml;base64,${encoded}")`,
    backgroundRepeat: "repeat",
  };
}
