import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import { Meta } from '~/components/meta';
import Header from '~/components/header/index';
import Paragraph from '~/components/paragraph';
import { Post as PostType } from '~/components/post-card';
import useScrollProgress from '~/components/use-scroll-progress';
import { Pre, InlineCode } from '~/components/code';
import Link from '~/components/link';

const ScrollProgress = styled.progress.attrs({ max: 100, min: 0 })`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  height: 3px;
  appearance: none;
  border: none;
  background: none;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-image: linear-gradient(135deg, #7fdbca 0%, #82aaff 100%);
  }

  &::-moz-progress-bar {
    background-image: linear-gradient(135deg, #7fdbca 0%, #82aaff 100%);
  }
`;

interface Props {
  meta: PostType;
}

const components = {
  inlineCode: InlineCode,
  p: Paragraph,
  a: Link,
  pre: Pre,
};

const Post: React.FC<Props> = ({ children, meta: { path, ...meta } }) => {
  const scrollProgress = useScrollProgress();
  return (
    <MDXProvider components={components}>
      <Meta {...meta} />
      <ScrollProgress value={scrollProgress} />
      <Header {...meta} />
      <div className="w-11/12 max-w-screen-lg mx-auto mt-12">{children}</div>
    </MDXProvider>
  );
};

export default Post;
