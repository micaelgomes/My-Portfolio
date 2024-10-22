import styled from 'styled-components';

export const AboutWrapper = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;

  width: 100%;
  max-width: 1140px;
  min-height: 110vh;

  h2 {
    margin: 5% 0;
    position: relative;
    display: flex;
    align-items: baseline;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    &::before {
      content: '';
      position: absolute;
      background: #8fa842;
      width: 50px;
      height: 3px;
      border-radius: 1px;
      top: 50px;
    }

    p {
      font-size: 1rem;
      margin-left: auto;
      margin-top: 1rem;

      @media (min-width: 768px) {
        margin-left: 1rem;
      }
    }
  }

  h3 {
    color: #595959;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10%;
    position: relative;

    h5 {
      margin: 0.3rem;
      color: #595959;
      min-width: 300px;
      width: 100%;
      line-height: 1.5;
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        width: 500px;
      }
    }
  }
`;
