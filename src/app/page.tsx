"use client";
import AOS from "aos";
import { useEffect } from "react";
import { CallToAction } from "@/components/callToAction";
import { Header } from "@/components/header";
import { About } from "@/sections/about";
import { Benefits } from "@/sections/benefits";
import { ContactUs } from "@/sections/contactUs";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Services } from "@/sections/services";
import { Steps } from "@/sections/steps";
import "aos/dist/aos.css";
import { Video } from "@/sections/video";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 0,
      once: true,
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 72;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <main>
        <Header onScrollTo={scrollToSection} />
        <Hero />
        <About />
        <Projects />
        <Video />
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
