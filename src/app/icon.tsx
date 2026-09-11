import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const INK = "#14213d";
const SOURCE = "#35507a";
const TRANSFORM = "#c97a2b";
const SERVED = "#1f7a5c";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2f3f5",
          borderRadius: 6,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
