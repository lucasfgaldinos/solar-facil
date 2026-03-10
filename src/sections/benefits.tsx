"use client";
import {
  CurrencyCircleDollarIcon,
  PlantIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import { InfoCard } from "@/components/info-card";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function Benefits() {
  return (
    <Section bgColor="secondary" id="benefits">
      <Title>Benefícios da energia solar</Title>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mt-10">
        {/* Primeiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Economia na conta",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Reduza significativamente seus gastos mensais com eletricidade.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <CurrencyCircleDollarIcon />,
          }}
        />

        {/* Segundo card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Energia sustentável",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Contribua para um planeta mais limpo utilizando uma fonte de energia 100% renovável.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <PlantIcon />,
          }}
        />

        {/* Terceiro card */}
        <InfoCard
          name={{
            alignment: "center",
            content: "Valorização do imóvel",
            size: "lg",
          }}
          description={{
            alignment: "center",
            content:
              "Aumente o valor de mercado do seu imóvel com um sistema de energia moderno.",
            size: "md",
          }}
          bg="primary"
          icon={{
            bg: false,
            alignment: "center",
            content: <TrendUpIcon />,
          }}
        />
      </div>
    </Section>
  );
}
