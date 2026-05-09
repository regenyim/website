'use client';

import { useT } from '@/lib/i18n';
import Placeholder from './Placeholder';

const WORK_SPANS = ['span-7', 'span-5', 'span-12'];
const WORK_META = [
  { code: 'CASE/01', dim: '1800 × 1350', year: '2025' },
  { code: 'CASE/02', dim: '1400 × 1050', year: '2025' },
  { code: 'CASE/03', dim: '2400 × 1029', year: '2024' },
];

export default function Work() {
  const s = useT();

  return (
    <section className="section-pad" id="work">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num mono">
            <span />
            {s.work.num}
          </div>
          <h2 className="section-title">{s.work.title}</h2>
          <p className="section-aside">{s.work.aside}</p>
        </div>

        <div className="work-grid">
          {s.work.items.map((w, i) => (
            <a key={i} className={`work-item ${WORK_SPANS[i]} reveal`} data-stagger={i + 1} href="#contact">
              <Placeholder
                className="work-img"
                label={w.title.toLowerCase()}
                code={WORK_META[i].code}
                dim={WORK_META[i].dim}
              />
              <div className="work-meta">
                <div>
                  <h3>{w.title}</h3>
                  <p className="work-cat">{w.cat}</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span className="work-tag mono">{WORK_META[i].year}</span>
                  <span className="work-arrow mono">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
