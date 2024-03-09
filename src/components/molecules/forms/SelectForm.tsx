interface Props {
  id: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean;
}

export const SelectForm = ({
  id,
  name,
  options,
  defaultValue,
  required,
}: Props) => {
  return (
    <select
      id={id}
      name={name}
      className="border border-gray-300 rounded-md w-full p-2"
      defaultValue={defaultValue}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
