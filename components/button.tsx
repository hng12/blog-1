import React from 'react';
import Link, { LinkProps } from 'next/link';
import Ink from 'react-ink';

interface Props extends LinkProps {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...nextProps }) => (
  <Link {...nextProps}>
    <a className="relative block px-10 py-4 text-2xl text-white uppercase bg-black border border-black rounded-lg hover:text-black hover:bg-white">
      <span>{children}</span>
      <Ink />
    </a>
  </Link>
);

export default Button;
