import Link from "next/link";
import Container from "../ui/Container";
import { siteConfig } from "../../lib/site";

const footerLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">IKIS Home</p>
          <p className="site-footer__copy">{siteConfig.description}</p>
        </div>
        <div className="site-footer__links">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="site-footer__link">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
