import React from 'react';

const PhoneFrame = () => {
  return (
    <div className='relative pt-[1.5rem] pr-[3rem] 2xl:[--phone-size:18rem] [--phone-size:14rem]'>
      <div className='relative z-[2] aspect-[9/16] w-[--phone-size] bg-black rounded-[1rem]'></div>
      <div className='z-[1] absolute bottom-[0.8rem] left-[2rem] aspect-[9/16] w-[--phone-size] bg-gray-500 rounded-[1rem] rotate-[5deg]'></div>
    </div>
  );
};

export default PhoneFrame;
