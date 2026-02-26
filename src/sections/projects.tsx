import { ImageCard } from "@/components/imageCard";
import { LearnMoreLink } from "@/components/learn-more-link";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section>
      <Title>Projetos em Destaque</Title>
      <p className="text-center text-text font-semibold max-w-3xl mx-auto py-8">
        Confira alguns dos nossos projetos que estão gerando economia e
        sustentabilidade para nossos clientes.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-9">
        {projects.map((item) => (
          <ImageCard key={item.name} img={item.img} title={item.name} />
        ))}
      </div>

      <LearnMoreLink href="/">Veja todos os projetos</LearnMoreLink>
    </Section>
  );
}
