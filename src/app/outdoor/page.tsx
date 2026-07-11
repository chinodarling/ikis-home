import Link from "next/link";
import Container from "../../components/ui/Container";

export default function OutdoorPage() {
  return (
    <main>
      <section style={{ paddingTop: 112, paddingBottom: 96 }}>
        <Container>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: 0, marginBottom: 12, color: "#7A746C", fontSize: 13, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>Outdoor</p>
            <h1 style={{ margin: 0, marginBottom: 16, fontSize: "clamp(2rem, 3.4vw, 2.8rem)", color: "#222222" }}>Outdoor collection</h1>
            <p style={{ margin: 0, marginBottom: 28, color: "#6F675E", lineHeight: 1.8 }}>Thoughtful pieces for terraces, courtyards and garden living.</p>
            <Link href="/" style={{ display: "inline-flex", justifyContent: "center", borderRadius: 999, padding: "0.9rem 1.1rem", background: "#B98E5F", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Back to Home</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
