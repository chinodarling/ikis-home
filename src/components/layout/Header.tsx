import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Furniture", href: "/furniture" },
  { label: "Decor", href: "/decor" },
  { label: "Kitchenware", href: "/shop/kitchenware" },
  { label: "IKIS Kids", href: "/ikis-kids" },
];
export default function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Logo />
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/shop">
          <Button variant="secondary" className="site-header__action">
            Shop now
          </Button>
        </Link>
      </Container>
    </header>
  );
}
