"use client";
import {
  CheckCircleIcon,
  HammerIcon,
  type Icon,
  PiggyBankIcon,
  ReceiptIcon,
} from "@phosphor-icons/react";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

type Step = {
  icon: Icon;
  stepNumber: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    stepNumber: 1,
    icon: ReceiptIcon,
    title: "Orçamento",
    description: "Solicite uma avaliação e receba um projeto personalizado.",
  },
  {
    stepNumber: 2,
    icon: HammerIcon,
    title: "Instalação",
    description:
      "Nossa equipe qualificada realiza a instalação de forma rápida e segura.",
  },
  {
    stepNumber: 3,
    icon: CheckCircleIcon,
    title: "Ativação",
    description:
      "Cuidamos de toda a burocracia para conectar seu sistema à rede elétrica.",
  },
  {
    stepNumber: 4,
    icon: PiggyBankIcon,
    title: "Economia",
    description:
      "Comece a economizar na sua conta de luz e a gerar sua própria energia.",
  },
];

export function Steps() {
  return (
    <Section bgColor="secondary">
      <Title>Como Funciona</Title>

      <div className="flex flex-col lg:flex-row lg:flex-nowrap mt-16 items-center lg:items-start gap-4 lg:gap-0">
        {steps
          .sort((a, b) => a.stepNumber - b.stepNumber)
          .map(({ stepNumber, icon: Icon, title, description }) => (
            <div className="max-w-130 w-full" key={title}>
              <div className="p-3 rounded-full w-fit mx-auto bg-primary/20 text-primary mb-5 shadow">
                <Icon size={30} />
              </div>

              <hr className="text-text-secondary hidden lg:block" />

              <div className="px-4 py-4 lg:py-2">
                <p className="text-text font-bold text-lg text-center">
                  {`${stepNumber}. ${title}`}
                </p>

                <p className="text-text-secondary text-center mt-1 font-medium">
                  {description}
                </p>

                <hr className="text-text-secondary lg:hidden mt-8" />
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
