interface Props {
  id: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "datetime-local";
  name: string;
  placeholder?: string;
  required?: boolean;
}

export const InputForm = ({
  id,
  type,
  name,
  placeholder,
  required = false,
}: Props) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className="border border-gray-300 rounded-md w-full p-2"
      placeholder={placeholder}
      required={required}
    />
  );
};
