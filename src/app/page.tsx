import {
  CaptionOverviewSection,
  HeroSection,
  HowItWorksSection,
  ScriptOverviewSection,
  ShowcaseSection,
  ThumbnailOverviewSection,
  VideoOverviewSection,
  VoiceoverOverviewSection,
} from '@/components';

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <ScriptOverviewSection />
      <VoiceoverOverviewSection />
      <VideoOverviewSection />
      <ThumbnailOverviewSection />
      <CaptionOverviewSection />
    </div>
  );
}
