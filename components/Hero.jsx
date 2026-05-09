'use client';

import { useT } from '@/lib/i18n';
import { useCounter, useInView } from '@/lib/hooks';
import Mag from './Mag';
import Placeholder from './Placeholder';

export default function Hero() {
  const s = useT();
  const [statsRef, statsInView] = useInView();
  const sitesBuilt = useCounter(120, '+', statsInView);
  const happy = useCounter(48, '', statsInView);
  const avg = useCounter(4.9, '', statsInView);

  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow reveal">
              <span className="pulse" />
              <span className="mono">{s.hero.available}</span>
            </div>

            <h1 className="reveal" data-stagger="1">
              {s.hero.h1_a}
              <em className="accent-block">{s.hero.h1_b}</em>
              {s.hero.h1_c}
              <br />
              {s.hero.h1_d}
              <em>{s.hero.h1_e}</em>
              {s.hero.h1_f}
            </h1>

            <div className="hero-side reveal" data-stagger="2" style={{ marginTop: '48px', maxWidth: '520px' }}>
              <p className="hero-meta">
                <strong>{s.hero.meta_lead}</strong>
                {s.hero.meta_body}
              </p>
              <div className="hero-ctas">
                <Mag strength={0.25}>
                  <a className="btn btn-primary" href="#contact">
                    {s.hero.cta1}
                  </a>
                </Mag>
                <Mag strength={0.25}>
                  <a className="btn btn-ghost" href="#work">
                    {s.hero.cta2}
                  </a>
                </Mag>
              </div>
            </div>
          </div>

          <div className="reveal" data-stagger="3">
            <Placeholder className="hero-card" label="hero · workspace" code="HERO/01" dim="2000 × 2500" />
          </div>
        </div>

        <div className="hero-stats reveal" ref={statsRef} data-stagger="4">
          <div className="stat">
            <div className="num mono">{sitesBuilt}</div>
            <div className="lbl">{s.hero.stat1}</div>
          </div>
          <div className="stat" style={{ paddingLeft: '24px' }}>
            <div className="num mono">{happy}</div>
            <div className="lbl">{s.hero.stat2}</div>
          </div>
          <div className="stat" style={{ paddingLeft: '24px' }}>
            <div className="num mono">{avg}/5</div>
            <div className="lbl">{s.hero.stat3}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
