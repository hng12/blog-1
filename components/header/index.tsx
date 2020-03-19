import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '~/components/button';
import DateHeading from '~/components/header/date';
import Image, { ImageType } from '~/components/header/image';
import Curve from '~/public/static/images/curve.svg';

// const HeaderStyles = styled.header.attrs({ 'data-testid': 'header' })`
//   @media (orientation: landscape) and (max-height: 500px) {
//     max-height: 100vh;
//     min-height: 100vh;
//     height: 100vh;
//   }
// `;

export const Title = styled(motion.h1)`
  margin-bottom: 2rem;
  font-size: 3rem;
  @media (min-width: 400px) {
    font-size: 4rem;
  }
`;

interface Props {
  title: string;
  url?: string;
  image: ImageType;
  date?: string;
}

const Header: React.FC<Props> = ({ title, url, image, date }) => (
  <header className="relative flex items-center justify-center text-white h-half min-h-header max-h-header">
    <div className="z-10 text-center">
      <AnimatePresence exitBeforeEnter>
        <Title
          initial={{
            opacity: 0,
            translateY: -50,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          exit={{
            opacity: 0,
            translateY: 50,
          }}
        >
          {title}
        </Title>
      </AnimatePresence>
      <noscript>
        <Title>{title}</Title>
      </noscript>
      {date && <DateHeading date={date} />}
      {url && <Button href={url}>Read More</Button>}
    </div>
    <Image image={image} />

    <figure className="absolute left-0 w-full h-12 bottom-header-curve text-background">
      <Curve className="w-full h-full fill-current" role="presentation" />
    </figure>
  </header>
);

export default Header;
