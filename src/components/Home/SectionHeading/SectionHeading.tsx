import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SectionHeading = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-construex-gray pt-60 pb-40 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center leading-tight tracking-tight"
        >
          {t('heading.line1')}{' '}
          <span className="capsule border-[#ef8d4f]">{t('heading.largest')}</span>{' '}
          <br />
          <span className="text-4xl font-normal">{t('heading.line2')}</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default SectionHeading;
