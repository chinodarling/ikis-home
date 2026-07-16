"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Container from "../../../../components/ui/Container";
import { useCart } from "../../../../components/shop/CartProvider";
import { formatCurrency } from "../../../../data/kitchenware";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [shippingMethod, setShippingMethod] = useState("Standard");
  const shippingCost = useMemo(() => (shippingMethod === "Express" ? 320 : 180), [shippingMethod]);
  const total = subtotal + shippingCost;

  return (
    <main>
      <section style={{ paddingTop: 96, paddingBottom: 72 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32 }}>
            <div>
              <h1 style={{ margin: 0, marginBottom: 24, fontSize: "clamp(2rem, 3vw, 2.7rem)", color: "#222222" }}>Checkout</h1>

              <div style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF", marginBottom: 20 }}>
                <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Customer Details</h2>
                <div style={{ display: "grid", gap: 12 }}>
                  <input placeholder="Full name" style={inputStyle} />
                  <input placeholder="Email address" style={inputStyle} />
                  <input placeholder="Phone number" style={inputStyle} />
                </div>
              </div>

              <div style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF", marginBottom: 20 }}>
                <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Delivery Address</h2>
                <div style={{ display: "grid", gap: 12 }}>
                  <input placeholder="Address line 1" style={inputStyle} />
                  <input placeholder="Address line 2" style={inputStyle} />
                  <input placeholder="City" style={inputStyle} />
                  <input placeholder="Postal code" style={inputStyle} />
                </div>
              </div>

              <div style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF" }}>
                <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Shipping Method</h2>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {(["Standard", "Express"] as const).map((method) => (
                    <button key={method} type="button" onClick={() => setShippingMethod(method)} style={{ border: shippingMethod === method ? "1px solid #B98E5F" : "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 999, background: shippingMethod === method ? "#F7EBDD" : "#FFFFFF", color: "#222222", padding: "0.8rem 1rem", fontWeight: 700, cursor: "pointer" }}>
                      {method} {method === "Express" ? "R320" : "R180"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF", height: "fit-content" }}>
              <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Order Summary</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                {items.map((item) => (
                  <div key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <span style={{ color: "#6F675E" }}>{item.name} × {item.quantity}</span>
                    <span style={{ color: "#222222", fontWeight: 700 }}>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(34, 34, 34, 0.08)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Shipping</span><span>{formatCurrency(shippingCost)}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 18 }}><span>Total</span><span>{formatCurrency(total)}</span></div>
              </div>
              <Link href="/shop/kitchenware/payment" style={{ display: "inline-flex", justifyContent: "center", width: "100%", marginTop: 20, borderRadius: 999, padding: "0.95rem 1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                Continue to Payment
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(34, 34, 34, 0.12)",
  borderRadius: 999,
  padding: "0.8rem 1rem",
  color: "#222222",
  background: "#FFFFFF",
};
