import PostContent from '../post-content/post-content';
import type { IPostDetailProps } from './PostDetail.model';
import Image from 'next/image';

const PostDetail = ({ post }: IPostDetailProps) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        className="rounded-md objet-cover object-center h-[300px] md:h-[500px] mt-6"
        src={post.image}
        width={1200}
        height={500}
        alt={post.title}
      />
    </div>
  );
};

export default PostDetail;
