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
  setField?: React.Dispatch<React.SetStateAction<string>>;
  initialValue?: string;
  name: string;
  id: string;
  label?: string;
  required: boolean;
}

export interface IInputFileProps {
  type: InputTypes;
  setField?: React.Dispatch<React.SetStateAction<string>>;
  initialValue?: File;
  name: string;
  id: string;
  label?: string;
  required: boolean;
}
