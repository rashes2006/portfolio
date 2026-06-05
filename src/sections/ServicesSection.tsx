import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Building responsive, modern user interfaces using React, Tailwind CSS, TypeScript, and state-of-the-art tooling.',
  },
  {
    number: '02',
    name: 'Web Design',
    description:
      'Creating clean layouts with attention to typography, spacing, and modern visual aesthetics like glassmorphism and smooth animations.',
  },
  {
    number: '03',
    name: 'Problem Solving',
    description:
      'Applying strong mathematical and logical foundations to solve complex programming challenges and optimize algorithms.',
  },
  {
    number: '04',
    name: 'Backend Integration',
    description:
      'Integrating APIs, serverless databases, authentication rules, and dynamic endpoints to construct robust full-stack applications.',
  },
  {
    number: '05',
    name: 'Performance & SEO',
    description:
      'Ensuring pages load instantly, maintain high Core Web Vitals (LCP, INP), and are fully structured for optimal search engine accessibility.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      {/* Heading */}
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-10 sm:mb-16 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      {/* Service items */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className={`flex items-start gap-4 sm:gap-8 md:gap-12 py-5 sm:py-10 md:py-12 border-b border-black/15 ${
                i === 0 ? 'border-t border-t-black/15' : ''
              }`}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                style={{ fontSize: 'clamp(2.2rem, 8vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-1 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
