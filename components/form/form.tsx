import { IInputProps } from '@/models/client/input.model';
import { FormEventHandler, LegacyRef, ReactElement } from 'react';
import Input from './inputs/input';
import InputFile from './inputs/input-file';

interface IFormProps {
  // check if when implemented this state props func is useful or not
  // setFormData: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  formId: string;
  submitFunction: FormEventHandler<HTMLFormElement>;
  initialValue: Record<string, unknown>;
  fields: IInputProps[];
  refForm?: LegacyRef<HTMLFormElement>;
}

const Form = ({
  submitFunction,
  fields,
  formId,
  refForm,
}: IFormProps): ReactElement<HTMLFormElement> => {
  return (
    <form className="p-2" ref={refForm} id={formId} onSubmit={submitFunction}>
      <fieldset>
        {fields.map((f: IInputProps, i: number) => (
          <Input
            label={f.label}
            id={f.id}
            name={f.name}
            key={i}
            initialValue={f.initialValue}
            type={f.type}
            required={f.required}
            setField={f.setField}
          />
        ))}
      </fieldset>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
