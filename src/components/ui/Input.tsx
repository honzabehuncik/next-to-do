interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
}

const Input = ({
  name,
  type,
  placeholder,
  value,
  required,
}: InputProps) => {
  return (
    <>
      <input
        className="w-full p-2 border-gray-200 border rounded-2xl"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
