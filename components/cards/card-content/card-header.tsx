import { ICardContentProps } from './interfaces/card-content';

function CardHeader(props: ICardContentProps) {
  return <header>{props.children}</header>;
}
export default CardHeader;
