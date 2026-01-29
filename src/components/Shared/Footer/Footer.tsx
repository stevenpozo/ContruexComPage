import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';
import { externalLinks } from '@/lib/externalLinks';

// Placeholder for TikTok since it's not in lucide-react
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'X' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: TikTokIcon, href: externalLinks.socialMedia.tiktok, label: 'TikTok' },
  ];

  return (
    <footer id="contact" className="bg-construex-slate text-white py-16 px-6 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_0.9fr_0.9fr_0.9fr_0.9fr] gap-8 md:gap-16">
          {/* Columna 1: Logo y Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center space-x-2 mb-6">
              <img src={logo} alt="Construex Logo" className="w-50 h-10" />
            </div>
            {/* Offices */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[#a5d9e8] font-semibold">{t('footer.offices.cdmx.title')}</p>
                <p className="text-white/60 text-sm">{t('footer.cdmx')}</p>
              </div>
              <div>
                <p className="text-[#a5d9e8] font-semibold">{t('footer.offices.merida.title')}</p>
                <p className="text-white/60 text-sm">{t('footer.merida')}</p>
              </div>
              <div>
                <p className="text-[#a5d9e8] font-semibold">{t('footer.offices.quito.title')}</p>
                <p className="text-white/60 text-sm">{t('footer.quito')}</p>
              </div>
            </div>
            <a
              href="mailto:hola@construex.com"
              className="text-[#ef8d4f] hover:text-[#ef8d4f]/80 transition-colors"
            >
              {t('footer.email')}
            </a>
          </motion.div>

          {/* Columna 2: Compra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.buy.title')}
            </h3>
            {/* Sin items por ahora */}
          </motion.div>

          {/* Columna 3: Venta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.sell.title')}
            </h3>
            {/* Sin items por ahora */}
          </motion.div>

          {/* Columna 4: Conócenos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.knowUs.title')}
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.about')}
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.global')}
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.awards')}
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.news')}
              </a>
              <a href={externalLinks.socialMedia.blog} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.blog')}
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                {t('footer.knowUs.careers')}
              </a>
            </nav>
          </motion.div>

          {/* Columna 5: Contacto (Copyright y Redes Sociales) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.contact')}
            </h3>
            <p className="text-white/60 text-sm mb-6">
              {t('footer.copyright')}
            </p>
            {/* Redes Sociales */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-3 text-left">
                {t('footer.stayConnected')}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ef8d4f] transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
