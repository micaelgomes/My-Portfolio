import React, { useState } from 'react';
import GlobaStyle from '../styles/global';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const toogleOpened = () => setOpened(!opened);

  return (
    <>
      <GlobaStyle />
      <Helmet title="Sobre | Micael Gomes" defer={false} />
      <Navbar opened={opened} toogleOpened={toogleOpened} />

      <About>
        <h2>
          Curtiu a transição?{' '}
          <p>
            <a
              href="https://transitionlink.tylerbarnes.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              sim 😀
            </a>{' '}
            /{' '}
            <a
              href="https://www.thecagecage.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              não 😠
            </a>
          </p>
        </h2>

        <h3>Quem sou eu?</h3>

        <div>
          <h5>
            Minha carreira como programador começou em 2017, pegando freelas e
            pequenos projetos enquanto cursava a faculdade. Sempre gostei de
            interfaces, a forma que usuário interagiam com meus Apps. No ínicio
            fazia um HTML e CSS, mas logo depois já se fez necessário um
            Wordpress com um Javascript ou um JQuery.
          </h5>

          <h5>
            Logo depois ingressei em um estágio, colocando aprova minhas
            habilidade de desenvolvedor WEB. Porém, entregar valor muito rápido
            e validar requisitos antes de começar a fazer código havia se
            tornado uma necessidade. Uma das formas que encontrei de resolver
            essa dor foi usando o <b>Figma</b>. .
          </h5>

          <h5>
            Nesse período comecei a trabalhar com Experiência do usuário, muito
            influenciado pelo meu hobbe em construir <i>"interfaces"</i> na
            faculdade. Isso me despertou o interesse em IHC, uma área que me
            ajudou a entender como um usuário pode interagir com as minhas
            aplicações.
          </h5>

          <h5>
            Tudo que fiz neste projeto, demonstra uma faceta que aprendi ao
            longo dos anos. Se quiser encontrar meus projetos pessoais pode
            acessa meu nick, ou o card na Home. As imagens que foram exibidas
            estão na minha conta do <b>dribbble</b>: <code>@micaelgomes</code>{' '}
            (mesmo @ do figma e do github). Dentre elas possuem projetos
            comerciais e protótipos de ideias, fique à vontade em codar essas
            ideias.
          </h5>
        </div>
      </About>

      <Footer />
    </>
  );
};

export default AboutPage;
