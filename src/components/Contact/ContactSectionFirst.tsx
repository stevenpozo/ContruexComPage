import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import back1 from '@/assets/back1.jpg';

const ContactSectionFirst = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${back1})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('contact.title')}</h1>
        <p className="text-lg md:text-xl">{t('contact.subtitle')}</p>
      </motion.div>
    </section>
  );
};

export default ContactSectionFirst;