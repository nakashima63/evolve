import { HeaderLogo } from "../atoms/HeaderLogo";
import { TextLink } from "../atoms/TextLink";
import { UserIcon } from "../atoms/UserIcon";

export const Header = () => {
  return (
    <header className="w-full h-24 bg-zinc-200 flex justify-between items-center">
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
