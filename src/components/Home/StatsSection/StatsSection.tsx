import { useTranslation } from 'react-i18next';
import StatCard from './StatCard';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      targetValue: 3.6,
      unit: t('stats.billion'),
      descriptionHighlight: t('stats.gmvHighlight'),
      description: t('stats.gmv'),
      percentage: 100,
    },
    {
      targetValue: 1.2,
      unit: t('stats.billion'),
      descriptionHighlight: t('stats.creditApprovedHighlight'),
      description: t('stats.creditApproved'),
      percentage: 100,
    },
    {
      targetValue: 16.2,
      unit: t('stats.million'),
      descriptionHighlight: t('stats.transactionVolumeHighlight'),
      description: t('stats.transactionVolume'),
      percentage: 100,
    },
  ];

  return (
    <section className="relative">
      {/* Gray Background Section */}
      <div className="bg-construex-gray rounded-t-[3rem] pt-32 pb-20">
        {/* Stats Cards Container - Overlapping */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 -top-12 md:-top-24 z-20">
          <div className="flex flex-col items-center justify-center w-full px-4 md:flex-row md:justify-center md:px-0 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.description}
                {...stat}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
