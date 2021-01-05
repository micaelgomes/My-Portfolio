import React, { useEffect } from 'react';
import GlobaStyle from '../styles/global';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

interface RequestDTO {
  file: { childImageSharp: { fixed: any } };
}

const IndexPage: React.FC = () => {
  const data = useStaticQuery<RequestDTO>(graphql`
    query getImageHeader {
      file(relativePath: { eq: "boy.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
          window.pageYOffset <= showcaseSection.offsetHeight + 1100
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
      <Helmet title="Micael Gomes" defer={false} />

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
          <button
            data-sal="zoom-in"
            data-sal-delay="600"
            data-sal-easing="easeOutExpo"
            onClick={() => alert('PDF não adcionado!')}
          >
            Download CV
          </button>
        </div>

        <Img fixed={data.file.childImageSharp.fixed} alt="boy drawing" />
      </Header>

      <Body />

      <Footer />
    </>
  );
};

export default IndexPage;
