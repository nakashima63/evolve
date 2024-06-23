"use client";

import { TextLink } from "@/components/atoms/TextLink";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          エラーが発生しました
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          しばらくしてから再度お試しください。
        </p>
        <TextLink href="/dashboard" text="ホームに戻る" />
      </div>
    </main>
  );
}
