"use client";

import { useState } from "react";
import { ImageCard } from "@/components/imageCard";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { projects } from "@/data/projects";

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);

  function handleLoadMore() {
    setVisibleCount(projects.length);
  }

  return (
    <Section id="projects">
      <Title>Projetos em Destaque</Title>
      <p
        data-aos="zoom-in-down"
        data-aos-delay="400"
        className="text-center text-text font-semibold max-w-3xl mx-auto py-8"
      >
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
            className="px-6 py-2 rounded bg-primary text-bg font-semibold cursor-pointer hover:bg-secondary hover:text-text transition-all active:scale-90"
          >
            Ver mais projetos
          </button>
        </div>
      )}

      <p className="text-text font-semibold mt-30 mb-4 text-center">
        Assista este vídeo e veja a{" "}
        <span className="text-primary font-extrabold">Solar Fácil</span> em
        ação!
      </p>

      {/** biome-ignore lint: false positive */}
      <video
        poster="/logo.webp"
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        preload="metadata"
        width="100%"
        className="max-w-2xl mt-10 mx-auto shadow-2xl ring-2 ring-primary"
      >
        <source src="/videos/projeto-energia-solar.mp4" type="video/mp4" />
      </video>
    </Section>
  );
}
