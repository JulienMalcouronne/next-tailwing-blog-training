import { Festival } from '@/models/client/festival.model';
import MainCard from '../main-card';
import CardHeader from '../card-content/card-header';
import CardFooter from '../card-content/card-footer';

const FestivalCard = ({ festival }: { festival: Festival }) => {
  return (
    <MainCard>
      <CardHeader>
        <img
          className="w-full"
          src={festival.imageUrl}
          alt="Sunset in the mountains"
        ></img>
      </CardHeader>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{festival.title}</div>

        <p className="text-gray-700 text-base">{festival.description}</p>
      </div>
      <CardFooter>
        {/* todo: extract this to a tag component */}
        <div className="mx-3">
          {festival.tags.map((t: string, i: number) => (
            <span
              className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={i}
            >
              {`#${t}`}
            </span>
          ))}
        </div>
      </CardFooter>
    </MainCard>
  );
};

export default FestivalCard;
