import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import styled from 'styled-components';

const SocialIcon = ({ url, type }) => {
  const Icon = () => {
    switch (type) {
      case "facebook": return <FaFacebook />;
      case "twitter": return <FaTwitter />;
      case "email": return <MdEmail />;
      case "instagram": return <FaInstagram />;
      case "youtube": return <FaYoutube />;

      default: return <p>Wrong value</p>;
    }
  }

  const A = (props) => {
    if (type !== 'email') {
      return (
        <a href={url}>
          {props.children}
        </a>
      );
    } else {
      return (
        <a href={'mailto:' + url}>
          {props.children}
        </a>
      );
    };
  };
  
  return (
    <StyledSocialIcon>
      <A>
        <IconContext.Provider value={{ className: 'social-icon' }} >
          <Icon />
        </IconContext.Provider>
      </A>
    </StyledSocialIcon>
  );
};

const StyledSocialIcon = styled.section`
  .social-icon {
    color: grey;
  }
  
  .social-icon:hover {
    color: lightgrey;
  }
`

export default SocialIcon