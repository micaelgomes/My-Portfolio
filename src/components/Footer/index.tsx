import React from 'react';
import { UilAngleUp } from '@iconscout/react-unicons';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilDribbble } from '@iconscout/react-unicons';

import * as S from './styled';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.Container>
        <S.SectionFooter>
          <button onClick={scrollTop}>
            <UilAngleUp size={48} color="#262626" />
          </button>

          <div>
            <a
              href="https://github.com/micaelgomes"
              target="_blank"
              rel="noopener noreferrer"
              data-name="github"
            >
              <UilGithubAlt size={32} />
            </a>

            <a
              href="https://www.instagram.com/micaelgoms"
              target="_blank"
              rel="noopener noreferrer"
              data-name="instagram"
            >
              <UilInstagram size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/micael-gomes-48b095133"
              target="_blank"
              rel="noopener noreferrer"
              data-name="likedin"
            >
              <UilLinkedinAlt size={32} />
            </a>

            <a
              href="https://dribbble.com/micaelgomes"
              target="_blank"
              rel="noopener noreferrer"
              data-name="dribbble"
            >
              <UilDribbble size={32} />
            </a>
          </div>

          <span>
            © {new Date().getFullYear()} Micael Gomes.{' '}
            <p>
              <a href="mailto:oi@micaelgomes.com">oi@micaelgomes.com</a>
            </p>
          </span>
        </S.SectionFooter>
      </S.Container>
    </S.FooterWrapper>
  );
};

export default Footer;
