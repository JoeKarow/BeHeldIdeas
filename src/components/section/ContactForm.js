import React from 'react';

const ContactForm = () => {
  return (
    <form name='contact' netlify-honeypot='sweet' data-netlify='true'>
      <div className='row md:pt-5'>
        <div className='col-6 col-12-mobile hidden'>
          <input
            type='text'
            name='sweet'
            placeholder="Don't fill this out if you're a real person."
          />
        </div>
        <div className='col-6 col-12-mobile'>
          <input
            enterkeyhint='next'
            autocomplete='name'
            required
            type='text'
            name='name'
            placeholder='Name'
          />
        </div>
        <div className='col-6 col-12-mobile'>
          <input
            enterkeyhint='next'
            autocomplete='email'
            required
            type='text'
            name='email'
            placeholder='Email'
          />
        </div>
        <div className='col-12 md:py-5'>
          <textarea name='message' required placeholder='Message'></textarea>
        </div>
        <div className='col-12'>
          <input type='submit' value='Send Message' />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
