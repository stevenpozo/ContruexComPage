import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import back1 from '@/assets/back1.jpg';

const ToolsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={back1}
          alt="Tools background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
          {t('tools.title')}{' '}
          <span className="capsule border-[#ef8d4f]">{t('tools.highlight')}</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default ToolsHero;
