interface Props {
  type?: "button" | "submit";
  label: string;
  className: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export const Button = ({ type, label, className, onClick }: Props) => {
  const buttonStyle = {
    primary:
      "text-green-600 border-1 border-green-600 border-solid hover:bg-green-600 hover:text-white w-16 h-10 p-2 rounded-md justify-center items-center flex shrink-0",
    secondary: "",
    danger: "",
  };

  return (
    <button type={type} className={buttonStyle[className]} onClick={onClick}>
      {label}
    </button>
  );
};
