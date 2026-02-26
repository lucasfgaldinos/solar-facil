"use client";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  RocketIcon,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { InfoCard } from "@/components/info-card";
import { LearnMoreLink } from "@/components/learn-more-link";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

type MissionAndValueDataProps = {
  phosphorIcon: ReactNode;
  title: string;
  description: string;
};

const missionAndValuesData: MissionAndValueDataProps[] = [
  {
    phosphorIcon: <RocketIcon />,
    title: "Missão",
    description:
      "Tornar a energia solar acessível, impulsionando a transição energética com soluções inovadoras e de alta qualidade.",
  },
  {
    phosphorIcon: <EyeIcon />,
    title: "Visão",
    description:
      "Compromisso, Sustentabilidade, Inovação e Transparência com nossos clientes e parceiros.",
  },
  {
    phosphorIcon: <CheckCircleIcon />,
    title: "Valores",
    description:
      "Compromisso, Sustentabilidade, Inovação e Transparência com nossos clientes e parceiros.",
  },
];

export function Essence() {
  return (
    <Section bgColor="secondary">
      <div>
        <Title>Nossa Essência</Title>
        <p className="my-6 max-w-3xl mx-auto text-text text-center">
          Nosso compromisso vai além da instalação de painéis solares.
          <br />
          Buscamos um futuro mais sustentável para todos.
        </p>
      </div>

      <div className="flex gap-4 pb-6 flex-col lg:flex-row">
        {missionAndValuesData.length > 0 &&
          missionAndValuesData.map((item) => (
            <InfoCard
              key={item.title}
              icon={{
                content: item.phosphorIcon,
                alignment: "left",
                bg: true,
              }}
              name={{
                content: item.title,
                alignment: "left",
                size: "md",
              }}
              description={{
                content: item.description,
                alignment: "left",
                size: "sm",
              }}
              bg="secondary"
            />
          ))}
      </div>

      <LearnMoreLink alignment="center" href="/">
        Conheça um pouco mais sobre nossa cultura <ArrowRightIcon size={16} />
      </LearnMoreLink>
    </Section>
  );
}
