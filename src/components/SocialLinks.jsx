import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@iconify/react';

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      socialsJson(Socials: { elemMatch: { active: { eq: true } } }) {
        Socials {
          service
          url
          icon
        }
      }
    }
  `);
  const { socialsJson } = data;
  const li = socialsJson.Socials.map((social) => {
    return (
      <li key={`socialLink-${social.service}`}>
        <a href={social.url} className='icon'>
          <Icon className='text-3xl' icon={social.icon.toLowerCase()} />
          <span className='label'>{social.service}</span>
        </a>
      </li>
    );
  });
  return <ul className='icons'>{li}</ul>;
};

export default SocialLinks;
