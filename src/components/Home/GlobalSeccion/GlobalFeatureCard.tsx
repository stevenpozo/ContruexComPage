import { motion } from 'framer-motion';

interface FeatureCardProps {
  laptopImage: string;
  title: string;
  subtitle: string;
  bgColor: string;
  index: number;
  bottomImage?: string;
}

const GlobalFeatureCard = ({ laptopImage, title, subtitle, bgColor, index, bottomImage }: FeatureCardProps) => {
  return (
    <a href="#" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className={`feature-card bg-white ${bgColor} relative pt-12 md:pt-16 pb-0 flex flex-col h-full rounded-[2.5rem]`}
      >
      {/* Text Content */}
      <div className="px-6 py-1 md:py-2 flex flex-col flex-grow">
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black mb-1 md:mb-2 leading-tight">
          {title}
        </h3>
        <p
          className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-0 [&_b]:text-slate-600 [&_strong]:text-slate-600" 
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>

      {/* Bottom Image*/}
      <div className="w-full h-44 md:h-52 mt-auto overflow-hidden rounded-t-[2rem] rounded-b-[2.5rem]">
        <img
          src={bottomImage}
          alt="Construction team"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
    </a>
  );
};

export default GlobalFeatureCard;
