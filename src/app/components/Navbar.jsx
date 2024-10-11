"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import {
  NAME as name,
  ROLE as role,
  NAV_LINKS as navLinks,
} from '../constants';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='bg-lightblue sticky top-0'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href={'#'}>
          <h1 className='title text-xl font-black pl-5 pb-2'>{name}</h1>
          <h3 className='text-xs font-light pl-5 uppercase'>{role}</h3>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-1'>
                <Bars3Icon className='h-8 w-8' />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-1'>
                <XMarkIcon className='h-8 w-8' />
              </button>
          )}
        </div>
        <div className='menu hidden md:block' id='navbar'>
          <ul className='flex p-4 gap-6'>
           {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;