import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Autoservis Bokoch — Brandýs nad Labem-Stará Boleslav",
  description:
    "Opravy a lakování vozidel do 3,5 t, použité náhradní díly, přezutí pneumatik a výkup havarovaných aut v Brandýse nad Labem.",
  keywords:
    "autoservis, Brandýs nad Labem, opravy aut, lakování, náhradní díly, pneumatiky",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
