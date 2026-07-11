"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Living Room", image: "/images/hero/heros-living-room-written.jpg", href: "/furniture" },
  { title: "Bedroom", image: "/images/hero/heros-bedroom-written.jpg", href: "/furniture" },
  { title: "Dining", image: "/images/hero/heros-dining-written.jpg", href: "/furniture" },
  { title: "Kitchen", image: "/images/hero/heros-kitchen-written.jpg", href: "/shop/kitchenware" },
  { title: "Decor", image: "/images/hero/heros-decor-written.jpg", href: "/decor" },
  { title: "Outdoor", image: "/images/hero/heros-outdoor-written.jpg", href: "/outdoor" },
];

function CategoryCard({ title, image, href }: { title: string; image: string; href: string }) {

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
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
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
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
    </Link>
  );
}

export default function FeaturedCategories() {
  return (
    <section id="featured-categories" style={{ paddingBottom: 96 }}>
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
            <CategoryCard key={category.title} title={category.title} image={category.image} href={category.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
