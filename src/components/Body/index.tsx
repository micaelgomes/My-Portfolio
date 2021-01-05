import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { UilMapMarker } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';
import { UilChatBubbleUser } from '@iconscout/react-unicons';
import { UilFileUploadAlt } from '@iconscout/react-unicons';
import { UilBox } from '@iconscout/react-unicons';

import skills from '../../content/skills';
import showcaseItems from '../../content/showcase';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import * as S from './styled';

interface RequestDTO {
  allRestApiUsersMicaelgomes: {
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

const Body: React.FC = () => {
  const data = useStaticQuery<RequestDTO>(graphql`
    query profileInfos {
      allRestApiUsersMicaelgomes {
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
        partialVisibilityGutter: 100,
      },
    },
    ssr: true,
    infinite: true,
    autoPlaySpeed: 3000,
    autoPlay: true,
    containerClass: 'carousel-container',
    removeArrowOnDeviceType: ['tablet', 'mobile'],
    dotListClass: 'custom-dot-list-style',
    itemClass: 'carousel-item-padding-40-px',
    partialVisible: true,
  };

  data.allDribbbleShot.edges.sort(() => 0.5 - Math.random());

  return (
    <>
      <S.SectionGitHub>
        <h1 data-sal="fade" data-sal-delay="300" data-sal-easing="easeOutExpo">
          <b>GitHub</b> <small>@micaelgoms</small>{' '}
        </h1>

        {data.allRestApiUsersMicaelgomes.edges.map(edge => (
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
        <h1>Showcase</h1>

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
                {edge.node.localCover && (
                  <Img
                    fluid={edge.node.localCover.childImageSharp.fluid}
                    alt={edge.node.title}
                  />
                )}
              </div>
            </a>
          ))}
        </section>
      </S.SectionDribbble>

      <S.SectionFigma>
        <h1>figma</h1>

        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlIFZOT6yqLWR4szB12uvit%2FPortif%25C3%25B3lio%3Fnode-id%3D224%253A2"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </S.SectionFigma>

      <S.SectionBonus>
        <h1>Bônus</h1>

        <section>
          <a
            href="https://githubexplorer.tk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="card-bonus">
              <img
                id="github"
                src={require('../../images/explorer.svg')}
                alt="go finances"
              />

              <div>
                <h4>GitHub Explorer</h4>
                <p>
                  Aplicação feita durante o GoStack, o Bootcamp da Rocketseat™,
                  que tem como objetivo buscar repositórios usando a REST API
                  pública do GitHub. É uma aplicação feita em react.js e
                  Styled-components. Click no Card para acessar o App.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://gofinances.tk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="card-bonus">
              <img
                id="gofinance"
                src={require('../../images/gofinances.svg')}
                alt="go finances"
              />

              <div>
                <h4>Go Finances</h4>
                <p>
                  Essa será uma aplicação para exibir as transações financeiras
                  de entrada e saída em um Banco de Dados Relacional(Postgres
                  com typeorm). O serviço permitir o cadastro, a listagem de
                  transações e importação de novos dados a partir de um CSV.
                </p>
              </div>
            </div>
          </a>
        </section>
      </S.SectionBonus>
    </>
  );
};

export default Body;
