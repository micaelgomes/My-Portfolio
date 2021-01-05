import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Sidebar from '../Sidebar';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as S from './styled';

interface NavbarProps {
  opened: boolean;
  toogleOpened: any;
}

const getLocalWidth = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 768) {
      return 300;
    } else {
      return 500;
    }
  }
};

const Navbar: React.FC<NavbarProps> = ({ opened, toogleOpened }) => {
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

  return (
    <>
      <S.NavbarMain id="top">
        <div id={'logo'}>
          <AniLink paintDrip hex="#262626" to="/" duration={0.5}>
            <Img fixed={logo.file.childImageSharp.fixed} alt="logo" />
          </AniLink>
        </div>

        <button onClick={toogleOpened}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </S.NavbarMain>

      <Sidebar
        opened={opened}
        widthSidebar={getLocalWidth()}
        toogleOpened={toogleOpened}
      />
    </>
  );
};

export default Navbar;
