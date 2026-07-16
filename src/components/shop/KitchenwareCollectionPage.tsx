"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { kitchenwareCollections, kitchenwareProducts, formatCurrency } from "../../data/kitchenware";
import Container from "../ui/Container";
import { useCart } from "./CartProvider";

export default function KitchenwareCollectionPage() {
  const [activeCollection, setActiveCollection] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState("price-asc");
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    const nextProducts = [...kitchenwareProducts].filter((product) =>
      activeCollection === "All" ? true : product.collection === activeCollection
    );

    nextProducts.sort((a, b) => {
      if (sortOrder === "name") {
        return a.name.localeCompare(b.name);
      }
      return sortOrder === "price-desc" ? b.price - a.price : a.price - b.price;
    });

    return nextProducts;
  }, [activeCollection, sortOrder]);

  return (
    <main>
      <section style={{ paddingTop: 96, paddingBottom: 72 }}>
        <Container>
          <div style={{ maxWidth: 760, textAlign: "center", margin: "0 auto 32px" }}>
            <p style={{ margin: 0, marginBottom: 12, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Kitchenware Collections
            </p>
            <h1 style={{ margin: 0, marginBottom: 12, fontSize: "clamp(2rem, 3.4vw, 2.8rem)", color: "#222222" }}>
              Curated for the modern kitchen
            </h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#6F675E" }}>
              Thoughtful serveware, bowls, canisters and drinkware shaped for everyday ritual.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
            <button type="button" onClick={() => setActiveCollection("All")} style={{ ...pillStyle(activeCollection === "All") }}>All</button>
            {kitchenwareCollections.map((collection) => (
              <button key={collection} type="button" onClick={() => setActiveCollection(collection)} style={{ ...pillStyle(activeCollection === collection) }}>
                {collection}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10, color: "#6F675E", fontSize: 15, fontWeight: 600 }}>
              <span>Sort</span>
              <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} style={{ border: "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 999, background: "#FFFFFF", color: "#222222", padding: "0.7rem 1rem", minWidth: 180 }}>
                <option value="price-asc">Price Low–High</option>
                <option value="price-desc">Price High–Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
            {filteredProducts.map((product) => (
              <article key={product.id} style={{ borderRadius: 24, overflow: "hidden", background: "#FFFFFF", border: "1px solid rgba(34, 34, 34, 0.08)", boxShadow: "0 16px 40px rgba(34, 34, 34, 0.06)" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 5", background: "#EFE8DE" }}>
                  <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.2rem" }}>
                  <p style={{ margin: 0, marginBottom: 6, color: "#7A746C", fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase" }}>
                    {product.collection}
                  </p>
                  <h2 style={{ margin: 0, marginBottom: 8, fontSize: 20, color: "#222222" }}>{product.name}</h2>
                  <p style={{ margin: 0, color: "#6F675E", fontSize: 15, lineHeight: 1.7 }}>{product.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "#222222" }}>{formatCurrency(product.price)}</span>
                    <div style={{ display: "flex", gap: 10 }}>
                      <Link href={`/shop/kitchenware/${product.id}`} style={{ padding: "0.7rem 0.95rem", borderRadius: 999, background: "#F7EBDD", color: "#222222", fontWeight: 700, textDecoration: "none" }}>
                        View
                      </Link>
                      <button type="button" onClick={() => addItem({ id: product.id, name: product.name, category: product.collection, price: product.price, image: product.images[0], quantity: 1 })} style={{ padding: "0.7rem 0.95rem", borderRadius: 999, border: "1px solid rgba(34, 34, 34, 0.12)", background: "#FFFFFF", color: "#222222", fontWeight: 700, cursor: "pointer" }}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function pillStyle(active: boolean) {
  return {
    border: active ? "1px solid #B98E5F" : "1px solid rgba(34, 34, 34, 0.12)",
    borderRadius: 999,
    background: active ? "#F7EBDD" : "#FFFFFF",
    color: active ? "#222222" : "#6F675E",
    padding: "0.7rem 1rem",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  };
}
