"use client";

import { XIcon } from "@phosphor-icons/react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageCardProps = {
  img: StaticImageData;
  title: string;
};

export function ImageCard({ img, title }: ImageCardProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Travar scroll do body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ⌨️ Fechar com ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* CARD */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Expandir imagem"
        className="group relative w-full h-60 rounded-md overflow-hidden shadow-lg cursor-pointer text-left"
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm p-4 sm:p-6">
          {/* BOTÃO FECHAR */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar imagem"
            className="
              cursor-pointer absolute right-[10%] top-[5%] rounded p-2 bg-bg/10 backdrop-blur-md text-bg text-sm flex items-center justify-center hover:bg-bg/20 transition focus:outline-none focus:ring-2 focus:ring-bg border-2 border-bg/50 active:scale-90"
          >
            <XIcon size={30} />
          </button>

          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
            tabIndex={-1}
            className="relative outline-none"
          >
            <Image
              src={img}
              alt={title}
              width={1600}
              height={1000}
              sizes="100vw"
              className="w-full h-auto max-w-[95vw] max-h-[85vh] min-h-60 object-contain"
              priority
            />

            {/* Título acessível */}
            <span id="image-modal-title" className="sr-only">
              {title}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
