import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const INK = "#f2f4f8";
const SOURCE = "#00b6db";
const TRANSFORM = "#f6339a";
const SERVED = "#3ddc84";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <line x1="4" y1="12" x2="20" y2="12" stroke={INK} strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="4" cy="12" r="3" fill={SOURCE} />
          <circle cx="12" cy="12" r="3" fill={TRANSFORM} />
          <circle cx="20" cy="12" r="3" fill={SERVED} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
