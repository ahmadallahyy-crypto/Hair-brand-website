import Link from "next/link";
import { navigation, studioInfo } from "../../lib/config/navigation";
import BrandStar from "../ui/BrandStar";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="wordmark footer-wordmark" href="/">
          <span className="wordmark-name">
            AURELIA <BrandStar />
          </span>
          <span>HAIR STUDIO</span>
        </Link>
        <p>
          {studioInfo.tagline}
          <br />
          A little more you.
        </p>
        <div className="footer-social" aria-label="Social profiles">
          <h2>FOLLOW AURELIA</h2>
          <p>Social links coming soon</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())}
            </Link>
          ))}
          <Link href="/booking">Appointments</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {studioInfo.name.toUpperCase()}</span>
        <Link href="#top">BACK TO TOP ↑</Link>
        <span>{studioInfo.location.toUpperCase().replace(",", " ·")}</span>
      </div>
    </footer>
  );
}