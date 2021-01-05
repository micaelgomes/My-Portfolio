import styled from 'styled-components';
import { rgba } from 'polished';

export const FooterWrapper = styled.footer`
  background-color: #ffffff;
  border-top: 0.01rem solid ${rgba('#a6a6a6', 0.5)};
`;

export const Container = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;

  width: 100%;
  max-width: 1140px;
`;

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;

  button {
    border: none;
    background: transparent;
    transition: 0.2s transform ease-in-out;
    width: 40px;
    height: 40px;
    margin: 0 auto;

    &:hover {
      transform: translateY(-5px);
    }
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    padding-bottom: 2.5rem;
    border-bottom: 4px solid ${rgba('#a6a6a6', 0.15)};

    a {
      margin: 0.5rem 1.5rem;
      text-decoration: none;

      svg {
        color: #a6a6a6;
        transition: 0.5s color ease-in-out;
      }

      &[data-name='github'] {
        &:hover {
          svg {
            color: #444444;
          }
        }
      }

      &[data-name='likedin'] {
        &:hover {
          svg {
            color: #3a8bbb;
          }
        }
      }

      &[data-name='instagram'] {
        &:hover {
          svg {
            color: #8134af;
          }
        }
      }

      &[data-name='dribbble'] {
        &:hover {
          svg {
            color: #ea4c89;
          }
        }
      }
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-left: 0.3rem;

      a {
        font-weight: 700;
        color: #8fa842;
      }
    }
  }
`;
