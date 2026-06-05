import { Mail, Github, Linkedin, Phone, ArrowUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function ContactSection() {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="bg-[#F4F7F9] dark:bg-[#0C0C0C] text-[#0C0C0C] dark:text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        {/* Contact Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full mb-16 sm:mb-20 md:mb-24">
          {/* Email Card */}
          <FadeIn delay={0.1} y={30} className="h-full">
            <a
              href="mailto:rasheskumartripathy@gmail.com"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[30px] border border-black/10 dark:border-[#D7E2EA]/15 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/20 dark:hover:border-[#D7E2EA]/30 transition-all duration-300 h-full"
            >
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/[0.05] dark:bg-white/[0.05] text-[#0C0C0C] dark:text-[#D7E2EA] group-hover:scale-110 transition-all duration-300">
                <Mail className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-black/50 dark:text-[#D7E2EA]/50 text-[10px] sm:text-sm uppercase tracking-widest font-light transition-colors duration-300">Email Me</span>
                <span className="text-xs sm:text-base md:text-lg font-medium truncate sm:overflow-visible transition-colors duration-300 text-[#0C0C0C] dark:text-[#D7E2EA]">rasheskumartripathy@gmail.com</span>
              </div>
            </a>
          </FadeIn>

          {/* Phone Card */}
          <FadeIn delay={0.2} y={30} className="h-full">
            <a
              href="tel:+918144872884"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[30px] border border-black/10 dark:border-[#D7E2EA]/15 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/20 dark:hover:border-[#D7E2EA]/30 transition-all duration-300 h-full"
            >
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/[0.05] dark:bg-white/[0.05] text-[#0C0C0C] dark:text-[#D7E2EA] group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-black/50 dark:text-[#D7E2EA]/50 text-[10px] sm:text-sm uppercase tracking-widest font-light transition-colors duration-300">Call Me</span>
                <span className="text-xs sm:text-base md:text-lg font-medium truncate sm:overflow-visible transition-colors duration-300 text-[#0C0C0C] dark:text-[#D7E2EA]">+91 8144872884</span>
              </div>
            </a>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn delay={0.3} y={30} className="h-full">
            <a
              href="https://github.com/rashes2006"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[30px] border border-black/10 dark:border-[#D7E2EA]/15 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/20 dark:hover:border-[#D7E2EA]/30 transition-all duration-300 h-full"
            >
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/[0.05] dark:bg-white/[0.05] text-[#0C0C0C] dark:text-[#D7E2EA] group-hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-black/50 dark:text-[#D7E2EA]/50 text-[10px] sm:text-sm uppercase tracking-widest font-light transition-colors duration-300">GitHub</span>
                <span className="text-xs sm:text-base md:text-lg font-medium truncate sm:overflow-visible transition-colors duration-300 text-[#0C0C0C] dark:text-[#D7E2EA]">github.com/rashes2006</span>
              </div>
            </a>
          </FadeIn>

          {/* LinkedIn Card */}
          <FadeIn delay={0.4} y={30} className="h-full">
            <a
              href="https://www.linkedin.com/in/rashes-kumar-tripathy-705449327?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[30px] border border-black/10 dark:border-[#D7E2EA]/15 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/20 dark:hover:border-[#D7E2EA]/30 transition-all duration-300 h-full"
            >
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/[0.05] dark:bg-white/[0.05] text-[#0C0C0C] dark:text-[#D7E2EA] group-hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-black/50 dark:text-[#D7E2EA]/50 text-[10px] sm:text-sm uppercase tracking-widest font-light transition-colors duration-300">LinkedIn</span>
                <span className="text-xs sm:text-base md:text-lg font-medium truncate sm:overflow-visible transition-colors duration-300 text-[#0C0C0C] dark:text-[#D7E2EA]">Rashes Kumar Tripathy</span>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Scroll Up Button / Footer */}
        <FadeIn delay={0.5} y={20} className="flex flex-col items-center gap-4">
          <button
            onClick={handleScrollUp}
            className="p-4 rounded-full border-2 border-black dark:border-[#D7E2EA] text-black dark:text-[#D7E2EA] hover:bg-black/5 dark:hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <span className="text-black/45 dark:text-[#D7E2EA]/45 text-sm font-light tracking-wide uppercase mt-4 transition-colors duration-300">
            &copy; 2026 Rashes Kumar Tripathy. All rights reserved.
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
