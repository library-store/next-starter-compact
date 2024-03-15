import * as React from 'react';

import HeaderLogo from '@/assets/svgs/head-logo';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="header md:py-[26px]">
      <div className="content-container container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <HeaderLogo />
          </a>

          <div className="grow">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
