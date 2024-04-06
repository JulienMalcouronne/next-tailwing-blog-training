import type { IPostCardProps } from './post-card.model';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
      <Image alt={post.title} src={post.image} width={600} height={300} />
      <div>{post.title}</div>
    </Link>
  );
};

export default PostCard;
