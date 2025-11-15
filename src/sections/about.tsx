"use client";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { LearnMoreLink } from "@/components/learn-more-link";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function About() {
  return (
    <Section>
      <Title>Sobre Nós</Title>

      <p className="my-6 text-center max-w-3xl mx-auto md:text-lg">
        A Solar Fácil nasceu com a missão de democratizar o acesso à energia
        solar no Brasil. Somos especialistas em projetar e instalar sistemas
        fotovoltaicos para residências e empresas, oferecendo uma solução
        completa, desde a análise de viabilidade até o suporte pós-instalação.
      </p>

      <LearnMoreLink href="/">
        Saiba mais sobre nossa história{" "}
        <ArrowRightIcon size={16} weight="bold" />
      </LearnMoreLink>
    </Section>
  );
}
