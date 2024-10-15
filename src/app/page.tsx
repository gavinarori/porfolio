import { LandingPage } from "./pages/landing";
import { TimelineDemo } from "./pages/experience";
import { AnimatedBeamMultipleOutputDemo } from "./pages/tech";

export default function Home() {
  return (
   <div>
    <LandingPage/>
    <AnimatedBeamMultipleOutputDemo />
    <TimelineDemo  />
   </div>
  );
}
