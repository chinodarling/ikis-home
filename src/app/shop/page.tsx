"use client";

import { useMemo, useState } from "react";
import Container from "../../components/ui/Container";
import ProductGrid from "../../components/shop/ProductGrid";
import CategoryFilter from "../../components/shop/CategoryFilter";
import SortDropdown from "../../components/shop/SortDropdown";
import { productCategories, products } from "../../data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("featured");

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products];

    if (activeCategory !== "All") {
      nextProducts = nextProducts.filter((product) => product.category === activeCategory);
    }

    switch (sortOrder) {
      case "newest":
        nextProducts.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "price-asc":
        nextProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        nextProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        nextProducts.sort((a, b) => a.id.localeCompare(b.id));
        break;
    }

    return nextProducts;
  }, [activeCategory, sortOrder]);

  return (
    <main>
      <section style={{ paddingTop: 112, paddingBottom: 56 }}>
        <Container>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                margin: 0,
                marginBottom: 16,
                color: "#7A746C",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Shop
            </p>
            <h1
              style={{
                margin: 0,
                marginBottom: 16,
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                lineHeight: 1.08,
                color: "#222222",
              }}
            >
              Curated for Contemporary Living
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 19,
                lineHeight: 1.75,
                color: "#6F675E",
              }}
            >
              Curated furniture, décor and home accessories.
            </p>
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              borderTop: "1px solid rgba(34, 34, 34, 0.08)",
              paddingTop: 24,
            }}
          >
            <CategoryFilter
              categories={[...productCategories]}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
            <SortDropdown value={sortOrder} onChange={setSortOrder} />
          </div>

          <div style={{ marginTop: 24 }}>
            <ProductGrid products={filteredProducts} />
          </div>
        </Container>
      </section>
    </main>
  );
}
