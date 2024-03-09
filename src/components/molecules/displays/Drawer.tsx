import React from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ children, isOpen, onClose }: Props) => {
  return (
    <div
      className={`border-2 border-green-500 fixed top-0 right-0 w-1/3 h-full bg-zinc-100 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="absolute top-0 left-0 m-4">
        <button onClick={onClose}>閉じる</button>
      </div>
      <div className="p-4 pt-16">{children}</div>
    </div>
  );
};
