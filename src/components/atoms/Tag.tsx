import React from "react";

interface Props {
  text: string;
}

export const Tag = ({ text }: Props) => {
  return (
    <span
      className={
        "inline-block w-20 px-2 py-1 text-sm text-white bg-green-500 rounded-lg truncate cursor-pointer"
      }
    >
      {text}
    </span>
  );
};
