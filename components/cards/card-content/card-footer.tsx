import { ICardContentProps } from './interfaces/card-content';

function CardFooter(props: ICardContentProps) {
  return <footer>{props.children}</footer>;
}
export default CardFooter;
