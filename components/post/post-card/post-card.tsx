import type { IPostCardProps } from './post-card.model';
import Link from 'next/link';
import Image from 'next/image';
import PostContent from '../post-content/post-content';

const PostCard = ({
  post,
  layout = 'horizontal',
  reverse = false,
}: IPostCardProps) => {
  return (
    <Link
      className={` @container ${layout === 'horizontal' ? 'grid items-center md:grid-cols-2 grid-cols-1 gap-10' : 'space-y-10'} `}
      href={`/post/${post.slug}`}
    >
      <Image
        className={`${reverse ? 'md:order-last' : ''} rounded-md w-full object-cover object-center h-full max-h-[300px]`}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />

      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
