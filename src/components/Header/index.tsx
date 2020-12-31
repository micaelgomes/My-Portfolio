import React, { useState } from 'react';
import * as S from './styled';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { UilArrowRight } from '@iconscout/react-unicons';

// import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Header: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const toogleOpened = () => setOpened(!opened);

  const logo = useStaticQuery(graphql`
    query getLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  const getLocalWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        return '100%';
      } else {
        return 500;
      }
    }
  };

  return (
    <>
      <S.OverlaySidebar open={opened} onClick={toogleOpened} />

      <S.NavbarMain>
        <div id={'logo'}>
          <Img fixed={logo.file.childImageSharp.fixed} alt="logo" />
        </div>

        <button onClick={toogleOpened}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </S.NavbarMain>

      <S.HeaderWrapper>{children}</S.HeaderWrapper>

      <S.Sidebar
        open={opened}
        width={getLocalWidth()}
        right={true}
        overlayColor={'transparent'}
        onChange={toogleOpened}
      >
        <div>
          <button onClick={toogleOpened}>
            <UilArrowRight size={56} color="#f2f2f2" />
          </button>
        </div>

        <ul>
          <li>
            <AniLink cover to="/about" direction="left" duration={1} bg="#8fa842">
              sobre
            </AniLink>
          </li>
          <li>
            <a>skills</a>
          </li>
          <li>
            <a>contato</a>
          </li>
        </ul>
      </S.Sidebar>
    </>
  );
};

export default Header;
