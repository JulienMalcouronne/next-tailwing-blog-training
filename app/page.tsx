import CTACard from '@/components/elements/cta-card/cta-card';
import PaddingContainer from '@/components/layout/padding-container';
import PostCard from '@/components/post/post-card/post-card';
import PostList from '@/components/post/post-list/post-list';
import { prisma } from './db';
import { notFound } from 'next/navigation';

async function getPosts() {
  try {
    return await prisma.posts.findMany({
      include: {
        category: {},
        author: {},
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts');
  }
}

export default async function Page() {
  const posts = await getPosts();

  if (!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard reverse post={posts[0]} />
        <PostList
          posts={posts.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard reverse post={posts[3]} />
        <PostList
          posts={posts.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
