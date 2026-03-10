"use client";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { HeaderLink } from "./header-link";

export function Header({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  const [menu, setMenu] = useState<"open" | "closed">("closed");

  function handleMenu() {
    setMenu((old) => (old === "closed" ? "open" : "closed"));
  }

  return (
    <header className="z-20 w-full bg-bg fixed">
      <div className="max-w-7xl mx-auto w-full flex flex-col px-4">
        <div className="w-full flex justify-between items-center">
          <Image
            height={73}
            width={110}
            className="h-auto"
            src="/logo.webp"
            alt="Logo Solar Fácil"
          />

          <nav className="hidden md:flex gap-4">
            <HeaderLink onClick={() => onScrollTo("hero")}>Início</HeaderLink>
            <HeaderLink onClick={() => onScrollTo("about")}>Sobre</HeaderLink>
            <HeaderLink onClick={() => onScrollTo("projects")}>
              Projetos
            </HeaderLink>
            <HeaderLink onClick={() => onScrollTo("benefits")}>
              Benefícios
            </HeaderLink>
            <HeaderLink onClick={() => onScrollTo("services")}>
              Serviços
            </HeaderLink>
            <HeaderLink onClick={() => onScrollTo("steps")}>Etapas</HeaderLink>
            <HeaderLink onClick={() => onScrollTo("contact")}>
              Contato
            </HeaderLink>
          </nav>

          <div className="flex gap-4 items-center md:hidden">
            <button
              aria-label="Abrir/fechar menu de links"
              onClick={handleMenu}
              type="button"
              className="h-8 w-8 cursor-pointer hover:scale-105 active:scale-100 transition"
            >
              {menu === "open" ? (
                <XIcon size={32} weight="bold" />
              ) : (
                <ListIcon size={32} weight="bold" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${menu === "open" ? "flex" : "hidden"} abolute top-50 flex flex-col items-center gap-3 border-t-2 border-gray-200 mt-4 pt-4 pb-4`}
        >
          <HeaderLink onClick={() => onScrollTo("hero")}>Início</HeaderLink>
          <HeaderLink onClick={() => onScrollTo("about")}>Sobre</HeaderLink>
          <HeaderLink onClick={() => onScrollTo("projects")}>
            Projetos
          </HeaderLink>
          <HeaderLink onClick={() => onScrollTo("benefits")}>
            Benefícios
          </HeaderLink>
          <HeaderLink onClick={() => onScrollTo("services")}>
            Serviços
          </HeaderLink>
          <HeaderLink onClick={() => onScrollTo("steps")}>Etapas</HeaderLink>
          <HeaderLink onClick={() => onScrollTo("contact")}>Contato</HeaderLink>
        </div>
      </div>
    </header>
  );
}
