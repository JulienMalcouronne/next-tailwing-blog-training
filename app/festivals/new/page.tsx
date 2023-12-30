'use client';
import Form from '@/components/form/form';
import { IFestival } from '@/models/client/festival.model';
import { useState } from 'react';

const NewFestivalPage = () => {
  const [newFestivalName, setFestivalName] = useState('');
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event?.target?.files) {
      const currentFile = event.target.files[0];
      setFile(currentFile);
      console.log(currentFile, file);
    }
  };

  const handleUpload = async () => {
    console.log(file);
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/files', {
      method: 'POST',
    });
    console.log(response);
    const { url } = await response.json();
    console.log(url);
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
      console.log('goes here ? ');
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
          setField: setFestivalName,
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
