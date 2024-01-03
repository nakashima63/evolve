import { DropdownMenuLabel as DropdownMenuLabelShadcn } from "@/components/ui/dropdown-menu";

interface Props {
  text: string;
}

export const DropdownMenuLabel = ({ text }: Props) => {
  return <DropdownMenuLabelShadcn>{text}</DropdownMenuLabelShadcn>;
};
