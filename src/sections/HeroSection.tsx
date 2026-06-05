import { useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import CursorTrackingAvatar from '../components/CursorTrackingAvatar';

const NAV_LINKS = ['About', 'Projects', 'Contact'];

interface HeroSectionProps {
  isFlashlight: boolean;
  toggleFlashlight: () => void;
}

export default function HeroSection({ isFlashlight, toggleFlashlight }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const updateSpotlight = (clientX: number, clientY: number) => {
      const rect = hero.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateSpotlight(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      updateSpotlight(e.touches[0].clientX, e.touches[0].clientY);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('touchmove', handleTouchMove, { passive: true });
    hero.addEventListener('touchstart', handleTouchMove, { passive: true });

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('touchmove', handleTouchMove);
      hero.removeEventListener('touchstart', handleTouchMove);
    };
  }, []);

  const showCursor = isFlashlight;

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`h-screen flex flex-col relative bg-[#0C0C0C] text-[#D7E2EA] ${
        showCursor ? 'cursor-none' : 'cursor-default'
      }`}
      style={{
        overflowX: 'clip',
        '--mouse-x': '50%',
        '--mouse-y': '45%',
      } as React.CSSProperties}
    >
      {/* Navbar — z-[40] (above masks) */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-[40]">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <a
            href="#hero"
            className="text-[#D7E2EA] font-semibold text-base sm:text-lg md:text-xl uppercase tracking-widest"
          >
            Rashes
          </a>

          <div className="flex items-center gap-5 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                  text-xs sm:text-sm md:text-base lg:text-[1.1rem]
                  transition-all duration-200 hover:opacity-75"
              >
                {link}
              </a>
            ))}

            <button
              onClick={toggleFlashlight}
              className="p-2 rounded-full border border-white/10 text-[#D7E2EA] bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              title={isFlashlight ? 'Turn on room light' : 'Turn off room light'}
              aria-label="Toggle flashlight effect"
            >
              {isFlashlight ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Spacer to push content apart */}
      <div className="flex-1 relative z-0" />

      {/* Hero Heading — z-0 (hidden in dark, revealed by spotlight) */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden relative z-0">
        <h1
          className="hero-heading font-black uppercase tracking-tighter leading-[0.82] text-center w-full
            px-3 md:px-4 whitespace-normal sm:whitespace-nowrap"
          style={{ fontSize: 'clamp(2.8rem, 13vw, 18rem)', letterSpacing: '-0.05em' }}
        >
          Hi, i&apos;m rashes
        </h1>
      </FadeIn>

      {/* Spacer */}
      <div className="flex-1 relative z-0" />

      {/* Bottom bar — z-0 (hidden in dark, revealed by spotlight) */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[150px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.72rem, 1.4vw, 1.5rem)' }}
          >
            a web developer driven by crafting clean, interactive, and high-performance websites
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Spotlight Flashlight Mask Overlay — z-10 (hides everything at z-0 except in spotlight circle, active only in Flashlight Mode) */}
      {isFlashlight && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'radial-gradient(circle var(--spotlight-radius) at var(--mouse-x) var(--mouse-y), transparent 0%, rgba(235, 70, 10, 0.08) 60%, rgba(12, 12, 12, 1) 75%)',
          }}
        />
      )}

      {/* 3D Face — z-20 (always visible above the mask) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-20
          w-[200px] sm:w-[280px] md:w-[380px] lg:w-[440px]
          bottom-0 sm:bottom-[-20px]
          pointer-events-none sm:pointer-events-auto"
      >
        <CursorTrackingAvatar
          src="/avatar3d.png"
          alt="Rashes 3D Avatar Face"
          className="w-full"
        />
      </FadeIn>

      {/* Custom Vector Flashlight & Volumetric Beam Cursor — z-30 (visible in flashlight mode) */}
      {showCursor && (
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute pointer-events-none select-none z-30 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] block"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            transform: 'translate(-13.33%, -13.33%)', // Mathematically aligns bezel center (40, 40) at any scale factor
            willChange: 'transform',
          }}
        >
          <defs>
            {/* Gradient for the volumetric light beam cone */}
            <linearGradient id="beamGrad" x1="40" y1="40" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF5C3" stopOpacity="0.45" />
              <stop offset="35%" stopColor="#FF9E1B" stopOpacity="0.22" />
              <stop offset="75%" stopColor="#EB3205" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#0C0C0C" stopOpacity="0" />
            </linearGradient>

            {/* Soft glow filter for the beam to make it look volumetric */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
            </filter>
          </defs>

          {/* Volumetric Light Beam Cone */}
          <path
            d="M 40 40 L 260 130 A 90 90 0 0 1 130 260 Z"
            fill="url(#beamGrad)"
            filter="url(#softGlow)"
          />

          {/* Flashlight body group (tilted -45deg pointing down-right) */}
          <g transform="translate(40, 40) rotate(-45)">
            {/* Handle */}
            <rect x="-6" y="-36" width="12" height="28" rx="2" fill="#1A1C20" stroke="#3A3D46" strokeWidth="1.5" />
            {/* Grip grooves */}
            <line x1="-4" y1="-28" x2="4" y2="-28" stroke="#2D3039" strokeWidth="1.5" />
            <line x1="-4" y1="-22" x2="4" y2="-22" stroke="#2D3039" strokeWidth="1.5" />
            <line x1="-4" y1="-16" x2="4" y2="-16" stroke="#2D3039" strokeWidth="1.5" />
            {/* Bezel Connection */}
            <path d="M -6 -8 L 6 -8 L 10 0 L -10 0 Z" fill="#2E3138" stroke="#3A3D46" strokeWidth="1.5" />
            {/* Bezel lens face */}
            <ellipse cx="0" cy="0" rx="10" ry="3" fill="#FFF5C3" />
            <ellipse cx="0" cy="0" rx="10" ry="3" fill="none" stroke="#5A5E6B" strokeWidth="1.5" />
            {/* Switch button */}
            <rect x="-2.5" y="-23" width="5" height="5" rx="1" fill="#EB3205" />
          </g>
        </svg>
      )}
    </section>
  );
}
