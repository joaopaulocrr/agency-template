import type { Metadata } from "next";
import { Geist } from "next/font/google"

import "./globals.css";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "Agência Template",
  description: "Template criado para ser adaptavel a varios nichos de comércio",
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className= {geist.variable} >
         
        <Header />
        {children}

      </body>
    </html>
  );
}
