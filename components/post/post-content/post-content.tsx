import { ArrowRight } from 'lucide-react';
import type { IPostContentProps } from './post-content.model';
import { getReadingTime, getRelativeDate } from '@/lib/helpers';

const PostContent = ({ post, isPostPage = false }: IPostContentProps) => {
  return (
    <div className="space-y-2">
      <div
        className={`flex gap-2 flex-wrap items-center text-neutral-400 ${isPostPage ? 'text-sm' : '@md:text-sm text-xs'}`}
      >
        <div
          className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-600' : 'text-indigo-600'}`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      <h2
        className={`${isPostPage ? 'text-2xl md:text-3xl lg:text-4xl font-bold' : 'font-medium @lg:text-3xl @md:text-2xl text-xl'}`}
      >
        {post.title}
      </h2>
      <p className="text-base @lg:text-lg text-neutral-600 leading-snug">
        {post.description}
      </p>
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read more
          <ArrowRight />
        </div>
      )}
    </div>
  );
};
export default PostContent;
