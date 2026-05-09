export default function Placeholder({ label = 'image', code = 'IMG', dim = '1600 × 1200', className = '', style = {} }) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span className="ph-corner mono">{code}</span>
      <span className="ph-label mono">{label}</span>
      <span className="ph-dim mono">{dim}</span>
    </div>
  );
}
