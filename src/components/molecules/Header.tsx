import { HeaderLogo } from "@/components/atoms/HeaderLogo";
import { TextLink } from "@/components/atoms/TextLink";
import { UserIcon } from "@/components/atoms/UserIcon";

export const Header = () => {
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
        <UserIcon />
      </div>
    </header>
  );
};
