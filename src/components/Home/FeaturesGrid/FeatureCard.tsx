import { motion } from 'framer-motion';

interface FeatureCardProps {
  laptopImage: string;
  title: string;
  subtitle: string;
  bgColor: string;
  index: number;
  bottomImage?: string;
}

const FeatureCard = ({ laptopImage, title, subtitle, bgColor, index, bottomImage }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`feature-card ${bgColor} relative pt-12 md:pt-16 pb-0 flex flex-col h-full rounded-[2.5rem]`}    >
      {/* Laptop Image */}
      <div className="absolute -top-14 md:-top-14 right-4 md:right-2 w-[52%] md:w-[55%] z-10">
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <img
            src={laptopImage}
            alt="Platform preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="px-6 py-1 md:py-2 flex flex-col">
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black mb-1 md:mb-2 leading-tight pr-[20%]">
          {title}
        </h3>
        <p
          className="text-white text-sm md:text-base lg:text-lg leading-relaxed pr-4 mb-0 [&_b]:text-white [&_strong]:text-white" 
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
    </motion.div >
  );
};

export default FeatureCard;
