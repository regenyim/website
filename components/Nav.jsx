'use client';

import { useState, useEffect } from 'react';
import { useT } from '@/lib/i18n';
import Mag from './Mag';

export default function Nav({ theme, onToggleTheme, lang, onToggleLang }) {
  const s = useT();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('work');

  const NAV = [
    { id: 'work', label: s.nav.work, num: '01' },
    { id: 'services', label: s.nav.services, num: '02' },
    { id: 'process', label: s.nav.process, num: '03' },
    { id: 'about', label: s.nav.about, num: '04' },
    { id: 'contact', label: s.nav.contact, num: '05' },
  ];

  useEffect(() => {
    const onScroll = () => {
      let cur = 'work';
      for (const l of NAV) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 120) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top" onClick={() => setOpen(false)}>
            <span className="mark">W/S</span>
            <b>Website Solutions</b>
            <small className="mono">{s.nav.est}</small>
          </a>

          <div className="nav-links">
            {NAV.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button
              className="theme-toggle mono"
              onClick={onToggleLang}
              aria-label="Language"
              style={{ fontSize: '10px', letterSpacing: '.12em' }}
            >
              {lang === 'hu' ? 'HU' : 'EN'}
            </button>
            <button className="theme-toggle mono" onClick={onToggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <Mag strength={0.3}>
              <a className="nav-cta" href="#contact">
                {s.nav.cta}
              </a>
            </Mag>
            <button
              className={`hamburger ${open ? 'open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label={s.nav.menu}
            >
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
            <span>{l.label}</span>
            <span className="num mono">{l.num}</span>
          </a>
        ))}
        <a className="mob-cta mono" href="#contact" onClick={() => setOpen(false)}>
          {s.nav.cta} →
        </a>
      </div>
    </>
  );
}
