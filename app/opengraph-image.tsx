import { ImageResponse } from "next/og";
import { site } from "@/components/site";

export const runtime = "edge";
export const alt = `${site.doctor} | Odontopediatria em ${site.city} - ${site.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FBF8F4 0%, #F0D9D6 55%, #E6F0EA 100%)",
          color: "#3A3A38",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#C9A66B" }}>
          {site.city.toUpperCase()} - {site.state} · {site.cro}
        </div>
        <div style={{ fontSize: 86, marginTop: 28, lineHeight: 1.05 }}>{site.doctor}</div>
        <div style={{ fontSize: 44, marginTop: 18, color: "#7B7470" }}>
          {site.specialty}
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#3A3A38" }}>
          Crianças típicas e atípicas · Prevenção · Urgência
        </div>
      </div>
    ),
    size
  );
}
