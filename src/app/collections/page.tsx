import Link from "next/link";
import Container from "../../components/ui/Container";

export default function CollectionsPage() {
  return (
    <main>
      <section style={{ paddingTop: 112, paddingBottom: 96 }}>
        <Container>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: 0, marginBottom: 12, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>Collections</p>
            <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2rem, 3.4vw, 2.8rem)", color: "#222222" }}>Explore our curated collections</h1>
            <p style={{ margin: 0, marginBottom: 28, color: "#6F675E", lineHeight: 1.8 }}>Select a collection to continue your journey through the IKIS Home edit.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <Link href="/furniture" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#F7EBDD", color: "#222222", textDecoration: "none", fontWeight: 700 }}>Furniture</Link>
              <Link href="/decor" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#F7EBDD", color: "#222222", textDecoration: "none", fontWeight: 700 }}>Decor</Link>
              <Link href="/outdoor" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#F7EBDD", color: "#222222", textDecoration: "none", fontWeight: 700 }}>Outdoor</Link>
              <Link href="/shop/kitchenware" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Kitchenware</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
