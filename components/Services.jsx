'use client';

import { useT } from '@/lib/i18n';

export default function Services() {
  const s = useT();

  return (
    <section className="section-pad" id="services" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num mono">
            <span />
            {s.services.num}
          </div>
          <h2 className="section-title">{s.services.title}</h2>
          <p className="section-aside">{s.services.aside}</p>
        </div>
      </div>

      <div className="container">
        <div className="services">
          {s.services.items.map((sv, i) => (
            <div key={sv.num} className="service reveal" data-stagger={Math.min(i + 1, 4)}>
              <div>
                <span className="svc-num mono">{sv.num}</span>
                <h3 style={{ marginTop: '24px' }}>{sv.title}</h3>
                <p>{sv.body}</p>
              </div>
              <ul className="svc-list">
                {sv.list.map((x, j) => (
                  <li key={j} className="mono">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
