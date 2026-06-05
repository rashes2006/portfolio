import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROJECTS = [
  {
    number: '01',
    category: 'AI / Machine Learning',
    name: 'Hospital Triage RL',
    description:
      'Reinforcement Learning agent that learns to triage, prioritize, and assign hospital patients in real-time using OpenAI Gym-style environments.',
    tech: ['Python', 'PyTorch', 'OpenAI Gym', 'RL'],
    link: 'https://github.com/rashes2006/Hospital-Triage-RL-main',
    image: '/project-hospital-triage.png',
    color: '#1a1a2e',
  },
  {
    number: '02',
    category: 'Full Stack',
    name: 'Realtime Global Chat',
    description:
      'A real-time global messaging platform where users worldwide can chat instantly. Built with WebSockets for zero-latency communication.',
    tech: ['CSS', 'JavaScript', 'WebSockets', 'Vercel'],
    link: 'https://github.com/rashes2006/realtime-global-chatting',
    liveLink: 'https://realtime-global-chatting.vercel.app',
    image: '/project-realtime-chat.png',
    color: '#0f0f1a',
  },
  {
    number: '03',
    category: 'AI / DevOps',
    name: 'Bug Triage AI',
    description:
      'A real-world OpenEnv simulation where AI agents learn to triage, label, and assign software bug reports automatically with ML confidence scoring.',
    tech: ['Python', 'ML', 'NLP', 'OpenEnv'],
    link: 'https://github.com/rashes2006/bug-triage-env',
    image: '/project-bug-triage.png',
    color: '#12121a',
  },
  {
    number: '04',
    category: 'Web App',
    name: 'Budget Tracker',
    description:
      'A sleek personal finance dashboard to track expenses, set budgets, visualize spending patterns with interactive charts and category breakdowns.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Charts'],
    link: 'https://github.com/rashes2006/Budget-Tracker',
    image: '/project-budget-tracker.png',
    color: '#0d0d1a',
  },
];

/* ─── Individual Project Card ─── */
function ProjectCard({
  project,
  index,
  totalCards,
  isDark,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  totalCards: number;
  isDark: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const stickyTop = isMobile ? (45 + index * 12) : (70 + index * 24);

  // Track scroll progress of THIS card's container (the runway)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Scale down the card slightly as the NEXT card slides over it
  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky h-[100dvh] flex items-center justify-center px-2 sm:px-4 md:px-0"
      style={{
        // Stack offset: dynamically smaller on mobile/tablet to avoid screen overflow
        top: `${stickyTop}px`,
        // Later cards must stack on top of earlier ones
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          width: '100%',
        }}
      >
        <div
          className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px]
            border border-black/10 dark:border-[#2a2d35]
            overflow-hidden
            shadow-[0_8px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_60px_rgba(0,0,0,0.8)]
            transition-all duration-300"
          style={{ background: isDark ? project.color : '#FFFFFF' }}
        >
          {/* ── Top Info Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 p-4 sm:p-6 md:p-9 pb-3 sm:pb-5">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(2rem, 6vw, 90px)' }}
              >
                {project.number}
              </span>

              <div className="flex flex-col gap-0.5">
                <span className="text-black/50 dark:text-[#D7E2EA]/50 text-[9px] sm:text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300">
                  {project.category}
                </span>
                <span
                  className="text-black dark:text-[#D7E2EA] font-semibold uppercase tracking-wide transition-colors duration-300"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.8rem)' }}
                >
                  {project.name}
                </span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/30 dark:border-[#D7E2EA]/40 text-black dark:text-[#D7E2EA] font-medium uppercase tracking-wider
                  px-3.5 py-1.5 sm:px-6 sm:py-2
                  text-[10px] sm:text-xs md:text-sm
                  transition-all duration-300 hover:bg-black dark:hover:bg-[#D7E2EA] hover:text-white dark:hover:text-[#0C0C0C]"
              >
                GitHub
              </a>
              {'liveLink' in project && project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-[#1A1C20] to-[#5E6573] dark:from-[#646973] dark:to-[#BBCCD7] text-white dark:text-[#0C0C0C] font-medium uppercase tracking-wider
                    px-3.5 py-1.5 sm:px-6 sm:py-2
                    text-[10px] sm:text-xs md:text-sm
                    transition-opacity duration-300 hover:opacity-90 dark:hover:opacity-80"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* ── Main content area: description + image ── */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 px-4 sm:px-6 md:px-9 pb-4 sm:pb-6 md:pb-9">
            <div className="md:w-[35%] flex flex-col justify-between gap-3 md:pr-6 pb-2 md:pb-0">
              <p
                className="text-black/75 dark:text-[#D7E2EA]/70 font-light leading-relaxed transition-colors duration-300"
                style={{ fontSize: 'clamp(0.75rem, 1.1vw, 1rem)' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] sm:text-xs uppercase tracking-widest text-black/50 dark:text-[#D7E2EA]/50
                      border border-black/15 dark:border-[#D7E2EA]/20 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-[65%] overflow-hidden rounded-[16px] sm:rounded-[30px] md:rounded-[40px]">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover"
                style={{ minHeight: 'clamp(140px, 22vw, 420px)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Projects Section ─── */
export default function ProjectsSection({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="projects"
      className="bg-[#F4F7F9] dark:bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] transition-colors duration-300"
    >
      {/* Section heading */}
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      {/* Stacking cards — each card is in a 100vh tall scroll container */}
      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
