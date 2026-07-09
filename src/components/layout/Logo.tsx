import Link from "next/link";
import { siteConfig } from "../../lib/site";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={siteConfig.name}>
      <span className="logo-mark">I</span>
      <span className="logo-text">
        <span className="logo-name">{siteConfig.name}</span>
        <span className="logo-tag">Curated living</span>
      </span>
    </Link>
  );
}
