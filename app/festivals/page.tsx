'use client';

import CardContainer from '@/components/cards/cards-container/card-container';
import FestivalCard from '@/components/cards/festival-cards/festival-card';
import { IFestival } from '@/models/client/festival.model';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FestivalsPage = () => {
  const [festivals, setFestivals] = useState<IFestival[]>([]);

  const getAllFestivals = async () => {
    try {
      const res = await fetch('/api/festivals');
      const festivals = await res.json();
      setFestivals(festivals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) getAllFestivals();
  }, []);

  return (
    <CardContainer>
      {festivals?.length
        ? festivals?.map((f: IFestival) => (
            <Link key={f.id} href={`/festivals/${f.id}`}>
              <FestivalCard festival={f} />
            </Link>
          ))
        : ''}
    </CardContainer>
  );
};

export default FestivalsPage;
