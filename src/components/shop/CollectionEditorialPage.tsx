"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "../../data/products";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

export type CollectionEditorialPageProps = {
  title: string;
  intro: string;
  image: string;
  collectionCategory: "Furniture" | "Décor" | "Outdoor";
  editorialTitle: string;
  editorialText: string;
  ctaHref: string;
};

export default function CollectionEditorialPage({
  title,
  intro,
  image,
  collectionCategory,
  editorialTitle,
  editorialText,
  ctaHref,
}: CollectionEditorialPageProps) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const collectionProducts = useMemo(() => {
    const items = products.filter((product) => product.category === collectionCategory);

    const filtered = items.filter((product) => {
      const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under-3000" && product.price < 3000) ||
        (priceFilter === "3000-6000" && product.price >= 3000 && product.price <= 6000) ||
        (priceFilter === "over-6000" && product.price > 6000);

      return matchesCategory && matchesSearch && matchesPrice;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      if (sortOrder === "name") return a.name.localeCompare(b.name);
      return a.price - b.price;
    });

    return sorted;
  }, [categoryFilter, collectionCategory, priceFilter, searchTerm, sortOrder]);

  const editorialProducts = collectionProducts.slice(0, 3);
  const recentlyViewed = collectionProducts.slice(0, 2);

  return (
    <main>
      <section style={{ position: "relative", minHeight: 520, overflow: "hidden", background: "#EFE8DE" }}>
        <Image src={image} alt={title} fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(34,34,34,0.72) 0%, rgba(34,34,34,0.28) 100%)" }} />
        <Container>
          <div style={{ position: "relative", zIndex: 1, padding: "7rem 0 5rem", maxWidth: 760, color: "#FFFFFF" }}>
            <p style={{ margin: 0, marginBottom: 12, fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Collections
            </p>
            <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2.2rem, 4vw, 3.3rem)", lineHeight: 1.06 }}>
              {title}
            </h1>
            <p style={{ margin: 0, marginBottom: 24, fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}>
              {intro}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 14 }}>
              <Link href="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/collections" style={{ color: "#FFFFFF", textDecoration: "none" }}>Collections</Link>
              <span>/</span>
              <span>{title}</span>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ paddingTop: 48, paddingBottom: 56 }}>
        <Container>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", padding: "1rem 0 1.5rem", borderTop: "1px solid rgba(34, 34, 34, 0.08)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#6F675E", fontSize: 14, fontWeight: 600 }}>
                <span>Category</span>
                <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} style={controlStyle}>
                  <option value="All">All</option>
                  <option value={collectionCategory}>{collectionCategory}</option>
                </select>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#6F675E", fontSize: 14, fontWeight: 600 }}>
                <span>Price</span>
                <select value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)} style={controlStyle}>
                  <option value="all">Any</option>
                  <option value="under-3000">Under R3,000</option>
                  <option value="3000-6000">R3,000–R6,000</option>
                  <option value="over-6000">Above R6,000</option>
                </select>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#6F675E", fontSize: 14, fontWeight: 600 }}>
                <span>Sort</span>
                <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} style={controlStyle}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price Low–High</option>
                  <option value="price-desc">Price High–Low</option>
                  <option value="name">Name</option>
                </select>
              </label>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#6F675E", fontSize: 14, fontWeight: 600 }}>
              <span>Search</span>
              <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search pieces" style={{ ...controlStyle, minWidth: 220 }} />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ paddingBottom: 72 }}>
        <Container>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 32, background: "#FFFFFF", border: "1px solid rgba(34,34,34,0.08)", boxShadow: "0 16px 40px rgba(34,34,34,0.06)" }}>
            <div style={{ position: "relative", minHeight: 360 }}>
              <Image src={image} alt={editorialTitle} fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "2rem" }}>
              <p style={{ margin: 0, marginBottom: 8, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>Editorial Feature</p>
              <h2 style={{ margin: 0, marginBottom: 12, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#222222" }}>{editorialTitle}</h2>
              <p style={{ margin: 0, marginBottom: 20, color: "#6F675E", lineHeight: 1.8, maxWidth: 720 }}>{editorialText}</p>
              <Link href={ctaHref} style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                Shop Collection
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ paddingBottom: 88 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
            <div>
              <h3 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Recently Viewed</h3>
              <div style={{ display: "grid", gap: 16 }}>
                {recentlyViewed.map((product) => (
                  <div key={product.id} style={{ borderBottom: "1px solid rgba(34,34,34,0.08)", paddingBottom: 12 }}>
                    <p style={{ margin: 0, color: "#222222", fontWeight: 700 }}>{product.name}</p>
                    <p style={{ margin: "4px 0 0", color: "#6F675E" }}>{product.category}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>You May Also Like</h3>
              <div style={{ display: "grid", gap: 16 }}>
                {editorialProducts.map((product) => (
                  <div key={product.id} style={{ borderBottom: "1px solid rgba(34,34,34,0.08)", paddingBottom: 12 }}>
                    <p style={{ margin: 0, color: "#222222", fontWeight: 700 }}>{product.name}</p>
                    <p style={{ margin: "4px 0 0", color: "#6F675E" }}>{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: "1px solid rgba(34,34,34,0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF" }}>
              <h3 style={{ margin: 0, marginBottom: 12, fontSize: 20, color: "#222222" }}>Newsletter</h3>
              <p style={{ margin: 0, marginBottom: 16, color: "#6F675E", lineHeight: 1.8 }}>Receive first access to new arrivals and our latest editorial stories.</p>
              <input placeholder="Email address" style={{ ...controlStyle, width: "100%", marginBottom: 12 }} />
              <button type="button" style={{ border: "0", borderRadius: 999, padding: "0.8rem 1rem", background: "#B98E5F", color: "#FFFFFF", fontWeight: 700, cursor: "pointer" }}>
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

const controlStyle: React.CSSProperties = {
  border: "1px solid rgba(34, 34, 34, 0.12)",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#222222",
  padding: "0.7rem 1rem",
};
