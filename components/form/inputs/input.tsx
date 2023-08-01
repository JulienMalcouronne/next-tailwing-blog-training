type InputTypes =
  | 'text'
  | 'password'
  | 'hidden'
  | 'number'
  | 'email'
  | 'textarea';

interface IInputProps {
  type: InputTypes;
  setField: React.Dispatch<React.SetStateAction<string>>;
  initialValue: string;
}

const Input = ({ type, setField, initialValue }: IInputProps) => {
  <input
    type={type}
    value={initialValue}
    onChange={(event) => {
      setField(event.target.value);
    }}
  />;
};

export default Input;
