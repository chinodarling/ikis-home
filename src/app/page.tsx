import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";

const luxuryHighlights = [
  {
    title: "Premium Quality",
    icon: "✨",
  },
  {
    title: "Curated Collection",
    icon: "✔",
  },
  {
    title: "Secure Payments",
    icon: "🔒",
  },
  {
    title: "Nationwide Delivery",
    icon: "📦",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-viewport">
        <Container className="hero-viewport__container">
          <div className="hero-content">
            <div className="hero-content__body">
              <p className="hero-eyebrow">CURATED HOME COLLECTION</p>
              <Heading as="h1" className="hero-headline">
                Beautifully Curated Living.
              </Heading>
              <p className="hero-description">
                Timeless pieces for everyday moments. Thoughtfully selected furniture, décor and accessories that bring warmth and effortless elegance to every room.
              </p>
              <div className="hero-actions">
                <Button>Shop Collection</Button>
                <Button variant="secondary">Explore Rooms</Button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image__frame" aria-label="Hero image - curated home collection" />
            </div>
          </div>
        </Container>
      </section>

      <section className="highlights-bar">
        <Container>
          <div className="highlights-grid">
            {luxuryHighlights.map((item) => (
              <div key={item.title} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <p className="highlight-label">{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
