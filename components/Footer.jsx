'use client';

import { useT } from '@/lib/i18n';

export default function Footer() {
  const s = useT();

  return (
    <footer>
      <div className="container">
        <div className="footer-mark">Website/<wbr />Solutions</div>
        <div className="footer-mark-mobile">
          <span className="footer-mark-mobile-abbr">W/S</span>
          <span className="footer-mark-mobile-name">Website · Solutions</span>
        </div>
        <div className="footer-cols">
          <div>
            <h5>{s.footer.cols.studio}</h5>
            <ul>
              {s.footer.studio.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
              <li style={{ marginTop: '12px' }}>
                <a href="mailto:regenyi2002@gmail.com">regenyi2002@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>{s.footer.cols.sitemap}</h5>
            <ul>
              <li><a href="#work">{s.nav.work}</a></li>
              <li><a href="#services">{s.nav.services}</a></li>
              <li><a href="#process">{s.nav.process}</a></li>
              <li><a href="#about">{s.nav.about}</a></li>
              <li><a href="#contact">{s.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h5>{s.footer.cols.connect}</h5>
            <ul>
              <li><a href="#">Instagram ↗</a></li>
              <li><a href="#">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div>
            <h5>{s.footer.cols.available}</h5>
            <ul>
              {s.footer.avail.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
              <li style={{ marginTop: '12px' }}>
                <a href="#contact">{s.footer.reserve}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{s.footer.copy}</span>
          <span>{s.footer.meta}</span>
        </div>
      </div>
    </footer>
  );
}
