'use client';

import { useState, useEffect } from 'react';
import { useT } from '@/lib/i18n';

export default function Contact() {
  const s = useT();
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    details: '',
    budget: s.contact.form.budgets[1],
    kind: [s.contact.form.kinds[0]],
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, budget: s.contact.form.budgets[1], kind: [s.contact.form.kinds[0]] }));
  }, [s.locale]);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleKind = (k) =>
    setForm((f) => ({
      ...f,
      kind: f.kind.includes(k) ? f.kind.filter((x) => x !== k) : [...f.kind, k],
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = s.contact.form.subject(form.name);
    const bk = s.contact.form.bodyKeys;
    const body = [
      `${bk.name}: ${form.name}`,
      `${bk.email}: ${form.email}`,
      `${bk.business}: ${form.business}`,
      `${bk.budget}: ${form.budget}`,
      `${bk.kind}: ${form.kind.join(', ')}`,
      '',
      form.details,
    ].join('\n');
    window.location.href = `mailto:regenyi2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      className="section-pad"
      id="contact"
      style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num mono">
            <span />
            {s.contact.num}
          </div>
          <h2 className="section-title">{s.contact.title}</h2>
          <p className="section-aside">{s.contact.aside}</p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p className="contact-lead">{s.contact.lead}</p>
            <div className="contact-info">
              <div className="info-row">
                <div className="lbl">{s.contact.labels.email}</div>
                <a href="mailto:regenyi2002@gmail.com" className="mono">
                  regenyi2002@gmail.com
                </a>
              </div>
              <div className="info-row">
                <div className="lbl">{s.contact.labels.office}</div>
                <span className="val">{s.contact.labels.officeVal}</span>
              </div>
              <div className="info-row">
                <div className="lbl">{s.contact.labels.hours}</div>
                <span className="val mono">{s.contact.labels.hoursVal}</span>
              </div>
              <div className="info-row">
                <div className="lbl">{s.contact.labels.follow}</div>
                <div className="social-row" style={{ marginTop: '8px' }}>
                  <a href="#">Instagram ↗</a>
                  <a href="#">Are.na ↗</a>
                  <a href="#">LinkedIn ↗</a>
                  <a href="#">Read.cv ↗</a>
                </div>
              </div>
            </div>
          </div>

          <form className="form reveal" data-stagger="1" onSubmit={onSubmit}>
            <div className="form-head">
              <span>
                <b>{s.contact.form.head}</b>
              </span>
              <span>FORM / 01</span>
            </div>

            <div className="field">
              <label htmlFor="name">{s.contact.form.f1}</label>
              <input
                id="name"
                type="text"
                placeholder={s.contact.form.f1p}
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">{s.contact.form.f2}</label>
              <input
                id="email"
                type="email"
                placeholder={s.contact.form.f2p}
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="biz">{s.contact.form.f3}</label>
              <input
                id="biz"
                type="text"
                placeholder={s.contact.form.f3p}
                value={form.business}
                onChange={(e) => update('business', e.target.value)}
              />
            </div>

            <div className="field">
              <label>{s.contact.form.f4}</label>
              <div className="field-group">
                {s.contact.form.kinds.map((k) => (
                  <span key={k} className={`chip ${form.kind.includes(k) ? 'on' : ''}`} onClick={() => toggleKind(k)}>
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{s.contact.form.f5}</label>
              <div className="field-group">
                {s.contact.form.budgets.map((k) => (
                  <span key={k} className={`chip ${form.budget === k ? 'on' : ''}`} onClick={() => update('budget', k)}>
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="field" style={{ borderBottom: 0 }}>
              <label htmlFor="details">{s.contact.form.f6}</label>
              <textarea
                id="details"
                rows={4}
                placeholder={s.contact.form.f6p}
                value={form.details}
                onChange={(e) => update('details', e.target.value)}
              />
            </div>

            <button type="submit">
              {sent ? s.contact.form.sending : s.contact.form.send}{' '}
              <span className="mono">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
