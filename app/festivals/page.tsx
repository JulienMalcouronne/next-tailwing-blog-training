import type { IFestival } from '@/models/client/festival.model';
import CardContainer from '@/components/cards/cards-container/card-container';
import FestivalCard from '@/components/cards/festival-cards/festival-card';
import Link from 'next/link';
import { prisma } from '../db';

const getFestivals = async () => {
  try {
    return await prisma.festival.findMany();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch festivals');
  }
};

const FestivalsPage = async () => {
  const festivals = await getFestivals();

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
