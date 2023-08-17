import { IInputProps } from '@/models/client/input.model';

const Input = ({ type, setField, initialValue }: IInputProps) => {
  return (
    <input
      type={type}
      value={initialValue}
      onChange={(event) => {
        setField ? setField(event.target.value) : '';
      }}
    />
  );
};

export default Input;
