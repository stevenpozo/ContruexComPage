import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';
import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';
import laptop1 from '@/assets/laptop1.png'
import laptop2 from '@/assets/laptop2.png'
import laptop3 from '@/assets/laptop3.png'

const FeaturesGrid = () => {
  const { t } = useTranslation();

  const features = [
    {
      laptopImage: laptop1,
      title: t('features.marketplace.title'),
      subtitle: t('features.marketplace.subtitle'),
      bgColor: 'bg-feature-orange',
      bottomImage: card1,
    },
    {
      laptopImage: laptop2,
      title: t('features.business.title'),
      subtitle: t('features.business.subtitle'),
      bgColor: 'bg-feature-blue',
      bottomImage: card2,
    },
    {
      laptopImage: laptop3,
      title: t('features.ai.title'),
      subtitle: t('features.ai.subtitle'),
      bgColor: 'bg-feature-silver',
      bottomImage: card3,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 pt-16 md:pt-20" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 0%, #f4f4f4 15%, #f4f4f4 85%, transparent 100%)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
