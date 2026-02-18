"use client";
import {
  ArrowSquareOutIcon,
  FacebookLogoIcon,
  type Icon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import logo from "@/assets/logo.png";

type SocialCard = {
  name: string;
  username: string;
  link: string;
  icon: Icon;
  gradient: string;
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socials: SocialCard[] = [
    {
      name: "Instagram",
      username: "@solarfacil2023",
      link: "https://www.instagram.com/solarfacil2023",
      icon: InstagramLogoIcon,
      gradient: "from-[#8a2be2] via-[#ff4fd8] to-[#ff7a00]",
    },
    {
      name: "Facebook",
      username: "@edemilson.araujo.alves.2025",
      link: "https://www.facebook.com/edemilson.araujo.alves.2025",
      icon: FacebookLogoIcon,
      gradient: "from-[#1877F2] via-[#3b82f6] to-[#0ea5e9]",
    },
  ];

  return (
    <footer className="bg-dark-bg w-full p-4 md:p-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="pb-12 block mx-auto w-fit">
          <div className="max-w-84">
            <Image
              width={220}
              className="h-auto mx-auto"
              src={logo}
              alt="Logo Solar Fácil"
            />
            <p className="text-gray font-medium text-center">
              Seu parceiro em energia limpa e renovável. Economize e ajude o
              planeta.
            </p>
          </div>
        </div>

        <div className="pb-20 max-w-sm mx-auto">
          <div className="flex flex-col gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 backdrop-blur-md transition shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.15)]"
                >
                  <div
                    className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-linear-to-r ${social.gradient}`}
                  />

                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-dark-bg/40" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${social.gradient}
              `}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-dark-bg/15">
                        <Icon
                          size={28}
                          className="text-bg/80 group-hover:text-bg transition-colors"
                          weight="fill"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col leading-tight">
                      <span className="text-sm text-bg/80 group-hover:text-bg transition-colors">
                        {social.username}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <ArrowSquareOutIcon
                      size={20}
                      className="text-bg/80 transition-colors group-hover:text-bg"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className="max-w-sm mx-auto w-full h-px mb-6 md:mb-10"
            style={{
              background:
                "linear-gradient(90deg, #0000, var(--color-gray), #0000)",
            }}
          />
          <p className="text-center text-gray text-xs">
            &copy; {currentYear} - Solar Fácil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
