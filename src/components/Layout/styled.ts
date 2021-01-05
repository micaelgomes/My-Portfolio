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
    padding: 1rem;
    border-radius: 15px;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.2s transform ease-in-out;

    @media (min-width: 768px) {
      padding: 1rem 0.5rem;
    }

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      background-color: #a6a6a6;
      margin: 1rem 0;
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
        flex-direction: column;

        @media (min-width: 768px) {
          flex-direction: row;
        }

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

    h5 {
      font-weight: 400;
    }

    small {
      font-weight: bold;
    }

    p {
      margin: 1rem 0;
    }

    img {
      width: 50px;
      height: 50px;
      margin-bottom: 0.5rem;
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
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-text-fill-color: ${rgba('#fff', 0.4)};
    -moz-text-fill-color: ${rgba('#fff', 0.4)};
    font-size: 5em;
    margin-top: -80px;
    margin-left: 0;
    z-index: -5;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    font-weight: 900;
    text-align: center;

    @media (min-width: 768px) {
      /* text-align: left; */
      font-size: 10em;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    #showcase-card {
      width: 100%;
      height: auto;
      margin: 4rem auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      &:nth-child(2) {
        flex-direction: column;

        @media (min-width: 768px) {
          flex-direction: row-reverse;
        }
      }

      img {
        width: 400px;
        height: auto;
        object-fit: cover;
        transition: 0.2s all ease-in-out;
        flex: 1;
        flex-grow: 0;

        @media (min-width: 768px) {
          width: 500px;
        }
      }

      div {
        flex: 1;
        max-width: 500px;

        h2 {
          text-transform: uppercase;
          font-weight: 900;
          color: ${rgba('#f2f2f2', 1)};
        }

        p {
          margin: 2.5rem auto;
          color: ${rgba('#fff', 1)};
          font-weight: 500;
        }

        a {
          font-weight: bold;
          color: #fff;
          text-decoration: none;

          &:hover {
            span {
              width: 150px;
            }
          }

          span {
            position: relative;
            background-color: #fff;
            width: 50px;
            height: 3px;
            margin-bottom: 3px;
            margin-left: 20px;
            display: inline-flex;
            transition: 0.2s width ease-in-out;

            &::before {
              content: '';
              position: absolute;
              background-color: #fff;
              width: 10px;
              height: 3px;
              transform: rotate(40deg);
              right: -3px;
              top: -3px;
              border-radius: 1px;
            }

            &::after {
              content: '';
              position: absolute;
              background-color: #fff;
              width: 10px;
              height: 3px;
              transform: rotate(130deg);
              right: -3px;
              top: 3px;
              border-radius: 1px;
            }
          }
        }
      }
    }
  }
`;

export const SectionFigma = styled.section`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 10% auto;
  margin-bottom: 0;

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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h5 {
      margin: .3rem;
      color: #595959;
      flex: 1;
      max-width: 500px;
      min-width: 400px;
      line-height: 1.5;
      margin-bottom: 2.5rem;
    }
  }

  iframe {
    margin: 2rem auto;
    width: 100%;
    height: 500px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const SectionDribbble = styled.section`
  position: relative;
  padding: 1rem;
  margin: 1rem auto;

  width: 100%;
  max-width: 1140px;

  display: flex;
  flex-direction: column;

  h1 {
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

  h5 {
    color: #595959;
    max-width: 500px;
    margin-bottom: 4rem;
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

export const SectionBonus = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 10% auto;
  margin-bottom: 4rem;

  width: 100%;
  max-width: 1140px;

  h1 {
    font-weight: 900;
    position: relative;
    text-align: center;

    &::before {
      content: '';
      background: url(${require('../../images/coin.gif')});
      background-size: contain;
      position: absolute;
      width: 40px;
      height: 40px;
      margin-left: -60px;
      bottom: 8px;
    }

    &::after {
      content: '';
      background: url(${require('../../images/coin.gif')});
      background-size: contain;
      position: absolute;
      width: 40px;
      height: 40px;
      margin-left: 16px;
      bottom: 8px;
    }
  }
`;
