import JoinWaitlistButton from '../featured/join-waitlist-button';
import React from 'react';

const ShowcaseSection = () => {
  return (
    <div className='w-full flex gap-0 py-[6rem] relative'>
      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
        <div className='text-[3.75rem] font-extrabold'>
          From{' '}
          <strong className='text-highlight-secondary'>Idea to Reality</strong>
        </div>
        <p className='text-[3.5rem] font-bold text-center'>before you think</p>
        <JoinWaitlistButton className='w-full mt-[5rem]' />
      </div>
      <div className='flex-1 aspect-[9/16] bg-gray-600'></div>
      <div className='flex-1 aspect-[9/16] bg-gray-500'></div>
      <div className='flex-1 aspect-[9/16] bg-gray-400'></div>
      <div className='flex-1 aspect-[9/16] bg-gray-300'></div>
    </div>
  );
};

export default ShowcaseSection;
