import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/sublayout/Hero'
import ContactForm from '../components/section/ContactForm'
import ShowcaseTop from '../components/sublayout/ShowcaseTop'
import FeatureRight from '../components/sublayout/featureRight'
import FeatureLeft from '../components/sublayout/FeatureLeft'

const test2 = () => {
  return (
    <Layout>
      <Hero
        heading="hello this is longertext"
        subheading="lkasdj kasdjf lkdsja lkasjdkl asdlksadjfoiawetj lkjfdglkasjfalkjfa"
        thisSectionId="banner"
        nextSectionId="two"
        img="/img/memoji.png"
        alt="img alt"
      />
      <ShowcaseTop
        thisSectionId="two"
        nextSectionId="three"
        coverImage="./images/pic03.jpg"
        coverImageAlt="hello"
        content1="<h2>hi</h2>"
        content2="this should be much longer than it actually is"
      />
      <FeatureRight
        thisSectionId="three"
        nextSectionId="four"
        coverImage="./images/pic04.jpg"
        coverImageAlt="alt text"
      />
      <FeatureLeft
        thisSectionId="four"
        nextSectionId="contact"
        coverImage="./images/pic04.jpg"
        coverImageAlt="alt text"
      />
      <ContactForm />
    </Layout>
  )
}

export default test2
