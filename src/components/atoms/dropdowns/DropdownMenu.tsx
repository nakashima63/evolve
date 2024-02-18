import { ReactNode } from "react";
import { DropdownMenu as DropdownMenuItemShadcn } from "@/components/ui/dropdown-menu";

interface Props {
  children: ReactNode;
}

export const DropdownMenu = ({ children }: Props) => {
  return <DropdownMenuItemShadcn>{children}</DropdownMenuItemShadcn>;
};
