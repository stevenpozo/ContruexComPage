import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GlobalFeatureCard from './GlobalFeatureCard';
import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';
import laptop1 from '@/assets/laptop1.png'
import laptop2 from '@/assets/laptop2.png'
import laptop3 from '@/assets/laptop3.png'

const GlobalFeaturesGrid = () => {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  const [position, setPosition] = useState(0);

  const features = [
    {
      laptopImage: laptop1,
      title: t('features.global1.title'),
      subtitle: t('features.global1.subtitle'),
      bgColor: 'border-t-[#ef8d4f]',
      bottomImage: card1,
    },
    {
      laptopImage: laptop2,
      title: t('features.global2.title'),
      subtitle: t('features.global2.subtitle'),
      bgColor: 'border-t-[#a5d9e8]',
      bottomImage: card2,
    },
    {
      laptopImage: laptop3,
      title: t('features.global3.title'),
      subtitle: t('features.global3.subtitle'),
      bgColor: 'border-t-[#c0c0c0]',
      bottomImage: card3,
    },
    {
      laptopImage: laptop1,
      title: t('features.global4.title'),
      subtitle: t('features.global4.subtitle'),
      bgColor: 'border-t-[#ef8d4f]',
      bottomImage: card1,
    },
    {
      laptopImage: laptop2,
      title: t('features.global5.title'),
      subtitle: t('features.global5.subtitle'),
      bgColor: 'border-t-[#a5d9e8]',
      bottomImage: card2,
    },
  ];

  const duplicatedFeatures = [...features, ...features];
  const totalWidth = features.length * 352;

  useEffect(() => {
    let adjusted = position;
    while (adjusted <= -totalWidth) {
      adjusted += totalWidth;
    }
    while (adjusted > 0) {
      adjusted -= totalWidth;
    }
    if (adjusted !== position) {
      setPosition(adjusted);
    }
  }, [position, totalWidth]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition(prev => prev - 2);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const next = () => {
    setPosition(prev => prev - 352);
  };

  const prev = () => {
    setPosition(prev => prev + 352);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-12 md:py-16 px-4 mb-20" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 0%, #f4f4f4 15%, #f4f4f4 85%, transparent 100%)' }}>
      <div className="container mx-auto max-w-6xl text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-wider">Business Services</h2>
      </div>
      {/* Desktop: Animated marquee with manual control */}
      <div className="hidden md:block overflow-hidden relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          className="relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
          }}
        >
          <motion.div
            animate={{ x: position, transition: { type: 'spring', damping: 30, stiffness: 200 } }}
            className="flex w-max"
          >
            {duplicatedFeatures.map((feature, index) => (
              <div key={`global-${index}`} className="flex-shrink-0 w-80 mx-4">
                <GlobalFeatureCard {...feature} index={index % features.length} />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#ef8d4f] hover:shadow-xl transition-all z-50"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-[#ef8d4f] hover:shadow-xl transition-all z-50"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 hover:text-white" />
        </button>
      </div>
      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex w-max">
          {features.map((feature, index) => (
            <div key={`global-mobile-${index}`} className="flex-shrink-0 w-80 mx-4">
              <GlobalFeatureCard {...feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFeaturesGrid;
