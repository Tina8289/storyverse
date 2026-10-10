import { ImageResponse } from "next/og";
const size = { width: 1200, height: 630 };
export const dynamic = "force-static";
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f7f7fb",
        color: "#161625",
        padding: 80,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 34 }}>
        StoryVerse<span style={{ color: "#5b5ceb" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        <span>A small story.</span>
        <span style={{ color: "#5b5ceb" }}>A whole new world.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#555566" }}>
        Original stories. Imagined worlds. A creative journey.
      </div>
    </div>,
    size,
  );
}
