import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Layout } from "@/components/organisms/Layout";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "evolve",
  description: "転職活動を効率的に管理するためのサービスです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="js">
      <body className={notoSans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
