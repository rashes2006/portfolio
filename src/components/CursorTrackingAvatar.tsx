import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CursorTrackingAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * 3D character that tracks cursor movement — head tilts toward the mouse.
 */
export default function CursorTrackingAvatar({ src, alt, className = '' }: CursorTrackingAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Spring-animated rotation values for smooth head tracking
  const rotateX = useSpring(0, { stiffness: 60, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 60, damping: 20 });
  const eyeX = useSpring(0, { stiffness: 80, damping: 25 });
  const eyeY = useSpring(0, { stiffness: 80, damping: 25 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize mouse position relative to avatar center (-1 to 1)
      const normalizedX = (e.clientX - centerX) / (window.innerWidth / 2);
      const normalizedY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Clamp values
      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      // Head rotation: rotateY (left-right), rotateX (up-down, inverted)
      rotateY.set(clampedX * 18);
      rotateX.set(-clampedY * 12);

      // Subtle eye/pupil shift
      eyeX.set(clampedX * 6);
      eyeY.set(clampedY * 4);
    },
    [rotateX, rotateY, eyeX, eyeY]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length === 0 || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const touch = e.touches[0];
      const normalizedX = (touch.clientX - centerX) / (window.innerWidth / 2);
      const normalizedY = (touch.clientY - centerY) / (window.innerHeight / 2);

      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      rotateY.set(clampedX * 18);
      rotateX.set(-clampedY * 12);

      eyeX.set(clampedX * 6);
      eyeY.set(clampedY * 4);
    },
    [rotateX, rotateY, eyeX, eyeY]
  );

  const handleTouchEnd = useCallback(() => {
    rotateY.set(0);
    rotateX.set(0);
    eyeX.set(0);
    eyeY.set(0);
  }, [rotateX, rotateY, eyeX, eyeY]);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleTouchMove, handleTouchEnd]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={mounted ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow backdrop */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(235,70,10,0.4) 0%, transparent 70%)',
            transform: 'translateZ(-40px) scale(1.3)',
          }}
        />

        {/* Main avatar image */}
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto relative z-10 drop-shadow-[0_20px_60px_rgba(235,50,5,0.15)]"
          style={{
            x: eyeX,
            y: eyeY,
            filter: 'drop-shadow(0 0 35px rgba(235,50,5,0.08))',
          }}
          loading="eager"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
