import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#f2f4f8";
const PAPER = "#0a0a0a";
const SOURCE = "#00b6db";
const TRANSFORM = "#f6339a";
const SERVED = "#3ddc84";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: INK, letterSpacing: "-0.02em" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: INK, opacity: 0.75, marginTop: 24, maxWidth: 920 }}>
            {profile.positioningLine}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="360" height="40" viewBox="0 0 360 40" fill="none">
            <line x1="20" y1="20" x2="340" y2="20" stroke={INK} strokeWidth="2" strokeOpacity="0.35" />
            <circle cx="20" cy="20" r="10" fill={SOURCE} />
            <circle cx="180" cy="20" r="10" fill={TRANSFORM} />
            <circle cx="340" cy="20" r="10" fill={SERVED} />
          </svg>
          <div style={{ fontSize: 24, color: INK, opacity: 0.6 }}>
            sources → transformations → served
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
