import cn from "classnames";

interface Props {
  type?: "button" | "submit";
  label: string;
  className: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export const Button = ({ type, label, className, onClick }: Props) => {
  const buttonColor = cn({
    "text-green-600 border-green-600 hover:bg-green-600":
      className === "primary",
    "text-orange-600 border-orange-600 hover:bg-orange-600":
      className === "secondary",
    "text-red-600 border-red-600 hover:bg-red-600": className === "danger",
  });

  return (
    <button
      type={type}
      className={`${buttonColor} text-sm border border-solid hover:text-white min-w-20 h-10 p-2 rounded-md justify-center items-center flex shrink-0`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
