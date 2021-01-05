import styled, { css } from 'styled-components';
import Drawer from 'react-motion-drawer';
import { lighten } from 'polished';

interface OverlaySidebarProps {
  open: boolean;
}

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
      position: relative;
      transition: 0.2s all ease;

      svg {
        position: absolute;
        left: -38px;
        top: -4px;
      }

      p {
        color: #f2f2f2;
        font-size: 1.3em;
        opacity: 0.5;
        cursor: not-allowed;
        text-transform: capitalize;
        position: relative;
        display: inline;

        &::after {
          content: '';
          position: absolute;
          background-color: #f2f2f2;
          width: 100%;
          height: 5px;
          left: 0;
          bottom: 0%;
          z-index: 0;
          opacity: 0.2;
        }
      }

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
