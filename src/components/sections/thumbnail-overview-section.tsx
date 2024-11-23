import { Button } from '../ui/button';
import { SectionWindowLayout } from '../ui/section-layouts';
import React from 'react';

const ThumbnailOverviewSection = () => {
  return (
    <SectionWindowLayout
      heading={<h1>Catchy Thumbnails in No Time</h1>}
      subtitle='Automatically generate eye-catching thumbnails'
      imageUrl=''
      actionButton={<Button>What's next?</Button>}
    >
      <p>
        Thumbnails matter, and our AI Thumbnail Creator crafts visuals that
        boost clicks.
      </p>
      <p>
        Customize designs, fonts, and styles to stand out while staying on-brand
      </p>
    </SectionWindowLayout>
  );
};

export default ThumbnailOverviewSection;
