'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PaddingContainer from '../layout/padding-container';
import { ILink } from '../../models/client/links.model';
import FestivalCard from '../cards/festival-cards/festival-card';
import CardContainer from '../cards/cards-container/card-container';
import { Festival, IFestival } from '@/models/client/festival.model';
import Form from '../form/form';

const NavMenu = ({
  onAppStateChange,
  links,
  app,
}: {
  onAppStateChange: Function;
  links: ILink[];
  app: string;
}) => {
  const appSwitch: string = app == 'blog' ? 'festivout' : 'blog';
  const [festivals, setFestivals] = useState<IFestival[]>([]);
  const [newFestivalName, setFestivalName] = useState('');

  const getAllFestivals = async () => {
    try {
      const res = await fetch('/api/festivals');
      const festivals = await res.json();
      setFestivals(festivals);
    } catch (error) {
      console.log(error);
    }
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
      const data = await createFestival({ title: newFestivalName });
      setFestivals([...festivals, data]);
      setFestivalName('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFestivals();
  }, []);

  return (
    <div>
      <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md">
        <PaddingContainer>
          <div className="py-5 flex items-center justify-between">
            <Link className="font-bold text-lg" href="/">
              Explorer
            </Link>
            <nav>
              <ul className="flex items-center gap-4 text-neutral-600">
                {links?.map((link: ILink, index: number) => (
                  <li key={index}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
                <li
                  className="cursor-pointer"
                  onClick={() => onAppStateChange(appSwitch)}
                >
                  {' '}
                  Reach {appSwitch}
                </li>
              </ul>
            </nav>
          </div>
        </PaddingContainer>
      </div>
      <CardContainer>
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
            },
          ]}
        ></Form>
        {festivals?.length
          ? festivals?.map((f: Festival, i: number) => (
              <FestivalCard key={i} festival={f} />
            ))
          : ''}
      </CardContainer>
    </div>
  );
};
export default NavMenu;
