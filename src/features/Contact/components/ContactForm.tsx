import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ConfirmationModal from './ConfirmationModal';
import { ContactFormProps } from '../../../types/types';
import './ContactForm.css';

const ContactForm: React.FC<ContactFormProps> = ({ recipientEmail }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) {
      throw new Error("The form element is not found");
    }

    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_EMAILJS_KEY;

    const templateParams = {
      to_email: recipientEmail,
      userName: form.current['userName'].value,
      userEmail: form.current['userEmail'].value,
      asunto: form.current['asunto'].value,
      message: form.current['message'].value,
    };

    emailjs.send(serviceId, templateId, templateParams, apiKey)
      .then(result => {
        console.log(result.text);
        setShowMessage(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="form-card">
        <form ref={form} onSubmit={handleSubmit} action="#" method="POST" className="flex flex-col w-full h-fit p-8">
          <label htmlFor="name" className="label2">Nombre:</label>
          <input 
            required
            type="text"
            aria-label='name'
            name='userName'
            placeholder='Escribe tu nombre aquí'
            className="input mt-1 mb-4"
          />

          <label htmlFor="email" className="label2">Correo:</label>
          <input
            required
            type="email" 
            aria-label='correo'
            name='userEmail'
            placeholder='Ej: ejemplo@gmail.com'
            className="input mt-1 mb-4"
          />

          <label htmlFor="asunto" className="label2">Asunto:</label>
          <input
            required
            type="text"
            aria-label='asunto'
            name='asunto'
            placeholder='Ej: quiero ser voluntari@'
            className="input mt-1 mb-4"
          />

          <label htmlFor="message" className="label2">Mensaje:</label>
          <textarea 
            required 
            name='message'
            placeholder='Escribe tu mensaje aquí'
            className="textarea mt-1 mb-4"
          />

          <button type='submit' className="primaryBtn w-[200px] self-center mt-5">
            Enviar
          </button>
        </form>
      </div>
      
      <ConfirmationModal isVisible={showMessage} onClose={() => setShowMessage(false)} />
    </>
  );
};

export default ContactForm;




