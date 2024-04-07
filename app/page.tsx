import CTACard from '@/components/elements/cta-card/cta-card';
import PaddingContainer from '@/components/layout/padding-container';
import PostCard from '@/components/post/post-card/post-card';
import PostList from '@/components/post/post-list/post-list';
import { DUMMY_POSTS } from '@/mocks';
import { prisma } from './db';
import { notFound } from 'next/navigation';
export default async function Home() {
  const getAllPosts = async () => {
    try {
      const posts = await prisma.posts.findMany();
      console.log(posts);
      return posts;
    } catch (error) {
      console.error(error);
      // throw new Error('Error fetching posts');
    }
  };
  const posts = await getAllPosts();
  if (!posts) {
    // return notFound();
  }
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
