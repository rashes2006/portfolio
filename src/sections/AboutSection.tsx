import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const DECORATIVE_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon icon',
    className: 'hidden md:block md:w-[110px] lg:w-[160px] xl:w-[210px] absolute top-[6%] left-[2%] lg:left-[4%]',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'hidden md:block md:w-[90px] lg:w-[140px] xl:w-[180px] absolute bottom-[10%] left-[4%] lg:left-[8%]',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego icon',
    className: 'hidden md:block md:w-[110px] lg:w-[160px] xl:w-[210px] absolute top-[6%] right-[2%] lg:right-[4%]',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group',
    className: 'hidden md:block md:w-[110px] lg:w-[150px] xl:w-[220px] absolute bottom-[10%] right-[4%] lg:right-[8%]',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
];

const ABOUT_TEXT =
  "I'm a web developer and student at Scaler who loves learning about technology and building things. With a strong foundation in mathematics and programming, i focus on crafting responsive, modern web projects. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#F4F7F9] dark:bg-[#0C0C0C] text-[#0C0C0C] dark:text-[#D7E2EA] transition-colors duration-300"
    >
      {/* Decorative 3D images (Ambient Floating + Interactive Hover) */}
      {DECORATIVE_IMAGES.map((img, i) => (
        <FadeIn key={img.alt} {...img.fadeProps} className={img.className}>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, i % 2 === 0 ? 3 : -3, 0],
            }}
            transition={{
              duration: 4.5 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto cursor-pointer"
              whileHover={{
                scale: 1.22,
                rotate: i % 2 === 0 ? 12 : -12,
                filter: 'drop-shadow(0 20px 40px rgba(187,204,215,0.45))',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 12 }}
              loading="lazy"
            />
          </motion.div>
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="flex flex-col items-center z-10">
        {/* Heading — scales and glows on hover */}
        <FadeIn delay={0} y={40}>
          <motion.h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center cursor-default select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 35px rgba(187,204,215,0.45)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            About me
          </motion.h2>
        </FadeIn>

        {/* Gap */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#0C0C0C] dark:text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Gap */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
