// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgeddkjw");
  if (state.succeeded) {
      return <p>Спасибі за замовлення!</p>;
  }
  return (
      <form className='form' onSubmit={handleSubmit}>
        <label className='form_label' htmlFor="name">
        Ваше им'я:
      </label>
      <input
        className='form_input'
        id="name"
        type="name" 
        name="name"
      />
       <label className='form_label' htmlFor="tel">
        Ваш телефон:
      </label>
      <input
      className='form_input'
        id="tel"
        type="phone" 
        name="phone"
      />
      <label className='form_label' htmlFor="email">
        Ваш email:
      </label>
      <input
      className='form_input'
        id="email"
        type="email" 
        name="email"
      />
      <div className='form_radio'>
        <input
            id="radio1"
            type="radio" 
            name="radio"
        />
        <label className='form_label' htmlFor="email">
        Платна доставка: <span id="delivery" className='price'>0</span>
      </label>
        <input
            id="radio2"
            type="radio" 
            name="radio"
        />
        <label className='form_label' htmlFor="email">
        Cамовивіз 
      </label>
      </div>
        
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className='form_label' htmlFor="email">
      Примітка до замовлення:
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='form_button' type="submit" disabled={state.submitting}>
        Відправити
      </button>
    </form>
  );
}

    

export default ContactForm;
