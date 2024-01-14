import { ReactNode } from "react";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full bg-white flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
