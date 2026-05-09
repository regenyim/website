'use client';

import { useState, useEffect } from 'react';
import { I18nContext, STRINGS } from '@/lib/i18n';
import { useReveal } from '@/lib/hooks';
import Nav from './Nav';
import Hero from './Hero';
import Marquee from './Marquee';
import Work from './Work';
import Services from './Services';
import Process from './Process';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function SiteInner() {
  useReveal();
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default function Site() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('hu');

  useEffect(() => {
    const saved = localStorage.getItem('ws-theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ws-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const strings = STRINGS[lang] || STRINGS.hu;

  return (
    <I18nContext.Provider value={strings}>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        lang={lang}
        onToggleLang={() => setLang((l) => (l === 'hu' ? 'en' : 'hu'))}
      />
      <main>
        <SiteInner />
      </main>
    </I18nContext.Provider>
  );
}
