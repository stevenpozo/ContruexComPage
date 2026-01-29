import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import homeVideo from '@/assets/home2.mp4';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen md:h-[120vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <video
          src={homeVideo}
          poster={logo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="video-overlay opacity-80 md:opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* The largest B2B Platform */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>{t('hero.title')}</span>
            <span className="border-2 border-[#ef8d4f] rounded-full px-3 sm:px-4 md:px-6 py-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl inline-block whitespace-nowrap text-[#ef8d4f] font-normal">
              {t('hero.b2bPlatform')}
            </span>
            <span>{t('hero.for')}</span>
          </h1>

          {/* Construction Procurement in Emerging Markets */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white/90 font-medium max-w-none mx-auto leading-tight tracking-wide text-center">
            {t('hero.subtitle')}
          </p>

          {/* We connect construction suppliers with clients in a simple, fast, and digital way. */}
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-normal max-w-none mx-auto mt-4 text-center">
            {t('hero.description')}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
