import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CountryList from './CountryList';
import InteractiveMap from './InteractiveMap';

const RegionalMarketplaces = () => {
  const { t } = useTranslation();
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Column - Info */}
      <div className="bg-construex-slate p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            {t('map.building')}
          </h2>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t('map.subtitle')}{' '}
            <span className="capsule">{t('map.marketplaces')}</span>{' '}
            {t('map.across')}
          </h3>

          <Card className="bg-construex-dark-card border-none p-6 rounded-2xl">
            <CountryList
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
            />
          </Card>
        </motion.div>
      </div>

      {/* Right Column - Map */}
      <div className="bg-construex-dark min-h-[400px] lg:min-h-full">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <InteractiveMap
            activeCountry={activeCountry}
            setActiveCountry={setActiveCountry}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalMarketplaces;
