import Image from 'next/image';
import React, { ReactNode } from 'react';

type SectionWindowLayoutProps = {
  heading: ReactNode;
  subtitle: string;
  actionButton: ReactNode;
  children: ReactNode;
  imageUrl: string;
};
export const SectionWindowLayout = ({
  heading,
  subtitle,
  actionButton,
  children,
  imageUrl,
}: SectionWindowLayoutProps) => {
  return (
    <section className='container py-[2.5rem]'>
      <h1 className='text-center text-[3rem] [&_strong]:text-highlight-primary font-bold [&_strong]:font-bold'>
        {heading}
      </h1>
      <div className='w-full rounded-[2rem] lg:[--spacing:2rem] [--spacing:1rem] bg-white shadow-lvl1 p-[--spacing] mt-[2rem] flex gap-[--spacing]'>
        <div className='w-full min-w-[30rem] flex flex-col gap-[1rem] text-[#757575] font-medium'>
          <h1 className='text-[2.25rem] leading-[2.75rem] font-extrabold text-foreground'>
            {subtitle}
          </h1>
          {children}
          {actionButton}
        </div>
        <div className='w-full'>
          <Image src={imageUrl} width={100} height={100} alt='cool-image' />
        </div>
      </div>
    </section>
  );
};
