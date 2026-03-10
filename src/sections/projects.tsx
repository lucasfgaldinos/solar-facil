"use client";

import { useState } from "react";
import { ImageCard } from "@/components/imageCard";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { projects } from "@/data/projects";

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + 6, projects.length));
  }

  return (
    <Section id="projects">
      <Title>Alguns dos nossos projetos</Title>
      <p className="text-center text-text md:text-lg max-w-3xl mx-auto mt-6 mb-8">
        Confira alguns dos nossos projetos que estão gerando economia e
        sustentabilidade para nossos clientes.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-9">
        {projects.slice(0, visibleCount).map((item, index) => (
          <ImageCard
            // biome-ignore lint: false positive
            key={index}
            img={item.img}
            title="Projeto de energia solar."
          />
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            type="button"
            className="px-6 py-2 rounded-full bg-primary text-bg cursor-pointer hover:bg-primary/90 transition-all active:scale-90"
          >
            Ver mais projetos
          </button>
        </div>
      )}
    </Section>
  );
}
