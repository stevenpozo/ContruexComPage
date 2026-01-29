import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface CountryListProps {
  activeCountry: string | null;
  setActiveCountry: (country: string | null) => void;
}

const CountryList = ({ activeCountry, setActiveCountry }: CountryListProps) => {
  const { t } = useTranslation();

  const countryLinks: Record<string, string> = {
    mexico: 'https://www.construex.com.mx/',
    ecuador: 'https://www.construex.com.ec/',
    chile: 'https://www.construex.cl/',
    guatemala: 'https://www.construex.gt/',
    bolivia: 'https://www.construex.com.bo/',
    panama: 'https://www.construex.com.pa/',
    costarica: 'https://www.construex.cr/',
    colombia: 'https://www.construex.co/',
    peru: 'https://www.construex.com.pe/',
    argentina: 'https://www.construex.com.ar/',
    uruguay: 'https://www.construex.uy/',
    paraguay: 'https://www.construex.com.py/',
    elsalvador: 'https://www.construex.com.sv/',
    // brazil: not yet
  };

  const countries = [
    { id: 'mexico', name: t('countries.mexico') },
    { id: 'brazil', name: t('countries.brazil') },
    { id: 'ecuador', name: t('countries.ecuador') },
    { id: 'chile', name: t('countries.chile') },
    { id: 'guatemala', name: t('countries.guatemala') },
    { id: 'bolivia', name: t('countries.bolivia') },
    { id: 'panama', name: t('countries.panama') },
    { id: 'costarica', name: t('countries.costarica') },
    { id: 'colombia', name: t('countries.colombia') },
    { id: 'peru', name: t('countries.peru') },
    { id: 'argentina', name: t('countries.argentina') },
    { id: 'uruguay', name: t('countries.uruguay') },
    { id: 'paraguay', name: t('countries.paraguay') },
    { id: 'elsalvador', name: t('countries.elsalvador') },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
      {countries.map((country, index) => (
        <span key={country.id} className="flex items-center">
          <motion.a
            href={countryLinks[country.id] || '#'}
            target={countryLinks[country.id] ? '_blank' : '_self'}
            rel={countryLinks[country.id] ? 'noopener noreferrer' : undefined}
            onMouseEnter={() => setActiveCountry(country.id)}
            onMouseLeave={() => setActiveCountry(null)}
            className={`country-item text-base md:text-lg font-medium transition-colors duration-200 cursor-pointer ${
              activeCountry === country.id ? 'text-primary' : 'text-white/80 hover:text-primary'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {country.name}
          </motion.a>
          {index < countries.length - 1 && (
            <span className="text-[#e3660d]/40 mx-2">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default CountryList;
