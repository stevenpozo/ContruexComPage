import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FinancingCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#ef8d4f] rounded-full py-6 md:py-8 px-8 md:px-16 flex flex-col items-center text-center gap-6 w-full"
        >
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              {t('financing.title')}
            </h3>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl">
              {t('financing.subtitle')}
            </p>
          </div>

          <Button
            size="lg"
            className="bg-construex-dark hover:bg-construex-dark/90 text-white rounded-full px-8 py-6 text-lg font-semibold whitespace-nowrap"
          >
            {t('financing.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancingCTA;
