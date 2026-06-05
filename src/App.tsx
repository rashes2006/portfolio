import { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Sync dark class on html tag
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <main className="font-kanit bg-[#F4F7F9] dark:bg-[#0C0C0C] transition-colors duration-300" style={{ overflowX: 'clip' }}>
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection isDark={isDark} />
      <ContactSection />
    </main>
  );
}
