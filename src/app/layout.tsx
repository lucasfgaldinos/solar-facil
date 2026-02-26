import type { Metadata } from "next";
import "./globals.css";
import { Fustat } from "next/font/google";
import { Footer } from "@/components/footer";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      <body className={`${fustat.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
