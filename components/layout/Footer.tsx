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
        <p className="footer-tagline">
          {studioInfo.tagline}
          <br />
          A little more you.
        </p>
        <div className="footer-social">
          <h2>FOLLOW AURELIA</h2>
          <div className="footer-social-icons" role="group" aria-label="Social profiles">
            <span className="footer-social-icon" role="img" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" fill="currentColor" stroke="none" />
                <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" className="footer-social-knockout" />
              </svg>
            </span>
            <span className="footer-social-icon" role="img" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 4 14 16M19 4 5 20" />
              </svg>
            </span>
            <span className="footer-social-icon" role="img" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 7.3a2.5 2.5 0 0 0-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.5A2.5 2.5 0 0 0 3 7.3 26 26 0 0 0 2.5 12a26 26 0 0 0 .5 4.7 2.5 2.5 0 0 0 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.5a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .5-4.7 26 26 0 0 0-.5-4.7Z" fill="currentColor" stroke="none" />
                <path d="m10 9 5 3-5 3Z" className="footer-social-knockout" />
              </svg>
            </span>
            <span className="footer-social-icon" role="img" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h3l.5-3H14V8c0-.9.4-1.5 1.6-1.5H18V3.1c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.9V10H7.5v3h3v8Z" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="footer-social-icon" role="img" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="footer-social-icon-dot" cx="17.5" cy="6.5" r="1" />
              </svg>
            </span>
            <span className="footer-social-icon" role="img" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9a8.4 8.4 0 1 1 16-3.9Z" />
                <path d="M8.2 7.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4-.1.6.4.8 1 1.4 1.8 1.9.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.1.7-1.8.6-.6-.1-1.4-.3-2.4-.8a8.7 8.7 0 0 1-3.2-2.8c-.7-.9-1.1-1.9-1.1-2.7 0-.7.3-1.2.6-1.5Z" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </div>
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