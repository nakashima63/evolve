"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: Props) => {
  const router = useRouter();

  const validateAuth = async (): Promise<boolean> => {
    const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/validate`;
    const res = await fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });

    if (res.status !== 200) {
      return false;
    }

    return true;
  };

  try {
    const isAuth = validateAuth();
    console.log("認証情報の取得に成功しました!");

    if (!isAuth) {
      router.push("/login");
    }
  } catch (error) {
    console.log("認証情報の取得に失敗しました!");
    console.error(error);
    router.push("/login");
  }

  return <>{children}</>;
};

export default PrivateLayout;
