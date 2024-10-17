import { LandingPage } from "./pages/landing";
import { TimelineDemo } from "./pages/experience";
import { AnimatedBeamMultipleOutputDemo } from "./pages/tech";
import { TextHoverEffectDemo } from "./pages/social";

export default function Home() {
  return (
   <div className="h-auto">
    <LandingPage/>
    <AnimatedBeamMultipleOutputDemo />
    <TimelineDemo  />
    <TextHoverEffectDemo />
   </div>
  );
}
