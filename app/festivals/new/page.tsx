'use client';
import Form from '@/components/form/form';
import { IFestival } from '@/models/client/festival.model';
import { useState } from 'react';

const NewFestivalPage = () => {
  const [newFestivalName, setFestivalName] = useState('');
  const createFestival = async (
    payload: Pick<IFestival, 'title'>,
  ): Promise<IFestival> => {
    const res = await fetch('/api/festivals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  };

  const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createFestival({ title: newFestivalName });
      setFestivalName('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      formId={'form-festival'}
      initialValue={{ data: '' }}
      submitFunction={submit}
      fields={[
        {
          setField: setFestivalName,
          initialValue: newFestivalName,
          type: 'text',
          name: 'title',
          id: 'title',
          label: 'title',
          required: true,
        },
      ]}
    />
  );
};

export default NewFestivalPage;
