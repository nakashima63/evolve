import { ReactNode } from "react";
import { DropdownMenuTrigger as DropdownMenuTriggerShadcn } from "@/components/ui/dropdown-menu";

interface Props {
  children: ReactNode;
}

export const DropdownMenuTrigger = ({ children }: Props) => {
  return <DropdownMenuTriggerShadcn>{children}</DropdownMenuTriggerShadcn>;
};
