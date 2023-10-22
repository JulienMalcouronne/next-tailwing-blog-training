import { IInputProps } from '@/models/client/input.model';

const Input = ({ type, setField, initialValue, id, label }: IInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={initialValue}
        onChange={(event) => {
          setField ? setField(event.target.value) : '';
        }}
      />
    </div>
  );
};

export default Input;
