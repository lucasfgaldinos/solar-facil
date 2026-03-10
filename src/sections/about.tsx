import { EyeIcon, RocketIcon, SealCheckIcon } from "@phosphor-icons/react";
import Image from "next/image";
import aboutBanner from "@/assets/about-banner.jpg";
import { InfoCard } from "@/components/info-card";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function About() {
  return (
    <Section bgColor="secondary" id="about">
      <Title>Um pouco sobre nós</Title>

      <div className="lg:grid lg:grid-cols-13 lg:items-center lg:gap-10">
        <div className="lg:col-span-8">
          <p className="my-6 md:text-lg max-w-3xl mx-auto text-text text-center lg:text-left">
            A Solar Fácil nasceu com a missão de democratizar o acesso à energia
            solar no Brasil. Somos especialistas no projeto e na instalação de
            sistemas fotovoltaicos para residências e empresas, oferecendo uma
            solução completa, desde a análise de viabilidade até o suporte
            pós-instalação.
          </p>

          <p className="my-6 md:text-lg max-w-3xl mx-auto text-text text-center lg:text-left">
            Nosso propósito é tornar a energia solar simples e acessível.
            Acreditamos que a transição para uma fonte de energia limpa e
            renovável não precisa ser complicada, por isso desenvolvemos
            processos claros e eficientes, com soluções personalizadas para cada
            cliente.
          </p>

          <p className="my-6 md:text-lg max-w-3xl mx-auto text-text text-center lg:text-left">
            Desde a nossa fundação, em 2023, trabalhamos para levar tecnologia,
            economia e sustentabilidade a cada projeto realizado. Nosso
            compromisso é oferecer um atendimento de excelência enquanto
            ajudamos nossos clientes a reduzir custos e contribuir para um
            futuro mais sustentável.
          </p>
        </div>

        <div className="w-full hidden lg:flex lg:h-[550px] relative mt-8 lg:col-span-5">
          <Image
            src={aboutBanner}
            alt="Sistema de energia solar"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mt-14">
        {/* Primeiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Nossa missão",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Democratizar o acesso à energia solar, oferecendo soluções eficientes, personalizadas e de alta qualidade que gerem economia para nossos clientes e um impacto positivo no meio ambiente.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <RocketIcon />,
          }}
        />

        {/* Segundo card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Nossa visão",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Ser a empresa líder e referência em energia solar no Brasil, reconhecida pela inovação, excelência no atendimento e compromisso com um futuro mais sustentável para as próximas gerações.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <EyeIcon />,
          }}
        />

        {/* Terceiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Nossos valores",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Compromisso com o cliente, integridade, inovação contínua, paixão por sustentabilidade e valorização da nossa equipe.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <SealCheckIcon />,
          }}
        />
      </div>
    </Section>
  );
}
