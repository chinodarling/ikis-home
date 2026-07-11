"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { kitchenwareProducts, formatCurrency } from "../../../../data/kitchenware";
import Container from "../../../../components/ui/Container";
import { useCart } from "../../../../components/shop/CartProvider";

export default function KitchenwareProductPage() {
  const params = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => kitchenwareProducts.find((item) => item.id === params.id),
    [params.id]
  );

  const relatedProducts = useMemo(
    () => kitchenwareProducts.filter((item) => item.collection === product?.collection && item.id !== product?.id).slice(0, 3),
    [product]
  );

  if (!product) {
    return (
      <main>
        <section style={{ paddingTop: 120, paddingBottom: 120 }}>
          <Container>
            <p>Product not found.</p>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section style={{ paddingTop: 96, paddingBottom: 72 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "start" }}>
            <div>
              <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 28, overflow: "hidden", background: "#EFE8DE", border: "1px solid rgba(34, 34, 34, 0.08)" }}>
                <Image src={product.images[selectedImage]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                {product.images.map((image, index) => (
                  <button key={image} type="button" onClick={() => setSelectedImage(index)} style={{ border: selectedImage === index ? "2px solid #B98E5F" : "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 16, overflow: "hidden", width: 88, height: 88, padding: 0, background: "#FFFFFF", cursor: "pointer" }}>
                    <Image src={image} alt={`${product.name} thumbnail ${index + 1}`} width={88} height={88} style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p style={{ margin: 0, marginBottom: 10, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                {product.collection}
              </p>
              <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2rem, 3.2vw, 2.7rem)", color: "#222222" }}>{product.name}</h1>
              <p style={{ margin: 0, marginBottom: 20, color: "#6F675E", fontSize: 17, lineHeight: 1.8 }}>{product.description}</p>
              <p style={{ margin: 0, marginBottom: 24, fontSize: 28, fontWeight: 700, color: "#222222" }}>{formatCurrency(product.price)}</p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 10, color: "#6F675E", fontSize: 15, fontWeight: 600 }}>
                  <span>Quantity</span>
                  <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} style={{ border: "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 999, background: "#FFFFFF", color: "#222222", padding: "0.7rem 1rem" }}>
                    {[1, 2, 3, 4].map((value) => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
                <button type="button" onClick={() => addItem({ id: product.id, name: product.name, category: product.collection, price: product.price, image: product.images[0], quantity })} style={{ border: "0", borderRadius: 999, padding: "0.9rem 1.15rem", background: "#B98E5F", color: "#FFFFFF", fontWeight: 700, cursor: "pointer" }}>
                  Add to Cart
                </button>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, border: "1px solid rgba(34, 34, 34, 0.12)", padding: "0.9rem 1.15rem", color: "#222222", textDecoration: "none", fontWeight: 700 }}>
                  Continue Shopping
                </Link>
              </div>

              <div>
                <h2 style={{ margin: 0, marginBottom: 12, fontSize: 20, color: "#222222" }}>Details</h2>
                <ul style={{ margin: 0, paddingLeft: 18, color: "#6F675E", lineHeight: 1.8 }}>
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <h2 style={{ margin: 0, marginBottom: 20, fontSize: 24, color: "#222222" }}>Related Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
              {relatedProducts.map((item) => (
                <article key={item.id} style={{ borderRadius: 24, overflow: "hidden", background: "#FFFFFF", border: "1px solid rgba(34, 34, 34, 0.08)", boxShadow: "0 16px 40px rgba(34, 34, 34, 0.06)" }}>
                  <div style={{ position: "relative", aspectRatio: "4 / 5", background: "#EFE8DE" }}>
                    <Image src={item.images[0]} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <h3 style={{ margin: 0, marginBottom: 8, color: "#222222" }}>{item.name}</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#6F675E", fontSize: 15 }}>{formatCurrency(item.price)}</span>
                      <Link href={`/shop/kitchenware/${item.id}`} style={{ color: "#B98E5F", fontWeight: 700, textDecoration: "none" }}>View</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
