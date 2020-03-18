/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { name } from '~/utils/authorInfo';

const Footer: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <footer className="flex items-center justify-center h-32 text-2xl">
      <Link href={{ pathname: '/' }}>
        <a
          className="no-underline text-current"
          rel="home"
          aria-label="go home"
          onClick={event => {
            if (isHome) {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          &copy; {new Date().getFullYear()} {name}
        </a>
      </Link>
    </footer>
  );
};

export { Footer };
