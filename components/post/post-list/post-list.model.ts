import { IPost } from '@/types/collection';

export interface IPostListProps {
  posts: IPost[];
  layout?: 'vertical' | 'horizontal';
}
