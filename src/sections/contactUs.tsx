"use client";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

export function ContactUs() {
  return (
    <Section bgColor="secondary">
      <Title>Entre em Contato</Title>

      <div className="mt-6 md:mt-10 flex flex-col">
        <div className="w-fit mx-auto flex flex-col gap-10 pb-8">
          <div>
            <p className="text-primary flex items-center gap-2 text-lg font-bold">
              <MapPinIcon weight="fill" size={22} /> Endereço
            </p>

            <p className="relative left-1 mt-2 text-text">
              R. Monte Azul, 1406 - Esplanada, Rio Pardo de Minas - MG
            </p>
          </div>

          <div>
            <p className="text-primary flex items-center gap-2 text-lg font-bold">
              <PhoneIcon weight="fill" size={22} /> Telefone
            </p>

            <p className="relative left-1 mt-2 text-text">+55 (38) 9873-1678</p>
          </div>

          <div>
            <p className="text-primary flex items-center gap-2 text-lg font-bold">
              <ClockIcon weight="fill" size={22} /> Horário de Atendimento
            </p>

            <ul className="list-none relative left-1 mt-2 text-text flex flex-col gap-1">
              <li>Segunda a Sábado - 24h</li>
              <li>Domingo - Fechado</li>
            </ul>
          </div>
        </div>

        <iframe
          className="rounded-xl border border-gray/50 shadow-lg select-none"
          title="Localização no Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.3788004879484!2d-42.55305842418482!3d-15.624804284992173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74e1ff5c7b8f12f%3A0x9f053f936d0d4e67!2sR.%20Monte%20Azul%2C%201406%20-%20Esplanada%2C%20Rio%20Pardo%20de%20Minas%20-%20MG%2C%2039530-000!5e0!3m2!1spt-BR!2sbr!4v1771253846608!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}
