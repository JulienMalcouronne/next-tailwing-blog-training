import { prisma } from '@/app/db';
import FestivalCard from '@/components/cards/festival-cards/festival-card';

const getFestivalById = async (id: string) => {
  try {
    return await prisma.festival.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch festival');
  }
};

const FestivalPage = async ({ params: { id } }: { params: { id: string } }) => {
  const festival = await getFestivalById(id);
  if (festival?.id) {
    return <FestivalCard festival={festival} />;
  } else {
    <span>Festival not found</span>;
  }
};

export default FestivalPage;
