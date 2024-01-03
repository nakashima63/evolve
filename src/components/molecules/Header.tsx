import { HeaderLogo } from "@/components/atoms/HeaderLogo";
import { TextLink } from "@/components/atoms/TextLink";
import { UserIcon } from "@/components/atoms/UserIcon";
import { DropdownMenu } from "@/components/atoms/DropdownMenu";
import { DropdownMenuTrigger } from "@/components/atoms/DropdownMenuTrigger";
import { DropdownMenuContent } from "@/components/atoms/DropdownMenuContent";
import { DropdownMenuItem } from "@/components/atoms/DropdownMenuItem";
import { DropdownMenuSeparator } from "@/components/atoms/DropdownMenuSeparator";
import { DropdownMenuLabel } from "@/components/atoms/DropdownMenuLabel";
import { DropdownMenuItemInterface } from "@/types/DropdownMenuInterface";

interface Props {
  items: DropdownMenuItemInterface[];
}

export const Header = ({ items }: Props) => {
  return (
    <header className="w-full h-24 bg-zinc-100 text-zinc-500 flex justify-between items-center">
      <div className="ml-4 flex items-center">
        <HeaderLogo />
        <div className="ml-4 space-x-4">
          <TextLink href="/" text="ダッシュボード" />
          <TextLink href="/" text="カレンダー" />
          <TextLink href="/" text="応募情報管理" />
        </div>
      </div>
      <div className="mr-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel text="メニュー" />
            <DropdownMenuSeparator />
            {items.map((item, index) => (
              <DropdownMenuItem
                key={index}
                href={item.href}
                label={item.label}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
