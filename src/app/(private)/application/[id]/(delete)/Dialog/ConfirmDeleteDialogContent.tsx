"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export const ConfirmDeleteDialogContent = ({ id }: Props) => {
  const router = useRouter();
  const handleClick = async (id: string) => {
    const res = await fetch(`/api/application/${id}/delete`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.status === 201) {
      router.push("/application");
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>応募情報削除</AlertDialogTitle>
        <AlertDialogDescription>
          こちらの応募情報を削除します。よろしいですか？
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>キャンセル</AlertDialogCancel>
        <AlertDialogAction onClick={() => handleClick(id)}>
          削除
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
