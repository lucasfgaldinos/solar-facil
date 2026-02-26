"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageCardProps = {
  img: StaticImageData;
  title: string;
  description?: string;
};

export function ImageCard({ img, title, description }: ImageCardProps) {
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
        aria-label={`Abrir imagem ${title}`}
        className="group relative w-full h-60 rounded-xl overflow-hidden shadow-lg cursor-pointer text-left"
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-bg font-semibold">{title}</h3>
          {description && (
            <p className="text-text-secondary text-sm mt-1">{description}</p>
          )}
        </div>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm p-4 sm:p-6">
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
            tabIndex={-1}
            className="relative outline-none"
          >
            {/* BOTÃO FECHAR */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar imagem"
              className="
              cursor-pointer absolute right-2 top-2 rounded p-2 bg-bg/10 backdrop-blur-md text-bg text-sm flex items-center justify-center hover:bg-bg/20 transition focus:outline-none focus:ring-2 focus:ring-bg/50"
            >
              ✕ Fechar
            </button>

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
