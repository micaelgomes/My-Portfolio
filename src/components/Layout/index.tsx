import React from 'react';
import * as S from './styled';

const Layout: React.FC = ({children}) => {
  return(
    <>
      <S.LayoutWrapper>
        {children}
      </S.LayoutWrapper>
    </>
  );
}

export default Layout;
