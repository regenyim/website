'use client';

import { useState } from 'react';
import { useT } from '@/lib/i18n';

export default function Process() {
  const s = useT();
  const [active, setActive] = useState(0);
  const step = s.process.steps[active];

  return (
    <section
      className="section-pad"
      id="process"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num mono">
            <span />
            {s.process.num}
          </div>
          <h2 className="section-title">{s.process.title}</h2>
          <p className="section-aside">{s.process.aside}</p>
        </div>

        <div className="process-wrap">
          <div className="process-list reveal">
            {s.process.steps.map((st, i) => (
              <button key={st.n} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
                <span className="step-num">{st.n}</span>
                <span className="step-title">{st.title}</span>
                <span className="step-marker" />
              </button>
            ))}
          </div>

          <div className="process-panel reveal" data-stagger="1" key={active}>
            <div>
              <div className="panel-meta">
                <span>{s.process.stepLabel(step.n)}</span>
                <span>{step.dur}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
            <div className="deliverables">
              {step.deliver.map((d, i) => (
                <span key={i} className="mono">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
