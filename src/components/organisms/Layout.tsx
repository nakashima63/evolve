import { ReactNode } from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

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
