import Container from "../ui/Container";

const items = [
  "Premium Quality",
  "Curated Collection",
  "Secure Payments",
  "Nationwide Delivery",
];

export default function TrustBar() {
  return (
    <section style={{ paddingBottom: 96 }}>
      <Container>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: "1.2rem 1rem",
                border: "1px solid rgba(34, 34, 34, 0.12)",
                borderRadius: 16,
                backgroundColor: "#FFFFFF",
                boxShadow: "0 10px 24px rgba(34, 34, 34, 0.05)",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 600,
                color: "#222222",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
