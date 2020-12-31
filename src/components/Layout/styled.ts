import styled from 'styled-components';
import { rgba } from 'polished';

export const LayoutWrapper = styled.main``;

export const SectionGitHub = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;

  width: 100%;
  max-width: 1140px;

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    background-color: #f2f2f2;
    padding: 1rem 0.5rem;
    border-radius: 15px;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.2s transform ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      background-color: #a6a6a6;
    }

    #github-infos {
      max-width: 800px;

      h4 {
        font-weight: bold;
      }

      p {
        margin: 1rem 0 0.3rem 0;
        font-size: 1.1rem;
      }

      div {
        display: flex;

        p {
          color: #a6a6a6;
          margin-right: 1rem;
          display: flex;
          align-items: center;

          svg {
            margin-right: 0.25rem;
          }

          &#location {
            margin-left: auto;
          }
        }
      }
    }
  }
`;

export const SectionSkills = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;

  div {
    margin: 1rem 0 1rem 1rem;
    cursor: e-resize;
    user-select: none;

    @media (min-width: 1220px) {
      margin-left: 4.5rem;
    }

    h4 {
      margin: 0.5rem 0;
      font-weight: bold;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SectionFigma = styled.section`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 10% auto;
  margin-bottom: 4rem;

  width: 100%;
  max-width: 1140px;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 auto;
    z-index: 5;

    &::before {
      content: '';
      position: absolute;
      width: calc(50% - 100px);
      border-top: 0.01rem solid ${rgba('#a6a6a6', 0.3)};
      left: 0;
      margin-top: 30px;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      width: calc(50% - 100px);
      border-top: 0.01rem solid ${rgba('#a6a6a6', 0.3)};
      right: 0;
      margin-top: 30px;
      z-index: -1;
    }
  }

  div {
    iframe {
      margin: 2rem auto;
      width: 100%;
      height: 500px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
`;

export const SectionDribbble = styled.section`
  position: relative;
  padding: 1rem;
  margin: 10% auto;
  margin-bottom: 4rem;

  width: 100%;
  max-width: 1140px;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 1rem 0;

    background: url(${require('../../images/tech/dribbble.svg')}) no-repeat
      center;
    background-size: contain;

    width: 150px;
    height: 100px;

    &::after {
      content: '';
      position: absolute;
      width: calc(100% - 200px);
      border-top: 0.01rem solid ${rgba('#a6a6a6', 0.3)};
      right: 0;
      margin-top: 55px;
      z-index: -1;
    }
  }

  section {
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0.25rem;

    a {
      flex: 1;
      margin: 0.25rem;
    }

    #card-dribbble {
      width: 100%;
      min-width: 300px;
      height: 300px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      z-index: 0;
      border-radius: 5px;

      &:hover {
        .gatsby-image-wrapper {
          transform: scale(1.07);
        }

        &::after {
          /* background-color: ${rgba('#ea4c89', 0.85)}; */
          background-color: ${rgba('#8fa842', 0.85)};
          color: #ffffff;
        }

        &::before {
          opacity: 1;
        }
      }

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.2s all ease-in-out;
      }

      &::before {
        content: '';
        background: url(${require('../../images/external-link-alt.svg')});
        background-size: contain;
        position: absolute;
        width: 30px;
        height: 30px;
        opacity: 0;
        z-index: 10;
        bottom: 60px;
        left: calc(50% - 15px);
      }

      &::after {
        content: attr(data-title);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        background-color: transparent;
        color: transparent;
        font-size: 1.5em;
        font-weight: bold;
        width: 100%;
        height: 100%;
        z-index: 5;
        left: 0;
        top: 0;
        transition: 0.2s all ease-in-out;
      }
    }
  }
`;

export const SectionShowcase = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 10% auto;
  margin-bottom: 4rem;

  width: 100%;
  max-width: 1140px;

  h1 {
    margin-bottom: 2rem;
    position: relative;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 900;
    background-image: linear-gradient(
      90deg,
      #afc50f 0%,
      #8fa842 51.56%,
      #afc50f 100%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

    &::before {
      content: attr(data-title);
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-text-fill-color: ${rgba('#fff', 0.4)};
      -moz-text-fill-color: ${rgba('#fff', 0.4)};
      font-size: 2em;
      margin-top: -80px;
      margin-left: -30px;
      z-index: -5;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    }
  }

  section {
    display: flex;

    #showcase-card {
      background-color: #f2f2f2;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      padding: 1rem;
      width: 450px;
      height: 500px;
      overflow: hidden;
      border-radius: 5px;
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      transition: 0.2s all ease-in-out;
      cursor: pointer;

      &:hover {
        width: 430px;
        height: 480px;

        img {
          width: 110%;
        }
      }

      h5 {
        text-transform: uppercase;
        font-weight: 900;
        color: ${rgba('#262626', .8)};
      }

      p {
        margin: 1rem 0;
        width: 300px;
        color: ${rgba('#262626', .8)};
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: 0.2s all ease-in-out;
      }
    }
  }
`;
