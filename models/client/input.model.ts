type InputTypes =
  | 'text'
  | 'password'
  | 'hidden'
  | 'number'
  | 'email'
  | 'textarea';

export interface IInputProps {
  type: InputTypes;
  setField?: React.Dispatch<React.SetStateAction<string>>;
  initialValue?: string;
}
