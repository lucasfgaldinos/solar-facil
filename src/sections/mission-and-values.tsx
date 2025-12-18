"use client";
import {
  ArrowRightIcon,
  ListChecksIcon,
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
    phosphorIcon: <ListChecksIcon />,
    title: "Valores",
    description:
      "Compromisso, Sustentabilidade, Inovação e Transparência com nossos clientes e parceiros.",
  },
];

export function MissionAndValues() {
  return (
    <Section>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
        <div>
          <Title alignment="left">Nossa Missão e Valores</Title>
          <p className="py-6 md:text-lg">
            Nosso compromisso vai além da instalação de painéis solares.
            Buscamos um futuro mais sustentável para todos.
          </p>
          <LearnMoreLink alignment="left" href="/">
            Conheça nossa cultura <ArrowRightIcon size={16} />
          </LearnMoreLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {missionAndValuesData.length > 0 &&
            missionAndValuesData.map((item) => (
              <InfoCard
                key={item.title}
                icon={{
                  content: item.phosphorIcon,
                  alignment: "left",
                  bg: false,
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
      </div>
    </Section>
  );
}
