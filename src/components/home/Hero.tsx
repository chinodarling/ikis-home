"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

export function HeroRender() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 520,
        borderRadius: "320px 320px 32px 32px",
        overflow: "hidden",
        backgroundColor: "#EFE8DE",
        boxShadow: "0 24px 60px rgba(34, 34, 34, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/images/hero/heros-written-main.jpg"
        alt="Curated home scene"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ paddingTop: 128, paddingBottom: 96 }}>
      <Container>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div style={{ gridColumn: "span 5" }}>
            <p
              style={{
                margin: 0,
                marginBottom: 24,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7A746C",
              }}
            >
              CURATED HOME COLLECTION
            </p>
            <h1
              style={{
                margin: 0,
                marginBottom: 32,
                maxWidth: 520,
                fontSize: 72,
                fontWeight: 600,
                lineHeight: 0.98,
                color: "#222222",
              }}
            >
              <span style={{ display: "block" }}>Beautifully</span>
              <span style={{ display: "block" }}>Curated</span>
              <span style={{ display: "block" }}>Living.</span>
            </h1>
            <p
              style={{
                margin: 0,
                marginBottom: 16,
                maxWidth: 480,
                fontSize: 20,
                lineHeight: 1.8,
                color: "#222222",
              }}
            >
              Timeless Pieces. Everyday Moments.
            </p>
            <p
              style={{
                margin: 0,
                marginBottom: 48,
                maxWidth: 480,
                fontSize: 20,
                lineHeight: 1.8,
                color: "#5E5953",
              }}
            >
              Discover furniture, décor and home accessories curated for sophisticated South African homes.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/shop">
                <Button type="button">Shop Collection</Button>
              </Link>
              <a href="#featured-categories">
                <Button type="button" variant="secondary">
                  Explore Rooms
                </Button>
              </a>
            </div>
          </div>

          <div style={{ gridColumn: "span 7" }}>
            <div
              style={{
                width: 640,
                height: 760,
                maxWidth: "100%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeroRender />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
