import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { i18n, type Locale } from "../../i18n-config"
import "./globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({
  variable: "--font-inter",
  weight: ['400','500','600','700','800'],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Develware Solutions",
  description: "Potencia tu Proyecto con un Equipo de Desarrollo de Alto Nivel",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params
  return (
    <html lang={lang}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
