import React from 'react';
import Layout from '../../../components/Layout/Layout';
import FormWrapper from "../components/FormWrapper";
import '../page/ContactPage.css';
import bgContact from '../../../../public/bgContact.svg';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="contact-page">
        <img src={bgContact} alt="Background" className="background-svg" />
        <FormWrapper />
      </div>
    </Layout>
  );
};

export default ContactPage;


