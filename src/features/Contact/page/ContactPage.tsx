import React from 'react';

import FormWrapper from "../components/FormWrapper";
import '../page/ContactPage.css';
import bgContact from '../../../../public/bgContact.svg';

const ContactPage: React.FC = () => {
  return (
    
      <div className="contact-page">
        <img src={bgContact} alt="Background" className="background-svg" />
        <FormWrapper />
      </div>
    
  );
};

export default ContactPage;


