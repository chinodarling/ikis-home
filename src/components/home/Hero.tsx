"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const heroImages = [
  "/images/hero/heros-living-room-written.jpg",
  "/images/hero/heros-bedroom-written.jpg",
  "/images/hero/heros-dining-written.jpg",
  "/images/hero/heros-kitchen-written.jpg",
  "/images/hero/heros-decor-written.jpg",
  "/images/hero/heros-outdoor-written.jpg",
];

export function HeroRender() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % heroImages.length;
        setNextIndex(next);
        setIsTransitioning(true);

        window.setTimeout(() => {
          setActiveIndex(next);
          setIsTransitioning(false);
          setNextIndex(null);
        }, 600);

        return current;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

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
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={heroImages[activeIndex]}
          alt="Curated home scene"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          style={{
            objectFit: "cover",
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 600ms ease-in-out",
          }}
        />
        {nextIndex !== null ? (
          <Image
            src={heroImages[nextIndex]}
            alt="Curated home scene"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{
              objectFit: "cover",
              opacity: isTransitioning ? 1 : 0,
              transition: "opacity 600ms ease-in-out",
            }}
          />
        ) : null}
      </div>
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
