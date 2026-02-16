import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { Hero } from "@/sections/hero";
import { MissionAndValues } from "@/sections/mission-and-values";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <Hero />
        <About />
        <MissionAndValues />
        <Benefits />
        <Services />
      </main>
    </div>
  );
}
