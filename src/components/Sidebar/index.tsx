import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilCornerDownRightAlt } from '@iconscout/react-unicons';

import * as S from './styled';

interface SidebarProps {
  opened: boolean;
  widthSidebar: number;
  toogleOpened: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  opened,
  widthSidebar,
  toogleOpened,
}) => {
  return (
    <>
      <S.OverlaySidebar open={opened} onClick={toogleOpened} />

      <S.Sidebar
        open={opened}
        width={widthSidebar}
        right={true}
        overlayColor={'transparent'}
        onChange={toogleOpened}
      >
        <div>
          <button onClick={toogleOpened}>
            <UilArrowRight size={56} color="#f2f2f2" />
          </button>
        </div>

        <ul>
          <li>
            {window.location.pathname === '/' && (
              <UilCornerDownRightAlt size={32} color="#fff" />
            )}
            <AniLink cover to="/" direction="right" duration={1} bg="#8fa842">
              home
            </AniLink>
          </li>
          <li>
            {window.location.pathname === '/about' && (
              <UilCornerDownRightAlt size={32} color="#fff" />
            )}

            <AniLink
              cover
              to="/about"
              direction="left"
              duration={1}
              bg="#8fa842"
            >
              sobre
            </AniLink>
          </li>
          <li>
            <p>Ferramentas</p>
          </li>
          <li>
            <p>snippets</p>
          </li>
          <li>
            <p>talks</p>
          </li>
        </ul>
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
