import PaddingContainer from '@/components/layout/padding-container';
import PostList from '@/components/post/post-list/post-list';
import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/mocks';
import { prisma } from '../db';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
};
const getCategoryData = async (slug: string) => {
  try {
    return await prisma.categories.findFirst({
      where: {
        slug,
      },
      select: {
        Posts: {
          select: {
            author: true,
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
    Posts: category.Posts.map((post) => ({
      ...post,
      category: { title: category.title },
    })),
  };
  // const category = DUMMY_CATEGORIES.find(
  //   (category) => category.slug === params.category,
  // );
  // const posts = DUMMY_POSTS.filter(
  //   (post) => post.category.title.toLocaleLowerCase() === params.category,
  // );

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>

      {category?.Posts?.length && <PostList posts={mappedCategories?.Posts} />}
    </PaddingContainer>
  );
};

export default Page;
