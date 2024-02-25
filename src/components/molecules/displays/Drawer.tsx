import React from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Drawer = ({ children, isOpen }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-zinc-100 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="absolute top-0 left-0 m-4"
        onClick={() => {
          /* ここに閉じる動作を実装 */
        }}
      >
        閉じる
      </button>
      {children}
    </div>
  );
};
