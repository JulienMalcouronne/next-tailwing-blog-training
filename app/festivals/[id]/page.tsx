'use client';

import FestivalCard from '@/components/cards/festival-cards/festival-card';
import { IFestival } from '@/models/client/festival.model';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const FestivalPage = () => {
  const params = useParams();

  const [festival, setFestival] = useState<IFestival>();
  const getFestival = async () => {
    try {
      const res = await fetch(`/api/festivals/${params?.id}`);
      const festival = await res.json();
      setFestival(festival);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined) getFestival();
  });

  if (festival?.id) {
    return <FestivalCard festival={festival} />;
  } else {
    <span>Festival not found</span>;
  }
};

export default FestivalPage;
