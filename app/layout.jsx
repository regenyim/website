import './globals.css';

export const metadata = {
  title: {
    hu: 'Website Solutions — Weboldalak kisvállalkozásoknak',
    en: 'Website Solutions — Websites for small businesses',
    default: 'Website Solutions — Weboldalak kisvállalkozásoknak',
  },
  description: 'Egyedi, kézzel kódolt weboldalak fodrászoknak, éttermeknek, mestereknek és kis üzleteknek. Gyorsan tölt, könnyen frissíthető, megtalálható.',
};

const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('ws-theme');
      if (t) document.documentElement.setAttribute('data-theme', t);
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
