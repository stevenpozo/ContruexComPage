import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-lg py-3 shadow-2xl'
            : 'bg-transparent pt-16 pb-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center transition-transform hover:scale-105 -ml-6 lg:-ml-12">
              <img
                src={logo}
                alt="Construex Logo"
                className="h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-10 -mr-6 lg:-mr-12">
              <a
                href="/"
                className="text-white text-[18px] font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
              >
                {t('nav.construexGlobal')}
              </a>
              <a
                href="#about"
                className="text-white text-[18px] font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
              >
                {t('nav.aboutUs')}
              </a>
              <a
                href="#contact"
                className="text-white text-[18px] font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
              >
                {t('nav.contactUs')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden -mr-6 lg:-mr-12 p-2 text-white hover:text-orange-500 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a
                  href="/"
                  onClick={closeMenu}
                  className="text-white text-2xl font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
                >
                  {t('nav.construexGlobal')}
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-white text-2xl font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
                >
                  {t('nav.aboutUs')}
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-white text-2xl font-bold tracking-wide hover:text-orange-500 transition-colors duration-300"
                >
                  {t('nav.contactUs')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;