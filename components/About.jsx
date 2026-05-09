'use client';

import { useT } from '@/lib/i18n';
import Placeholder from './Placeholder';

export default function About() {
  const s = useT();

  return (
    <section className="section-pad" id="about" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num mono">
            <span />
            {s.about.num}
          </div>
          <h2 className="section-title">{s.about.title}</h2>
          <p className="section-aside">{s.about.aside}</p>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">
              {s.about.lead_a}
              <em>{s.about.lead_em}</em>
            </p>
            <div className="about-body">
              {s.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="reveal" data-stagger="1">
            <div className="principles">
              {s.about.principles.map(([n, t, v]) => (
                <div key={n} className="pr">
                  <span className="n mono">{n}</span>
                  <span className="t">{t}</span>
                  <span className="v mono">{v}</span>
                </div>
              ))}
            </div>
            <div
              className="about-images"
              style={{
                marginTop: '48px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <Placeholder label="team · workshop" code="ABOUT/01" dim="1200 × 1500" style={{ aspectRatio: '4/5' }} />
              <Placeholder
                label="behind the scenes"
                code="ABOUT/02"
                dim="1200 × 1500"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
