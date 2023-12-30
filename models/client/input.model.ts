type InputTypes =
  | 'text'
  | 'password'
  | 'hidden'
  | 'number'
  | 'email'
  | 'textarea'
  | 'file'

export interface IInputProps {
  type: InputTypes;
  setField?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue?: string;
  name: string;
  id: string;
  label?: string;
  required: boolean;
}
