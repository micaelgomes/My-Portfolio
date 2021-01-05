import React, { useState } from 'react';
import GlobaStyle from '../styles/global';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Navbar from '../components/Navbar';

const AboutPage: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const toogleOpened = () => setOpened(!opened);

  return (
    <>
      <GlobaStyle />
      <Helmet title="Sobre | Micael Gomes" defer={false} />
      <Layout>
        <Navbar opened={opened} toogleOpened={toogleOpened} />
        <h1>página em produção.</h1>

        <AniLink cover to="/" direction="right" duration={1} bg="#8fa842">
          home
        </AniLink>
      </Layout>
    </>
  );
};

export default AboutPage;
