"use client";
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import { HeaderLink } from "./header-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg w-full p-4 pb-0 md:p-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="pb-8 flex flex-wrap gap-10 justify-between">
          <div className="max-w-64">
            <p className="font-bold text-bg mb-3">Solar Fácil</p>
            <p className="text-gray text-sm font-medium">
              Sua parceira em energia limpa e renovável. Economize e ajude o
              planeta.
            </p>
          </div>

          <div className="w-fit flex flex-col">
            <p className="font-bold text-bg mb-3">Links Fáceis</p>
            <HeaderLink variant="light">Home</HeaderLink>
            <HeaderLink variant="light">Serviços</HeaderLink>
            <HeaderLink variant="light">Sobre</HeaderLink>
            <HeaderLink variant="light">Projetos</HeaderLink>
            <HeaderLink variant="light">Depoimentos</HeaderLink>
            <HeaderLink variant="light">Contato</HeaderLink>
          </div>

          {/* TODO Adicionar contatos do Mineiro aqui */}
          <div className="max-w-64">
            <p className="font-bold text-bg mb-3">Contato</p>
            <div className="flex flex-col gap-2">
              <p className="text-gray text-sm font-medium">
                contato@solarfacil.com
              </p>
              <p className="text-gray text-sm font-medium">(11) 99999-8888</p>
              <p className="text-gray text-sm font-medium">
                Av. Principal, 123, Rio Pardo de Minas - MG
              </p>
            </div>
          </div>

          <div className="w-fit">
            <p className="font-bold text-bg mb-3">Redes Sociais</p>
            <div className="flex gap-4">
              <a
                className="w-8 h-8 active:scale-95 transition"
                href="https://www.facebook.com/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogoIcon
                  className="text-gray hover:text-primary"
                  size={32}
                  weight="fill"
                />
              </a>
              <a
                className="w-8 h-8 active:scale-95 transition"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon
                  className="text-gray hover:text-primary"
                  size={32}
                  weight="fill"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-gray">
          <p className="text-center text-gray text-sm font-light">
            &copy; {currentYear} Solar Fácil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
