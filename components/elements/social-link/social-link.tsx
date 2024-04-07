import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const SocialLink = ({
  platform,
  link,
  isShareUrl = false,
}: {
  platform: string;
  link: string;
  isShareUrl?: boolean;
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size="16" />;
      case 'twitter':
        return <Twitter size="16" />;
      case 'instagram':
        return <Instagram size="16" />;
      case 'youtube':
        return <Youtube size="16" />;
      case 'github':
        return <Github size="16" />;
      default:
        return <Github size="16" />;
    }
  };
  return (
    <Link href={link}>
      <div
        className={`${isShareUrl ? 'py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors' : ''}`}
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
