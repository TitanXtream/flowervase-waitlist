import JoinWaitlistButton from '../featured/join-waitlist-button';
import PhoneFrame from '../featured/phone-frame';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='container flex gap-[3rem] py-[2rem]'>
      <div className='flex flex-col flex-1 max-w-[34rem] lg:max-w-[32.5rem]'>
        <h1 className='lg:text-[2.5rem] text-[2rem] font-semibold'>
          Your Single AI assistant for
        </h1>
        <h1 className='lg:text-[2.9rem] text-[2.5rem] font-extrabold leading-[110%] mt-[1rem] text-highlight-primary'>
          Video, Voiceover, Script, Thumbnail and Caption
        </h1>
        <h1 className='text-[2rem] leading-[110%] mt-[1rem]'>
          over{' '}
          <strong className='font-extrabold'>Instagram, Youtube and X</strong>
        </h1>

        <p className='mt-[2rem]'>
          Effortlessly <strong>create and repurpose</strong> short videos for
          Instagram, YouTube, and X in just 4 clicks — hooks, hashtags, CTAs,
          scripts, and thumbnails, all platform-optimized
        </p>
        <div className='h-[2rem]'></div>

        <JoinWaitlistButton className='mt-auto' />
      </div>
      <div className='flex-1 shrink-0 flex items-center justify-center'>
        <PhoneFrame />
      </div>
    </div>
  );
};

export default HeroSection;
