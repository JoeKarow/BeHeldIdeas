import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sublayout/Hero';
import ContactForm from '../components/section/ContactForm';

const test2 = () => {
  return (
    <Layout>
      <Hero
        heading='hello this is longertext'
        subheading='lkasdj kasdjf lkdsja lkasjdkl asdlksadjfoiawetj lkjfdglkasjfalkjfa'
        thisSectionId='banner'
        nextSectionId='two'
        img='/img/memoji.png'
        alt='img alt'
      />
      <ContactForm />
    </Layout>
  );
};

export default test2;
