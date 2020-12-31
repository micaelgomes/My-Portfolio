import styled, { css } from 'styled-components';

import Drawer from 'react-motion-drawer';
import { darken, lighten } from 'polished';

interface OverlaySidebarProps {
  open: boolean;
}

export const NavbarMain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  padding: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    position: fixed;
  }

  #logo {
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      height: 40px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      top: 70px;
      margin-left: -25px;
      transition: 0.2s all linear;
    }

    &:hover {
      &::after {
        height: 70px;
        border-color: #2d6ae3;
      }
    }
  }

  button {
    background: transparent;
    border: none;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      background-color: #8fa842;
      height: 3px;
      margin: 3px;
      transition: 0.2s all ease-in-out;
      border-radius: 3px;
      border: 2px solid ${darken(0, '#8fa842')};

      &:nth-child(1) {
        width: 30px;
      }

      &:nth-child(2) {
        width: 17px;
      }

      &:nth-child(3) {
        width: 26px;
      }
    }

    &:hover {
      span {
        width: 30px;
      }
    }
  }
`;

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
    margin-top: -300px;
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

    button {
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

export const Sidebar = styled(Drawer)`
  background: #8fa842;
  padding: 1rem 1rem 1rem 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;
    }

    svg {
      cursor: pointer;
      transition: 0.2s all ease-in-out;

      &:hover {
        transform: translateX(5px);
      }
    }
  }

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      margin: 1rem;
      margin-bottom: 1.5rem;

      a {
        color: ${lighten(0.1, '#F2F2F2')};
        font-size: 1.3em;
        cursor: pointer;
        text-transform: capitalize;
        font-weight: 400;
        position: relative;
        z-index: 5;
        text-decoration: none;

        &::after {
          content: '';
          position: absolute;
          background-color: #f2f2f2;
          width: 100%;
          height: 5px;
          left: 0;
          bottom: 0%;
          z-index: 0;
          opacity: 0.3;
        }

        &:hover {
          &::after {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;

export const OverlaySidebar = styled.a<OverlaySidebarProps>`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  z-index: 100000;
  visibility: hidden;
  transition: 0.3s all ease-in-out;

  ${props =>
    props.open &&
    css`
      background: rgba(0, 0, 0, 0.1);
      visibility: visible;
      width: calc(100% - 300px);
    `}
`;
