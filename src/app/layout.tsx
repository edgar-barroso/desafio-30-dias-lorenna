import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Desafio 30 dias",
  description: "Desafio 30 dias Lorenna Lizot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
