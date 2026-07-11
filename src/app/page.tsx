import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <FeaturedCategories />
    </main>
  );
}
