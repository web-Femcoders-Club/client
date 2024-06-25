import React from 'react';
import ContactForm from './ContactForm';
import './FormWrapper.css';

const FormWrapper: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center py-[100px] gap-8 px-[30px]'>
      <div className='flex flex-col items-center gap-5 text-container'>
        <h2 className="text-primary text-4xl font-semibold text-center leading-10 max-w-[550px]">
          ¿Te gustaría ser parte de <span className='text-tertiary font-bold md:text-6xl text-5xl'>femCoders Club?</span>
        </h2>
        <h3 className='text-primary text-3xl font-semibold'>¿Tienes una duda? </h3>
        <p className='text-center max-w-[500px] heading5'>
        Si tienes alguna pregunta, completa este formulario y <span>nos pondremos en contacto contigo lo antes posible.</span>
        </p>
      </div>
      <div className="left-aligned">
        <ContactForm recipientEmail="info@femcodersclub.com" />
      </div>
    </div>
  );
}

export default FormWrapper;


