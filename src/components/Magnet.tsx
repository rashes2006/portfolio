import { motion, useMotionValue } from 'framer-motion';
import { useRef, useCallback, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const transitionRef = useRef(inactiveTransition);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < maxDist) {
        transitionRef.current = activeTransition;
        x.set(distX / strength);
        y.set(distY / strength);
      } else {
        transitionRef.current = inactiveTransition;
        x.set(0);
        y.set(0);
      }
    },
    [padding, strength, activeTransition, inactiveTransition, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    transitionRef.current = inactiveTransition;
    x.set(0);
    y.set(0);
  }, [inactiveTransition, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
        willChange: 'transform',
        transition: transitionRef.current,
      }}
    >
      {children}
    </motion.div>
  );
}
