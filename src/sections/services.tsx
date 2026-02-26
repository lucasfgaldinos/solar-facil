"use client";
import {
  BriefcaseIcon,
  HeadsetIcon,
  HouseLineIcon,
} from "@phosphor-icons/react";
import { InfoCard } from "@/components/info-card";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function Services() {
  return (
    <Section>
      <Title>Nossos Serviços</Title>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mt-10">
        {/* Primeiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Instalação Residencial",
            size: "md",
          }}
          description={{
            alignment: "center",
            content:
              "Projetos personalizados para sua casa, garantindo máxima eficiência e economia na sua conta de luz.",
            size: "sm",
          }}
          bg="secondary"
          icon={{
            bg: false,
            alignment: "center",
            content: <HouseLineIcon />,
          }}
        />

        {/* Segundo card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Instalação Comercial",
            size: "md",
          }}
          description={{
            alignment: "center",
            content:
              "Soluções para empresas de todos os tamanhos que buscam reduzir custos operacionais e ser mais sutentáveis.",
            size: "sm",
          }}
          bg="secondary"
          icon={{
            bg: false,
            alignment: "center",
            content: <BriefcaseIcon />,
          }}
        />

        {/* Terceiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Manutenção e Suporte",
            size: "md",
          }}
          description={{
            alignment: "center",
            content:
              "Garantimos o desempenho contínuo de seu sistema com nossa equipe de especialistas sempre a postos.",
            size: "sm",
          }}
          bg="secondary"
          icon={{
            bg: false,
            alignment: "center",
            content: <HeadsetIcon />,
          }}
        />
      </div>
    </Section>
  );
}
