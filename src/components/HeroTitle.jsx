import { Crown, Heart } from "lucide-react";

export default function HeroTitle() {
  return (
    <section className="hero-title">
      <div className="hero-crown"><Crown size={55} fill="currentColor" /></div>
      <h1><span>LEADER</span><b>BOARD</b></h1>
      <div className="hero-motto">
        <span>PLAY</span><Heart size={15} fill="currentColor" />
        <span>COMPETE</span><Heart size={15} fill="currentColor" />
        <span>ACHIEVE</span><Heart size={15} fill="currentColor" />
        <span>BELONG</span>
      </div>
    </section>
  );
}