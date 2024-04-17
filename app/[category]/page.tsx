import PaddingContainer from '@/components/layout/padding-container';
import PostList from '@/components/post/post-list/post-list';

import { prisma } from '../db';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  try {
    const categories = await prisma.categories.findMany({
      select: {
        slug: true,
      },
    });
    return categories.map((category) => {
      return {
        category: category.slug,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
const getCategoryData = async (slug: string) => {
  try {
    return await prisma.categories.findFirst({
      where: {
        slug,
      },
      select: {
        posts: {
          select: {
            author: true,
            body: true,
            date_created: true,
            date_updated: true,
            image: true,
            slug: true,
            title: true,
          },
        },
        title: true,
        description: true,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const Page = async ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  const category = await getCategoryData(params.category);

  if (!category) {
    notFound();
  }
  const mappedCategories = {
    ...category,
    posts: category.posts.map((post) => ({
      ...post,
      category: { title: category.title },
    })),
  };

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>

      {category?.posts?.length && <PostList posts={mappedCategories?.posts} />}
    </PaddingContainer>
  );
};

export default Page;
