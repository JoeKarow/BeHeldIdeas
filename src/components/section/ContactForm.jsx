import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="wrapper special fade">
      <div className="container">
        <form name="contact" netlify-honeypot="sweet" data-netlify="true">
          <div className="row md:pt-5">
            <div className="col-6 col-12-mobile hidden">
              <input
                type="text"
                name="sweet"
                placeholder="Don't fill this out if you're a real person."
              />
            </div>
            <div className="col-6 col-12-mobile">
              <input
                enterKeyHint="next"
                autoComplete="name"
                required
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-mobile">
              <input
                enterKeyHint="next"
                autoComplete="email"
                required
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="col-12 md:py-5">
              <textarea name="message" required placeholder="Message" />
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
