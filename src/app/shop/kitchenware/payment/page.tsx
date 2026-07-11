"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../../../../components/ui/Container";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("PayFast");

  const methods = [
    { name: "Credit Card", label: "Visa, Mastercard, Amex" },
    { name: "EFT", label: "Bank transfer" },
    { name: "PayFast", label: "Instant EFT and card" },
    { name: "Apple Pay", label: "Placeholder" },
    { name: "Google Pay", label: "Placeholder" },
  ];

  return (
    <main>
      <section style={{ paddingTop: 96, paddingBottom: 72 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 32 }}>
            <div style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF" }}>
              <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2rem, 3vw, 2.7rem)", color: "#222222" }}>Payment</h1>
              <p style={{ margin: 0, marginBottom: 20, color: "#6F675E", lineHeight: 1.8 }}>Select your preferred payment method. This is a UI-only flow for the current production build.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {methods.map((method) => (
                  <button key={method.name} type="button" onClick={() => setSelectedMethod(method.name)} style={{ border: selectedMethod === method.name ? "1px solid #B98E5F" : "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 18, background: selectedMethod === method.name ? "#F7EBDD" : "#FFFFFF", padding: "1rem 1.1rem", textAlign: "left", cursor: "pointer" }}>
                    <div style={{ fontWeight: 700, color: "#222222" }}>{method.name}</div>
                    <div style={{ marginTop: 4, color: "#6F675E", fontSize: 14 }}>{method.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 24, padding: 24, background: "#FFFFFF" }}>
              <h2 style={{ margin: 0, marginBottom: 16, fontSize: 20, color: "#222222" }}>Selected Method</h2>
              <p style={{ margin: 0, marginBottom: 12, color: "#6F675E", lineHeight: 1.8 }}>{selectedMethod} is ready for the next phase of integration.</p>
              <div style={{ borderTop: "1px solid rgba(34, 34, 34, 0.08)", paddingTop: 16, marginTop: 16 }}>
                <Link href="/shop/kitchenware/confirmation" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.95rem 1.1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                  Complete Order
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
