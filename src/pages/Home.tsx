import { useFrameAnimation } from "@/hooks/useFrameAnimation";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroCanvas } from "@/components/HeroCanvas";
import { AboutSection } from "@/components/AboutSection";
import { SocialSection } from "@/components/SocialSection";

export default function Home() {
  const { progress, isLoaded, hasError, frames } = useFrameAnimation();

  return (
    <main className="w-full bg-black text-white selection:bg-white/20">
      <div className="noise-overlay" />

      <LoadingScreen progress={progress} isLoaded={isLoaded} />

      <HeroCanvas frames={frames} hasError={hasError} />

      <div className="relative bg-black z-10 shadow-[0_-20px_40px_rgba(0,0,0,1)]">
        <AboutSection />
        <SocialSection />
      </div>
    </main>
  );
}
