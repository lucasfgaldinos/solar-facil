import { About } from "@/sections/about";
import { Hero } from "@/sections/hero";
import { MissionAndValues } from "@/sections/mission-and-values";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <Hero />
        <About />
        <MissionAndValues />
      </main>
    </div>
  );
}
