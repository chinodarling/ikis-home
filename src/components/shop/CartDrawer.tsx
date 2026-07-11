"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatCurrency } from "../../data/kitchenware";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(34, 34, 34, 0.28)" }} onClick={closeCart}>
      <aside onClick={(event) => event.stopPropagation()} style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 420, maxWidth: "100%", background: "#FFFFFF", padding: "1.5rem", boxShadow: "-20px 0 50px rgba(34, 34, 34, 0.12)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 24, color: "#222222" }}>Your Cart</h2>
          <button type="button" onClick={closeCart} style={{ border: "0", background: "transparent", color: "#6F675E", cursor: "pointer", fontWeight: 700 }}>Close</button>
        </div>

        {items.length === 0 ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "#6F675E" }}>
            <p style={{ margin: 0, marginBottom: 12, fontSize: 18, color: "#222222" }}>Your cart is empty.</p>
            <p style={{ margin: 0, marginBottom: 20 }}>Add a few beautiful pieces to begin your kitchen edit.</p>
            <button type="button" onClick={closeCart} style={{ border: "0", borderRadius: 999, padding: "0.8rem 1rem", background: "#B98E5F", color: "#FFFFFF", cursor: "pointer" }}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {items.map((item) => (
                <div key={item.id} style={{ display: "flex", gap: 12, borderBottom: "1px solid rgba(34, 34, 34, 0.08)", paddingBottom: 16 }}>
                  <div style={{ position: "relative", width: 92, height: 92, borderRadius: 16, overflow: "hidden", background: "#EFE8DE" }}>
                    <Image src={item.image} alt={item.name} fill sizes="92px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <h3 style={{ margin: 0, fontSize: 16, color: "#222222" }}>{item.name}</h3>
                      <button type="button" onClick={() => removeItem(item.id)} style={{ border: "0", background: "transparent", color: "#6F675E", cursor: "pointer" }}>Remove</button>
                    </div>
                    <p style={{ margin: "6px 0", color: "#6F675E", fontSize: 14 }}>{item.category}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                      <select value={item.quantity} onChange={(event) => updateQuantity(item.id, Number(event.target.value))} style={{ border: "1px solid rgba(34, 34, 34, 0.12)", borderRadius: 999, background: "#FFFFFF", color: "#222222", padding: "0.4rem 0.7rem" }}>
                        {[1, 2, 3, 4].map((value) => <option key={value} value={value}>{value}</option>)}
                      </select>
                      <span style={{ fontWeight: 700, color: "#222222" }}>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(34, 34, 34, 0.08)", paddingTop: 16, marginTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ color: "#6F675E", fontSize: 16 }}>Subtotal</span>
                <span style={{ color: "#222222", fontWeight: 700, fontSize: 18 }}>{formatCurrency(subtotal)}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link href="/" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.8rem 1rem", background: "#F7EBDD", color: "#222222", textDecoration: "none", fontWeight: 700 }}>
                  Continue Shopping
                </Link>
                <Link href="/shop/kitchenware/checkout" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
