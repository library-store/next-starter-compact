'use client'
import * as React from 'react';

import HeaderLogo from '@/assets/svgs/head-logo';

import Navbar from './Navbar';
import { Button } from '../Elements/button';

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false)

  return (
    <header className="header md:py-[26px]">
      <div className="content-container container mx-auto">
        <div className="py-3 px-1 flex items-center justify-between">
          <a href="/">
            <HeaderLogo />
          </a>

          <div className="grow hidden md:block">
            <Navbar />
          </div>

          <button className="navbar-burger flex items-center py-3 px-4 bg-brand-teal-dark hover:bg-brand-teal-darker text-black rounded-3xl focus:outline-none is-active md:hidden" onClick={() => setOpenNav(true)}>
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
          </button>
        </div>
        <div className={`${openNav ? '' : 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="/">
                      <HeaderLogo />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="inline-block navbar-burger" href="#" onClick={() => setOpenNav(false)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">
                  <ul>
                    <li className="mb-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="#">About us</a></li>
                    <li className="mb-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/loan">Loan</a></li>
                    <li className="mb-9"><a className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700" href="/saving">Saving</a></li>
                  </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                  <a href="https://ebankdev.iflux.global/"><Button className="w-full mb-5 rounded-full bg-black text-white">Log in</Button></a>
                  <a href="https://ebankdev.iflux.global/"><Button className="w-full rounded-full border border-black bg-white text-black">
                    Sign up
                  </Button>
                  </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
