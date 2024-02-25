import React from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ children, isOpen, onClose }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-zinc-100 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button className="absolute top-0 left-0 m-4" onClick={onClose}>
        閉じる
      </button>
      {children}
    </div>
  );
};
