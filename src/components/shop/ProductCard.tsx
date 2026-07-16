"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Product } from "../../data/products";
import { formatCurrency } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = product.image;
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, [product.image]);

  return (
    <article
      style={{
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        background: "#FFFFFF",
        border: "1px solid rgba(34, 34, 34, 0.08)",
        boxShadow: "0 16px 40px rgba(34, 34, 34, 0.06)",
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
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: "#EFE8DE",
        }}
      >
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #EEDFCF 0%, #ECE2D3 100%)",
            }}
          />
        )}

        <button
          type="button"
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
            border: "0",
            borderRadius: 999,
            padding: "0.7rem 0.95rem",
            background: "rgba(255, 255, 255, 0.94)",
            color: "#222222",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 10px 24px rgba(34, 34, 34, 0.12)",
          }}
        >
          Quick View
        </button>
      </div>

      <div style={{ padding: "1.2rem 1.2rem 1.35rem" }}>
        <p style={{ margin: 0, marginBottom: 6, color: "#7A746C", fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase" }}>
          {product.category}
        </p>
        <h3 style={{ margin: 0, marginBottom: 8, fontSize: 20, fontWeight: 600, color: "#222222" }}>
          {product.name}
        </h3>
        <p style={{ margin: 0, color: "#6F675E", fontSize: 15, lineHeight: 1.7 }}>
          {product.description}
        </p>
        <p style={{ margin: "0.9rem 0 0", color: "#222222", fontSize: 17, fontWeight: 700 }}>
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}
