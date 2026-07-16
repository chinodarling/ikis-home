import Link from "next/link";
import Container from "../../../../components/ui/Container";

export default function ConfirmationPage() {
  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 120 }}>
        <Container>
          <div style={{ maxWidth: 680, margin: "0 auto", border: "1px solid rgba(34, 34, 34, 0.08)", borderRadius: 28, padding: "2.2rem", background: "#FFFFFF", textAlign: "center" }}>
            <p style={{ margin: 0, marginBottom: 12, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>Order Confirmed</p>
            <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2rem, 3.2vw, 2.8rem)", color: "#222222" }}>Thank you for your order</h1>
            <p style={{ margin: 0, marginBottom: 16, color: "#6F675E", lineHeight: 1.8 }}>Your kitchenware selection is being prepared with care and will be on its way shortly.</p>
            <p style={{ margin: 0, marginBottom: 24, color: "#222222", fontWeight: 700 }}>Order number: IKIS-2407-001</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <Link href="/" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.95rem 1.1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>
                Continue Shopping
              </Link>
              <Link href="/" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.95rem 1.1rem", border: "1px solid rgba(34, 34, 34, 0.12)", color: "#222222", textDecoration: "none", fontWeight: 700 }}>
                Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
