import { CallToAction } from "@/components/callToAction";
import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { ContactUs } from "@/sections/contactUs";
import { MissionAndValues } from "@/sections/essence";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Services } from "@/sections/services";
import { Steps } from "@/sections/steps";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <MissionAndValues />
        <Benefits />
        <Services />
        <Steps />
        <CallToAction
          title="Pronto para começar a economizar?"
          description="Solicite um orçamento e descubra o potencial da energia solar para você."
        />
        <ContactUs />
      </main>
    </div>
  );
}
