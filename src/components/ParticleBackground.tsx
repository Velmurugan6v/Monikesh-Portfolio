import { useEffect, useRef } from "react";

/**
 * CSS-based Particle Background Component
 * Creates floating particles with pure CSS animations
 * for a mystical, nature-inspired atmosphere
 */
const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: hsl(${120 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${15 + Math.random() * 10}s infinite linear;
        opacity: ${0.3 + Math.random() * 0.4};
        pointer-events: none;
      `;
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default ParticleBackground;