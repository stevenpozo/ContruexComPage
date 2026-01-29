import { motion } from 'framer-motion';

const LogoMarquee = () => {
  // Placeholder logos - in production, these would be actual brand logos
  const logos = [
    'marca1.png',
    'marca2.png',
    'marca3.png',
    'marca4.png',
    'marca5.png',
    'marca6.png',
    'marca7.png',
    'marca8.png',
    'marca9.png',
    'marca10.png',
    'marca11.png',
    'marca12.png',
    'marca13.png',
    'marca14.png',
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="relative marquee-mask">
        <motion.div
          className="flex animate-marquee"
          style={{ width: 'fit-content' }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <div className="w-52 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={`/src/assets/${logo}`}
                  alt={logo.replace('.png', '')}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
