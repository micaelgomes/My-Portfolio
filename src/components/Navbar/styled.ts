import styled from 'styled-components';
import { darken } from 'polished';

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
        border-color: #8fa842;
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
