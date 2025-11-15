import { About } from "@/sections/about";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <Hero />
        <About />
      </main>
    </div>
  );
}
