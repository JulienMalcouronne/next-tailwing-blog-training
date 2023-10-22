import { IInputProps } from '@/models/client/input.model';
import {
  FormEventHandler,
  LegacyRef,
  MutableRefObject,
  ReactElement,
} from 'react';
import Input from './inputs/input';

interface IFormProps {
  // check if when implemented this state props func is useful or not
  // setFormData: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  formId: string;
  submitFunction: FormEventHandler<HTMLFormElement>;
  initialValue: Record<string, unknown>;
  fields: IInputProps[];
  refForm: LegacyRef<HTMLFormElement>;
}

const Form = ({
  submitFunction,
  fields,
  formId,
  refForm,
}: IFormProps): ReactElement<HTMLFormElement> => {
  return (
    <form ref={refForm} id={formId} onSubmit={submitFunction}>
      {fields.map((f: IInputProps, i: number) => (
        <Input
          label={f.label}
          id={f.id}
          name={f.name}
          key={i}
          initialValue={f.initialValue}
          type={f.type}
          setField={f.setField}
        ></Input>
      ))}

      <button type="submit" className="btn bg-teal-500">
        Submit
      </button>
    </form>
  );
};

export default Form;
