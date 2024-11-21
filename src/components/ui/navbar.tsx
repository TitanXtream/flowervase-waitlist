import JoinWaitlistButton from '../featured/join-waitlist-button';
import { navbarOption } from '@/lib/static-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='container h-[5rem] flex py-[0.5rem] justify-start items-center'>
      <Image
        height={100}
        width={100}
        className='h-[1.5rem] w-auto'
        src={'long-logo.svg'}
        alt='logo'
      />
      <div className='flex ml-[3rem] gap-[2rem] items-center'>
        {navbarOption.map((opt) => {
          return (
            <Link
              href={opt.link}
              key={opt.link}
              className='relative group hover:text-primary transition-[color] duration-150'
            >
              {opt.label}
              <div className='absolute bottom-[-2px] h-[2px] w-0 bg-black group-hover:w-full transition-[width,_background-color] duration-150 group-hover:bg-primary'></div>
            </Link>
          );
        })}
      </div>
      <div className='ml-auto'>
        <JoinWaitlistButton />
      </div>
    </div>
  );
};

export default Navbar;
