import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ConfirmationModal from './ConfirmationModal';
import { ContactFormProps } from '../../../types/types';


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
  const handleMouseOver = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.boxShadow = '0 0 10px rgba(71, 55, 187, 0.8)';
    e.currentTarget.style.borderColor = '#4737bb';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.boxShadow = '0 0 10px rgba(71, 55, 187, 0.8)';
    e.currentTarget.style.borderColor = '#4737bb';
  };


  return (
    <>
      <div
        className="form-card"
        style={{
          width: '100%',
          maxWidth: '500px',
          margin: '150px 0 auto',
          background: '#fdfdfd',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        
        }}
      >
        <img
          src="/FemCodersClubLogo.png"
          alt="FemCoders Club Logo"
          className="form-logo"
          style={{ width: '100px', marginBottom: '1rem', marginLeft:'0' }}
        />
        <form
          ref={form}
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor="name"  style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#821ad4', textAlign:'left' }}>
            Nombre:
          </label>
          <input
            required
            type="text"
            aria-label="name"
            name="userName"
            placeholder=""
            className="input"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #4737bb',
              borderRadius: '5px',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label htmlFor="email"  style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#821ad4', textAlign:'left' }}>
            Correo:
          </label>
          <input
            required
            type="email"
            aria-label="correo"
            name="userEmail"
            placeholder=""
            className="input"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #4737bb',
              borderRadius: '5px',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label htmlFor="asunto" style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#821ad4', textAlign:'left' }}>
            Asunto:
          </label>
          <input
            required
            type="text"
            aria-label="asunto"
            name="asunto"
            placeholder=""
            className="input"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #4737bb',
              borderRadius: '5px',
              marginBottom: '1rem',
              fontSize: '1rem',
              
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <label htmlFor="message" style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#821ad4', textAlign:'left' }}>
            Mensaje:
          </label>
          <textarea
            required
            name="message"
            title="Message"
            className="textarea"
            style={{
              border: '1px solid #4737bb',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />

          <button
            type="submit"
            className="primaryBtn"
            style={{
              width: '200px',
              alignSelf: 'center',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4737bb',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ea4f33')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4737bb')}
          >
            Enviar
          </button>
        </form>
      </div>

      <ConfirmationModal isVisible={showMessage} onClose={() => setShowMessage(false)} />
    </>
  );
};

export default ContactForm;





