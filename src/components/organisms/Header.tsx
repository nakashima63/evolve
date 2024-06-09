import { HeaderLogo } from "@/components/molecules/HeaderLogo";
import { TextLink } from "@/components/atoms/TextLink";
import { UserIcon } from "@/components/atoms/UserIcon";
import { DropdownMenu } from "@/components/atoms/dropdowns/DropdownMenu";
import { DropdownMenuTrigger } from "@/components/atoms/dropdowns/DropdownMenuTrigger";
import { DropdownMenuContent } from "@/components/atoms/dropdowns/DropdownMenuContent";
import { DropdownMenuItem } from "@/components/atoms/dropdowns/DropdownMenuItem";
import { DropdownMenuSeparator } from "@/components/atoms/dropdowns/DropdownMenuSeparator";
import { DropdownMenuLabel } from "@/components/atoms/dropdowns/DropdownMenuLabel";
import { LogoutButton } from "@/components/atoms/LogoutButton";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";

export const Header = async () => {
  const cookieStore = cookies();
  const fetchClient = async () => {
    const supabase = await createClient(cookieStore);
    return supabase;
  };

  const fetchUser = async () => {
    const client = await fetchClient();
    const {
      data: { user },
    } = await client.auth.getUser();
    return user;
  };

  const authUser = await fetchUser();

  return (
    <header className="w-full h-24 bg-zinc-100 text-zinc-500">
      <div className="flex justify-between items-center max-w-[900px] mx-auto px-2">
        <div className="ml-4 flex items-center">
          <HeaderLogo />
          {authUser && (
            <div className="ml-4 space-x-4">
              <TextLink href="/dashboard" text="ダッシュボード" />
              <TextLink href="/calendar" text="カレンダー" />
              <TextLink href="/application" text="応募情報管理" />
            </div>
          )}
        </div>
        <div className="mr-4 flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <UserIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel text="メニュー" />
              <DropdownMenuSeparator />
              {authUser ? (
                <LogoutButton />
              ) : (
                <>
                  <DropdownMenuItem>
                    <TextLink href="/login" text="ログイン" />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TextLink href="/register" text="ユーザ登録" />
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
