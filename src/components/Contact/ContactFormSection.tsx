import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactFormSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative -mt-24 z-20 px-4 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[2.5rem] shadow-xl p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8"
      >
        <div className="bg-[#ef8d4f] rounded-[2rem] p-8 text-white min-h-[500px] flex flex-col">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t('contact.infoTitle')}</h2>
            <div className="mt-20">
              <h3 className="text-2xl font-medium mb-4">{t('contact.country')}</h3>
              <p className="text-lg leading-relaxed mb-2">{t('contact.address')}</p>
              <p className="text-lg leading-relaxed">{t('contact.email')}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between min-h-[500px] mt-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-black mb-1">{t('contact.nameLabel')}</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-[#ef8d4f] outline-none py-2" />
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-1">{t('contact.emailLabel')}</label>
                <input type="email" className="w-full border-b border-gray-300 focus:border-[#ef8d4f] outline-none py-2" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">{t('contact.subjectLabel')}</label>
              <input type="text" className="w-full border-b border-gray-300 focus:border-[#ef8d4f] outline-none py-2" />
            </div>
            <div>
              <label className="block text-xs font-bold text-black mb-1">{t('contact.messageLabel')}</label>
              <textarea rows={4} className="w-full border-b border-gray-300 focus:border-[#ef8d4f] outline-none py-2 resize-none"></textarea>
            </div>
          </div>
          <button className="bg-[#ef8d4f] text-white px-6 py-3 rounded-full hover:opacity-90 transition self-start">{t('contact.sendButton')}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactFormSection;