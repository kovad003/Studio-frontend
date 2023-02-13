import React from 'react'
import SocialIcon from './SocialIcon';
import styled from 'styled-components';

const Social = ({
  facebook = 'https://facebook.com/dave',
  twitter = 'https://twitter.com/dave',
  email = 'dave@studio.com',
  instagram = 'https://instagram.com/dave',
  youtube = 'https://youtube.com/dave' }) => {

  return (
    <StyledSocial>
      <div className='social' >
        {facebook && <SocialIcon url={facebook} type={'facebook'} />}
        {twitter && <SocialIcon url={twitter} type={'twitter'} />}
        {email && <SocialIcon url={email} type={'email'} />}
        {instagram && <SocialIcon url={instagram} type={'instagram'} />}
        {youtube && <SocialIcon url={instagram} type={'youtube'} />}
      </div>
    </StyledSocial>
  );
};

const StyledSocial = styled.section`
  .social {
    display: flex;
		min-width: 300px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
  }
`

export default Social