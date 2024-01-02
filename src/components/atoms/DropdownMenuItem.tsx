import Link from "next/link";
import { DropdownMenuItem as DropdownMenuItemShadcn } from "@/components/ui/dropdown-menu";

interface Props {
  label: string;
  href: string;
}

export const DropdownMenuItem = ({ label, href }: Props) => {
  return (
    <DropdownMenuItemShadcn>
      <Link href={href}>{label}</Link>
    </DropdownMenuItemShadcn>
  );
};
