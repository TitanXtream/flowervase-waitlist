import { Button } from '../ui/button';
import { SectionWindowLayout } from '../ui/section-layouts';
import React from 'react';

const VoiceoverOverviewSection = () => {
  return (
    <SectionWindowLayout
      heading={<h1>Add Voice with Ease</h1>}
      subtitle=' Turn scripts into natural, captivating voiceovers'
      imageUrl=''
      actionButton={<Button>Let's build video</Button>}
    >
      <p>Choose from a range of AI voices to bring your content to life.</p>
      <p>
        Customize tone, pacing, and accents to match your brand’s personality,
        all with a click.
      </p>
      <p>Flowervase ensures studio-quality voiceovers without the hassle</p>
    </SectionWindowLayout>
  );
};

export default VoiceoverOverviewSection;
