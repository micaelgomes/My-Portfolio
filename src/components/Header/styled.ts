import styled from 'styled-components';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

export const HeaderWrapper = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  min-height: 110vh;

  &::before {
    content: '';
    position: absolute;
    background: url(${require('../../images/name.svg')}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 125px;
    z-index: -1;
    margin-top: -400px;

    @media (min-width: 768px) {
      margin-top: -300px;
    }
  }

  #intro-text {
    flex: 1;
    margin: auto 0;
    margin-top: 8rem;
    max-width: 450px;

    @media (min-width: 768px) {
      margin-top: auto;
    }

    h1 {
      margin-bottom: 1rem;
    }

    h4 {
      color: #595959;
      margin-bottom: 2.5rem;

      span {
        padding-left: 25px;

        &::before {
          content: '';
          background: #595959;
          width: 20px;
          height: 1px;
          position: absolute;
          margin-top: 15px;
          margin-left: -24px;
        }
      }
    }

    a {
      text-decoration: none;
      background: transparent;
      border: 2px solid #262626;
      padding: 0.5rem 1rem;
      color: #f2f2f2;
      font-size: 1.1rem;
      font-weight: 600;
      position: relative;
      transition: 0.5s all ease-in-out;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #8fa842;
        z-index: -5;
        margin-top: -2px;
        margin-left: -10px;
        transition: 0.2s all ease-in-out;
      }

      &:hover {
        border-color: transparent;

        &::before {
          margin-top: -8px;
          margin-left: -16px;
        }
      }
    }
  }
`;

export const ImageHeader = styled(Img)<GatsbyImageFluidProps>`
  width: 200px;
  height: 100%;

  @media (min-width: 768px) {
    width: 250px;
  }
`;
