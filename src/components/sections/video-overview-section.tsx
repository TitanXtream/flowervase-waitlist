import { Button } from '../ui/button';
import { SectionWindowLayout } from '../ui/section-layouts';
import React from 'react';

const VideoOverviewSection = () => {
  return (
    <SectionWindowLayout
      heading={<h1>Create Videos in One Click</h1>}
      subtitle='Transform scripts and voiceovers into polished videos instantly'
      imageUrl=''
      actionButton={<Button>What's next?</Button>}
    >
      <p>
        With your script and voiceover ready, our Video Generator handles
        visuals, transitions, and edits.
      </p>
      <p>
        Get professional, platform-perfect videos tailored for Instagram,
        YouTube, and beyond—all in minutes.
      </p>
    </SectionWindowLayout>
  );
};

export default VideoOverviewSection;
