import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const InvestorsSection = () => {
  const { t } = useTranslation();

  const investors = [
    '/src/assets/inversor1.png',
    '/src/assets/inversor2.png',
    '/src/assets/inversor3.png',
    '/src/assets/inversor4.png',
    '/src/assets/inversor5.png',
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-center text-foreground mb-20"
        >
          <span className="text-muted-foreground">{t('investors.title')}</span>
          <br />
          <span className="font-bold">{t('investors.subtitle')}</span>
        </motion.h2>
        <div className="flex flex-col items-center gap-8">
          {/* Row 1 - 3 logos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {investors.slice(0, 3).map((investor, index) => (
              <motion.div
                key={investor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-60 h-20 flex items-center justify-center"
              >
                <img
                  src={investor}
                  alt={`Investor ${index + 1}`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 2 logos centered */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {investors.slice(3).map((investor, index) => (
              <motion.div
                key={investor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                className="w-60 h-20 flex items-center justify-center"
              >
                <img
                  src={investor}
                  alt={`Investor ${index + 4}`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
