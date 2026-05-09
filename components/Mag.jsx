'use client';

import { useRef } from 'react';

export default function Mag({ children, strength = 0.35, className = '', ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  return (
    <span
      ref={ref}
      className={`mag ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
      {...rest}
    >
      {children}
    </span>
  );
}
