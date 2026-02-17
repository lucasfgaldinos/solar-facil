import { CallToAction } from "@/components/callToAction";
import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { ContactUs } from "@/sections/contactUs";
import { Hero } from "@/sections/hero";
import { MissionAndValues } from "@/sections/mission-and-values";
import { Services } from "@/sections/services";
import { Steps } from "@/sections/steps";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <Hero />
        <About />
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
