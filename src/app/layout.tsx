import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Footer } from "@/sections/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Solar Fácil",
  description:
    "A Solar Fácil oferece soluções completas em energia solar fotovoltaica. Instalação de placas solares, manutenção e consultoria para reduzir sua conta de luz e gerar energia sustentável.",
  keywords: [
    "energia solar",
    "placas solares",
    "fotovoltaica",
    "energia sustentável",
    "instalação solar",
    "economia de energia",
  ],
  authors: [
    {
      name: "Lucas Galdino - Desenvolvedor",
      url: "https://lucasgaldinoportfolio.vercel.app",
    },
  ],
  openGraph: {
    title: "Solar Fácil - Instalação de Energia Fotovoltaica",
    description:
      "Transforme sua energia com a Solar Fácil: instalação de painéis solares residenciais e comerciais, eficiência e sustentabilidade garantidas.",
    url: "https://solarfacil.vercel.app/",
    siteName: "Solar Fácil",
    images: [
      {
        url: "https://solarfacil.vercel.app/logo.webp",
        width: 1200,
        height: 630,
        alt: "Solar Fácil - Instalação de painéis solares",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Fácil - Energia Solar Fotovoltaica",
    description:
      "Instalação de placas solares residenciais e comerciais com qualidade e sustentabilidade.",
    images: ["https://solarfacil.vercel.app/logo.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Footer />

        <p className="bg-black w-full text-center text-[10px] text-gray-300 p-1">
          Desenvolvido por{" "}
          <b>
            <a
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://lucasgaldinoportfolio.vercel.app/"
            >
              Lucas Galdino
            </a>
          </b>
        </p>
      </body>
    </html>
  );
}
