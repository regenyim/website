'use client';

import { useT } from '@/lib/i18n';

export default function Marquee() {
  const s = useT();
  const doubled = [...s.marquee, ...s.marquee];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
