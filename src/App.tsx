import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [isFlashlight, setIsFlashlight] = useState(true);

  const toggleFlashlight = () => setIsFlashlight((prev) => !prev);

  return (
    <main className="font-kanit bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection isFlashlight={isFlashlight} toggleFlashlight={toggleFlashlight} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
