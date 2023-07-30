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
          src={
            festival?.imageUrl ??
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          }
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
          {festival?.tags?.map((t: string, i: number) => (
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
