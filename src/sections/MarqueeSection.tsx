import { useRef, useEffect, useState } from 'react';

/* ── Relevant developer / tech GIFs for the marquee ── */
const GIFS = [
  // Coding & programming
  'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',   // guy coding
  'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif',         // matrix code
  'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif',    // girl coding
  'https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif',     // coding screen
  'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',     // typing fast
  'https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif',    // web dev
  'https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif',    // coding cat
  'https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif',    // github
  'https://media.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif',    // react logo
  'https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif',    // developer
  // AI & tech
  'https://media.giphy.com/media/IedrY2VP5IO5ivkQPD/giphy.gif',    // AI brain
  'https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif',    // tech circuit
  'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',   // rocket launch
  'https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif',    // data viz
  'https://media.giphy.com/media/SS8CV2LO2A1NgoQIh1/giphy.gif',   // creative coding
  'https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif',   // space tech
  'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif',   // javascript
  'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif',   // html css js
  'https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif',   // node.js
  'https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif',   // react dev
];

const ROW1 = GIFS.slice(0, 10);
const ROW2 = GIFS.slice(10);

// Triple each row for seamless infinite scrolling
const ROW1_TRIPLED = [...ROW1, ...ROW1, ...ROW1];
const ROW2_TRIPLED = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const rawOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(rawOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves RIGHT */}
      <div className="flex gap-3 mb-3" style={{
        transform: `translateX(${offset - 200}px)`,
        willChange: 'transform',
      }}>
        {ROW1_TRIPLED.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[260px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[240px] rounded-2xl object-cover flex-shrink-0
              border border-[#2a2d35]/50"
          />
        ))}
      </div>

      {/* Row 2 - moves LEFT */}
      <div className="flex gap-3" style={{
        transform: `translateX(${-(offset - 200)}px)`,
        willChange: 'transform',
      }}>
        {ROW2_TRIPLED.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[260px] h-[170px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[240px] rounded-2xl object-cover flex-shrink-0
              border border-[#2a2d35]/50"
          />
        ))}
      </div>
    </section>
  );
}
