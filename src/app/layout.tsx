import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <Header />
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
