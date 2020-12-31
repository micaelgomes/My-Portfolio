import React, { useState, useEffect } from 'react';
import GlobaStyle from '../styles/global';
import Layout from '../components/Layout';
import * as S from '../components/Layout/styled';
import Header from '../components/Header';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';
import { UilChatBubbleUser } from '@iconscout/react-unicons';
import { UilFileUploadAlt } from '@iconscout/react-unicons';
import { UilBox } from '@iconscout/react-unicons';

import skills from '../content/skills';
import showcaseItems from '../content/showcase';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface RequestDTO {
  file: { childImageSharp: { fixed: any } };
  allRestApiUsersMicaelgoms: {
    edges: [
      {
        node: {
          id: string;
          avatar_url: string;
          name: string;
          login: string;
          public_gists: string;
          public_repos: string;
          html_url: string;
          bio: string;
          followers: string;
          following: string;
          location: string;
        };
      },
    ];
  };
  allRestApiUsersMicaelgomsRepos: {
    edges: [
      {
        node: {
          id: string;
          name: string;
          html_url: string;
          language: string;
          open_issues_count: string;
          description: string;
          stargazers_count: string;
        };
      },
    ];
  };
  allDribbbleShot: {
    edges: [
      {
        node: {
          id: string;
          title: string;
          url: string;
          tags: [];
          localCover: {
            childImageSharp: {
              fluid: any;
            };
          };
        };
      },
    ];
  };
}

// markup
const IndexPage: React.FC = () => {
  useEffect(() => {
    const toogleShowcaseColor = () => {
      if (typeof window !== 'undefined') {
        const showcaseSection = document.getElementById('showcase-section');
        console.log(
          showcaseSection.offsetHeight,
          showcaseSection.offsetTop,
          window.pageYOffset,
        );

        if (
          window.pageYOffset >= showcaseSection.offsetTop - 200 &&
          window.pageYOffset <= showcaseSection.offsetTop + 1800
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

  const data = useStaticQuery<RequestDTO>(graphql`
    query profileInfosAndGetImageHeader {
      file(relativePath: { eq: "boy.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      allRestApiUsersMicaelgoms {
        edges {
          node {
            id
            avatar_url
            name
            login
            public_gists
            public_repos
            html_url
            bio
            followers
            following
            location
          }
        }
      }
      allDribbbleShot {
        edges {
          node {
            id
            title
            url
            tags
            localCover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    swipeable: true,
    draggable: true,
    showDots: false,
    arrows: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 10,
      },
    },
    ssr: true,
    infinite: true,
    autoPlaySpeed: 3000,
    autoPlay: true,
    // autoPlay: this.props.deviceType !== "mobile" ? true : false,
    // keyBoardControl: true,
    // customTransition: "all .5",
    // transitionDuration: 1000,
    containerClass: 'carousel-container',
    removeArrowOnDeviceType: ['tablet', 'mobile'],
    // deviceType: this.props.deviceType,
    dotListClass: 'custom-dot-list-style',
    itemClass: 'carousel-item-padding-40-px',
    partialVisible: true,
  };

  data.allDribbbleShot.edges.sort(() => 0.5 - Math.random());

  return (
    <>
      <GlobaStyle />
      <Layout>
        <Header>
          <div id="intro-text">
            <h1>
              sou <b>Micael</b>
            </h1>
            <h4>
              Desenvolvedor mobile &amp; web <span></span> Advogando em Desing
              da Experiência do usuário desde de 2018.
            </h4>
            <button>Download CV</button>
          </div>

          <Img fixed={data.file.childImageSharp.fixed} alt="boy drawing" />
        </Header>

        <S.SectionGitHub>
          <h1>
            <b>GitHub</b> <small>@micaelgoms</small>{' '}
          </h1>

          {data.allRestApiUsersMicaelgoms.edges.map(edge => (
            <a
              href={edge.node.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={edge.node.id}
            >
              <section>
                <img
                  loading="lazy"
                  src={edge.node.avatar_url}
                  alt={edge.node.name}
                />

                <div id="github-infos">
                  <h4>{edge.node.name}</h4>
                  <small>@{edge.node.login}</small>
                  <p>{edge.node.bio}</p>

                  <div>
                    <p>
                      <UilUsersAlt size={20} /> {edge.node.followers} seguidores
                    </p>
                    <p>
                      <UilChatBubbleUser size={20} /> {edge.node.following}{' '}
                      seguindo
                    </p>
                    <p>
                      <UilFileUploadAlt size={20} /> {edge.node.public_gists}{' '}
                      gists
                    </p>
                    <p>
                      <UilBox size={20} /> {edge.node.public_repos} repositórios
                    </p>
                    <p id="location">
                      <UilMapMarker size={20} /> {edge.node.location}
                    </p>
                  </div>
                </div>
              </section>
            </a>
          ))}
        </S.SectionGitHub>

        <S.SectionSkills>
          <Carousel {...settings}>
            {skills.map((skill, i) => (
              <div key={i}>
                <img src={skill.img} alt={skill.name} />
                <h5>{skill.title}</h5>
                <small>{skill.name}</small>
                <p>{skill.content}</p>
              </div>
            ))}
          </Carousel>
        </S.SectionSkills>

        <S.SectionShowcase id="showcase-section">
          <h1 data-title="showcase">Showcase</h1>

          <section>
            {showcaseItems.map((item, i) => (
              <div id="showcase-card" key={i}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>

                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Conheça o projeto <span></span>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </S.SectionShowcase>

        <S.SectionFigma>
          <h1>UX &amp; UI</h1>

          <div>
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlIFZOT6yqLWR4szB12uvit%2FPortif%25C3%25B3lio%3Fnode-id%3D224%253A2"
              allowFullScreen
            ></iframe>
          </div>
        </S.SectionFigma>

        <S.SectionDribbble>
          <h1></h1>

          <section>
            {data.allDribbbleShot.edges.map(edge => (
              <a
                href={edge.node.url}
                target="_blank"
                rel="noopener noreferrer"
                key={edge.node.id}
              >
                <div id="card-dribbble" data-title={edge.node.title}>
                  <Img
                    fluid={edge.node.localCover.childImageSharp.fluid}
                    alt={edge.node.title}
                  />
                </div>
              </a>
            ))}
          </section>
        </S.SectionDribbble>
      </Layout>
    </>
  );
};

export default IndexPage;
