"use client";
import { ListIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "./button";
import { HeaderLink } from "./header-link";

export function Header() {
  const [menu, setMenu] = useState<"open" | "closed">("closed");

  function handleMenu() {
    setMenu((old) => (old === "closed" ? "open" : "closed"));
  }

  return (
    <header className="z-20 w-full shadow-lg fixed top-0 left-0 bg-bg">
      <div className="max-w-7xl mx-auto w-full flex flex-col px-4">
        <div className="w-full flex justify-between items-center">
          <Image
            width={85}
            className="h-auto"
            src={logo}
            alt="Logo Solar Fácil"
          />

          <nav className="hidden md:flex gap-4">
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Serviços</HeaderLink>
            <HeaderLink>Sobre</HeaderLink>
            <HeaderLink>Projetos</HeaderLink>
            <HeaderLink>Depoimentos</HeaderLink>
            <HeaderLink>Contato</HeaderLink>
          </nav>

          <div className="flex gap-4 items-center">
            <Button size="sm">Solicitar Orçamento</Button>

            <button
              onClick={handleMenu}
              type="button"
              className="md:hidden h-8 w-8 cursor-pointer hover:scale-105 active:scale-100 transition"
            >
              <ListIcon size={32} weight="bold" />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${menu === "open" ? "flex" : "hidden"} flex flex-col items-center gap-3 border-t-2 border-gray-200 mt-4 pt-4`}
        >
          <HeaderLink>Home</HeaderLink>
          <HeaderLink>Serviços</HeaderLink>
          <HeaderLink>Sobre</HeaderLink>
          <HeaderLink>Projetos</HeaderLink>
          <HeaderLink>Depoimentos</HeaderLink>
          <HeaderLink>Contato</HeaderLink>
        </div>
      </div>
    </header>
  );
}
