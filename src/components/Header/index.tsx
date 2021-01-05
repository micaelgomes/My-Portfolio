import React, { useState } from 'react';
import Navbar from '../Navbar';

import * as S from './styled';

const Header: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const toogleOpened = () => setOpened(!opened);

  return (
    <>
      <Navbar opened={opened} toogleOpened={toogleOpened} />
      <S.HeaderWrapper>{children}</S.HeaderWrapper>
    </>
  );
};

export default Header;
