import { Button } from '../ui/button';
import { SectionWindowLayout } from '../ui/section-layouts';
import React from 'react';

const CaptionOverviewSection = () => {
  return (
    <SectionWindowLayout
      heading={<h1>Generate platform tailored Scripts in Seconds</h1>}
      subtitle='Generate engaging captions tailored to each platform.'
      imageUrl=''
      actionButton={<Button>What's next?</Button>}
    >
      <p>
        Let our AI craft attention-grabbing captions that enhance your content’s
        reach.
      </p>
      <p>
        With platform-optimized captions, your content remains engaging and
        shareable, no matter where it’s posted.
      </p>
    </SectionWindowLayout>
  );
};

export default CaptionOverviewSection;
