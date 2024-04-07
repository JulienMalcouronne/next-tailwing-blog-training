import CTACard from '@/components/elements/cta-card/cta-card';
import SocialLink from '@/components/elements/social-link/social-link';
import PaddingContainer from '@/components/layout/padding-container';
import PostBody from '@/components/post/post-body/post-body';
import PostDetail from '@/components/post/post-detail/PostDetail';
import { DUMMY_POSTS } from '@/mocks';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <div className="space-y-10">
        <PostDetail post={post} />

        <div className="flex gap-10 flex-col md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex md:flex-col items-center gap-5">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isShareUrl
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL + `/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform="twitter"
                link={`https://www.x.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL + `/post/${post.slug}`}`}
              />
              <SocialLink
                isShareUrl
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle/?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL + `/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        <CTACard />
      </div>
    </PaddingContainer>
  );
};
export default Page;
