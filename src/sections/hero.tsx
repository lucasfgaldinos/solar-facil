import banner from "@/assets/banner.webp";
import { Button } from "@/components/button";
import { Section } from "@/components/section";

export function Hero() {
  return (
    <Section id="hero">
      <div
        className="h-[80vh] rounded-xl bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute left-0 top-0 bg-black/60 h-[80vh] w-full rounded-xl content-end">
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="font-extrabold text-4xl leading-10 md:text-6xl text-bg max-w-lg md:leading-16"
            >
              Energia{" "}
              <span className="bg-linear-to-r from-[#FFE602] to-[#FE5E10] bg-clip-text text-transparent">
                Solar Fácil
              </span>{" "}
              e <span className="text-green-500">Acessível</span>
            </h1>
            <p
              data-aos="fade-down"
              className="text-bg max-w-2xl text-lg md:text-xl font-normal"
            >
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
