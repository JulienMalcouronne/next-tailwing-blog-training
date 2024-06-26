import type { IPost } from '@/types/collection';

export interface IPostCardProps {
  post: IPost;
  layout?: 'vertical' | 'horizontal';
  reverse?: boolean;
}
