import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Fácil",
  description:
    "Energia Solar Fácil e Acessível - Faça já um orçamento e comece a economizar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
