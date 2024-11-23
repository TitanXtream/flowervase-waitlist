import React from 'react';

const HowItWorksSection = () => {
  return (
    <div className='container py-[5rem] h-screen'>
      <div className='flex gap-[2rem] justify-center items-center h-full'>
        {/* <div className='rounded-[1.5rem] bg-white border-black border-[1px] flex-1 aspect-[2/3]'></div>
        <div className='rounded-[1.5rem] bg-white border-black border-[1px] flex-1 aspect-[2/3]'></div>
        <div className='rounded-[1.5rem] bg-white border-black border-[1px] flex-1 aspect-[2/3]'></div>
        <div className='rounded-[1.5rem] bg-white border-black border-[1px] flex-1 aspect-[2/3]'></div>
        <div className='rounded-[1.5rem] bg-white border-black border-[1px] flex-1 aspect-[2/3]'></div> */}
        <StageCard />
        <StageCard />
        <StageCard />
        <StageCard />
        <StageCard />
      </div>
    </div>
  );
};

export default HowItWorksSection;

const StageCard = () => {
  return (
    <div className='rounded-[1.5rem] bg-white aspect-[2/3] w-[12rem]'></div>
  );
};
