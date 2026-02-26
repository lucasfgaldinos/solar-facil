import banner from "@/assets/banner.jpg";
import { Button } from "@/components/button";
import { Section } from "@/components/section";

export function Hero() {
  console.log(banner.src);
  return (
    <Section>
      <div
        className="h-[80dvh] rounded-xl bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute left-0 top-0 bg-black/60 h-[80dvh] w-full rounded-xl content-end">
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <h1 className="font-black text-3xl leading-9 md:text-5xl text-bg max-w-lg md:leading-14">
              Energia Solar Fácil e Acessível
            </h1>
            <p className="text-bg max-w-2xl">
              Reduza sua conta de luz com uma fonte de energia limpa e
              renovável. Peça uma avaliação gratuita e comece a economizar.
            </p>
            <Button size="lg">Peça Seu Orçamento</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
