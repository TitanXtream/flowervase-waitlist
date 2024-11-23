import { Button } from '../ui/button';
import { SectionWindowLayout } from '../ui/section-layouts';
import React from 'react';

const ScriptOverviewSection = () => {
  return (
    <SectionWindowLayout
      heading={
        <h1>
          Generate <strong>Platform tailored Scripts</strong>
        </h1>
      }
      subtitle='Craft all platform-ready scripts with AI-powered ease in one click'
      imageUrl=''
      actionButton={<Button>What's next?</Button>}
    >
      <p>
        Enter your idea, and let our AI Script Generator create engaging scripts
        tailored for your audience and platforms.
      </p>
      <p>
        Each script is optimized with hooks, CTAs, and platform trends for
        maximum impact.
      </p>
    </SectionWindowLayout>
  );
};

export default ScriptOverviewSection;
