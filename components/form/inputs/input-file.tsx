import { IInputProps } from '@/models/client/input.model';

const InputFile = ({
  type,
  setField,
  initialValue,
  id,
  label,
  required,
}: IInputProps) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        value={initialValue}
        required={required}
        onChange={(event) => {
          setField ? setField(event) : '';
        }}
      />
    </div>
  );
};

export default InputFile;
