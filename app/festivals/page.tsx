'use client';

import CardContainer from '@/components/cards/cards-container/card-container';
import FestivalCard from '@/components/cards/festival-cards/festival-card';
import { IFestival } from '@/models/client/festival.model';
import { useEffect, useState } from 'react';
import '../../app/globals.css';

const FestivalPage = () => {
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
    getAllFestivals();
  }, []);

  return (
    <CardContainer>
      {festivals?.length
        ? festivals?.map((f: IFestival, i: number) => (
            <FestivalCard key={i} festival={f} />
          ))
        : ''}
    </CardContainer>
  );
};

export default FestivalPage;
