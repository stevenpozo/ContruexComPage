import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  targetValue: number;
  unit: string;
  descriptionHighlight: string;
  description: string;
  percentage: number;
  delay?: number;
}

const StatCard = ({ targetValue, unit, descriptionHighlight, description, percentage, delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Creamos un ID único para el gradiente evitando espacios
  const gradientId = `gradient-${descriptionHighlight.replace(/\s+/g, '-').toLowerCase()}`;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="stat-card flex flex-col items-center text-center w-full max-w-[320px] md:max-w-[350px] bg-construex-dark rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl"
    >
      {/* Contenedor del SVG */}
      <div className="relative w-32 h-20 sm:w-40 sm:h-24 mb-6">
        <svg viewBox="0 0 160 90" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {/* Colores basados en tu imagen (Azul/Grisáceo brillante) */}
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>

          {/* Arco de Fondo */}
          <path
            d="M 10,80 A 70,70 0 0,1 150,80"
            fill="none"
            stroke="#2d3748"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Arco Animado con pathLength */}
          <motion.path
            d="M 10,80 A 70,70 0 0,1 150,80"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            strokeLinecap="round"
            // pathLength simplifica el dasharray/offset de 0 a 1
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: percentage / 100 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: delay + 0.3, ease: 'easeOut' }}
          />
        </svg>
      </div>

      <div className="mb-2">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          {count.toFixed(1)}
        </span>
      </div>

      <div className="mb-6">
        <span className="text-base sm:text-lg md:text-xl text-white font-medium">{unit}</span>
      </div>

      <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed max-w-[240px]">
        <span className="text-[#ef8d4f] font-bold">{descriptionHighlight}</span> {description}
      </p>
    </motion.div>
  );
};

export default StatCard;