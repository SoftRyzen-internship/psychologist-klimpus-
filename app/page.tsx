// import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/Main/FormSection';
import { HeroSection } from '@/sections/Main/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';
import { RequestsSection } from '@/sections/Main/RequestsSection';
import { AboutSection } from '@/sections/Main/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RequestsSection />
      <UniquenessSection />
      {/* <TestComponent /> */}
      <FormSection />
    </>
  );
}
