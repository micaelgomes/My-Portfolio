import React, { useEffect } from 'react';
import GlobaStyle from '../styles/global';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import { ImageHeader } from '../components/Header/styled';

const getLocalWidth = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 768) {
      return 1800;
    } else {
      return 1100;
    }
  }
};

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query getImageHeader {
      file(relativePath: { eq: "boy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  useEffect(() => {
    const toogleShowcaseColor = () => {
      if (typeof window !== 'undefined') {
        const showcaseSection = document.getElementById('showcase-section');

        if (
          window.pageYOffset >= showcaseSection.offsetTop - 200 &&
          window.pageYOffset <= showcaseSection.offsetHeight + getLocalWidth()
        ) {
          document.body.style.backgroundColor = '#8fa842';
        } else {
          document.body.style.backgroundColor = '#f2f2f2';
        }
      }
    };

    window.addEventListener('scroll', toogleShowcaseColor);

    return function cleanup() {
      window.removeEventListener('scroll', toogleShowcaseColor);
    };
  });

  return (
    <>
      <GlobaStyle />
      <Helmet>
        <title>Micael Gomes</title>
        <meta name="description" content="Desenvolvedor mobile &amp; web - Advogando em Desing da Experiência do usuário desde de 2018." />
      </Helmet>

      <Header>
        <div id="intro-text">
          <h1
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="easeOutExpo"
          >
            sou <b>Micael</b>
          </h1>
          <h4
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="easeOutExpo"
          >
            Desenvolvedor mobile &amp; web <span></span> Advogando em Desing da
            Experiência do usuário desde de 2018.
          </h4>
          <a
            href="/micaelgomes.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-sal="zoom-in"
            data-sal-delay="600"
            data-sal-easing="easeOutExpo"
            onClick={() =>
              alert('Com grandes poderes vêm grandes responsabilidades.')
            }
          >
            Download CV
          </a>
        </div>

        <ImageHeader
          fluid={data.file.childImageSharp.fluid}
          alt="boy drawing"
        />
      </Header>

      <Body />

      <Footer />
    </>
  );
};

export default IndexPage;
