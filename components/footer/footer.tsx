import siteConfig from '@/config/site';
import PaddingContainer from '../layout/padding-container';
import Link from 'next/link';
import SocialLink from '../elements/social-link/social-link';

const Footer = () => {
  return (
    <div className="py-8 border-t mt-0">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-600 text-lg">
            {siteConfig.description}
          </p>
        </div>
        <section className="mt-6 flex justify-between gap-4 flex-wrap">
          <div>
            <div className="font-medium text-lg">#Explore the world</div>
            <div className="flex items-center gap-3 text-neutral-600 mt-2">
              {Object.entries(siteConfig.socialLink).map(
                ([platform, link]: [string, string], index: number) => (
                  <SocialLink key={index} platform={platform} link={link} />
                ),
              )}
            </div>
          </div>
          <div className="">
            <div className="text-sm text-neutral-400">Currently at</div>
            <div className="px-3 py-2 bg-white shadow-md rounded-md flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full w-2 h-2"></div>
              {siteConfig.currentlyAt}
            </div>
          </div>
        </section>
        <section className="border-t py-3 flex flex-wrap items-center justify-between gap-4 mt-10">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div>
            Made with love by
            <Link
              className="underline underline-offset-4 ms-1"
              href="https://github.com/JulienMalcouronne"
            >
              @JulienMalcouronne
            </Link>
          </div>
        </section>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
