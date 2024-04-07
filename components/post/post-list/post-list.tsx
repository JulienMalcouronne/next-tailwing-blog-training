import PostCard from '../post-card/post-card';
import type { IPostListProps } from './post-list.model';

const PostList = ({ posts, layout }: IPostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
