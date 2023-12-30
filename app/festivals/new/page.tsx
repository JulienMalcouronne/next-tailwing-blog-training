'use client';
import Form from '@/components/form/form';
import { IFestival } from '@/models/client/festival.model';
import { useState } from 'react';

const NewFestivalPage = () => {
  const [newFestivalName, setFestivalName] = useState('');
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      const currentFile = event.target.files[0];
      setFile(currentFile);
    }
  };

  const setName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFestivalName(event.target.value);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/files', {
      method: 'POST',
    });

    const { url } = await response.json();

    await fetch(url, {
      method: 'PUT',
      body: formData,
    });
  };

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
      await handleUpload();
      // await createFestival({ title: newFestivalName });
      // setFestivalName('');
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
          setField: setName,
          initialValue: newFestivalName,
          type: 'text',
          name: 'title',
          id: 'title',
          label: 'title',
          required: true,
        },
        {
          setField: handleFileChange,
          type: 'file',
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
