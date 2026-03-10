import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function Video() {
  return (
    <Section bgColor="blue">
      <Title>Solar Fácil em ação</Title>

      {/** biome-ignore lint: false positive */}
      <video
        poster="/logo.webp"
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        preload="metadata"
        width="100%"
        className="max-w-3xl mx-auto bg-bg mt-6"
      >
        <source src="/videos/projeto-energia-solar.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-12">
        <Button>Converse com a gente</Button>
      </div>
    </Section>
  );
}
