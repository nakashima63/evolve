interface Props {
  formId: string;
  errors: string[];
}

export const FormError = ({ formId, errors }: Props) => {
  return (
    <div id={`${formId}-error`} aria-live="polite" aria-atomic="true">
      {errors.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};
