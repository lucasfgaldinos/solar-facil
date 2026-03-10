import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function About() {
  return (
    <Section bgColor="secondary" id="about">
      <Title>Um pouco sobre nossa essência</Title>

      <p className="my-6 md:text-lg text-center max-w-3xl mx-auto text-text">
        A Solar Fácil nasceu com a missão de democratizar o acesso à energia
        solar no Brasil. Somos especialistas em projetar e instalar sistemas
        fotovoltaicos para residências e empresas, oferecendo uma solução
        completa, desde a análise de viabilidade até o suporte pós-instalação.
      </p>
    </Section>
  );
}
