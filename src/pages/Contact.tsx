import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import ContactSectionFirst from '../components/Contact/ContactSectionFirst';
import ContactFormSection from '../components/Contact/ContactFormSection';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactSectionFirst />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Contact;
