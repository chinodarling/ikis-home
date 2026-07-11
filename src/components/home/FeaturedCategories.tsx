"use client";

import { useEffect, useState } from "react";

const categories = [
  { title: "Living Room", image: "/images/categories/living-room.webp" },
  { title: "Bedroom", image: "/images/categories/bedroom.webp" },
  { title: "Dining", image: "/images/categories/dining.webp" },
  { title: "Kitchen", image: "/images/categories/kitchen.webp" },
  { title: "Decor", image: "/images/categories/decor.webp" },
  { title: "Outdoor", image: "/images/categories/outdoor.webp" },
];

function CategoryCard({ title, image }: { title: string; image: string }) {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = image;
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, [image]);

  return (
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
        backgroundColor: "#F7F3EE",
        boxShadow: "0 16px 40px rgba(34, 34, 34, 0.06)",
        border: "1px solid rgba(34, 34, 34, 0.08)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
      }}
      onMouseEnter={(event) => {
        const target = event.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(-4px)";
        target.style.boxShadow = "0 22px 48px rgba(34, 34, 34, 0.10)";
      }}
      onMouseLeave={(event) => {
        const target = event.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(0)";
        target.style.boxShadow = "0 16px 40px rgba(34, 34, 34, 0.06)";
      }}
    >
      <div
        style={{
          position: "relative",
          height: 280,
          overflow: "hidden",
          backgroundColor: "#EFE8DE",
        }}
      >
        {hasImage ? (
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 240ms ease",
            }}
            onMouseEnter={(event) => {
              const target = event.currentTarget as HTMLImageElement;
              target.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(event) => {
              const target = event.currentTarget as HTMLImageElement;
              target.style.transform = "scale(1)";
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              backgroundColor: "#E8DECF",
              color: "#6D655D",
              textAlign: "center",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Warm neutral placeholder
          </div>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "1.25rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            alignSelf: "flex-end",
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 600,
            textShadow: "0 8px 24px rgba(34, 34, 34, 0.25)",
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#222222",
            fontSize: 18,
          }}
        >
          ↗
        </div>
      </div>
    </article>
  );
}

export default function FeaturedCategories() {
  return (
    <section style={{ paddingBottom: 96 }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ marginBottom: 32, maxWidth: 640 }}>
          <h2 style={{ margin: 0, marginBottom: 12, fontSize: 34, fontWeight: 600, color: "#222222" }}>
            Shop by Category
          </h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#6F675E" }}>
            Curated collections for every room and every moment.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
